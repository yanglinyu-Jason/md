<template>
  <div class="video-play">
    <div class="video-play-body" :id="domId"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import JSEncrypt from 'jsencrypt';

export default {
  props: {
    domId: {
      type: String,
      required: true,
    },
    videoCode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      oWebControl: null,
      retry: 0,
      initCount: 0,
    };
  },
  computed: {
    ...mapState('Video', {
      videoScreenId: 'videoScreenId',
    }),
  },
  watch: {
    videoScreenId(val) {
      if (val && val !== this.domId) {
        this.oWebControl.JS_HideWnd();
      } else if (!val) {
        this.oWebControl.JS_ShowWnd();
      }
    },
  },
  mounted() {
    this.initPlugin();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    initPlugin() {
      const { domId, videoCode } = this;
      const _this = this;
      const { offsetWidth, offsetHeight } = document.getElementById(domId);
      const oWebControl = new window.WebControl({
        szPluginContainer: domId, // 指定容器id
        iServicePortStart: 15900, // 指定起止端口号，建议使用该值
        iServicePortEnd: 15909,
        szClassId: '23BF3B0A-2C56-4D97-9C03-0CB103AA8F11', // 用于IE10使用ActiveX的clsid
        cbConnectSuccess() { // 创建WebControl实例成功
          _this.initCount = 0;
          oWebControl.JS_StartService('window', { // WebControl实例创建成功后需要启动xs服务
            dllPath: './VideoPluginConnect.dll', // 值"./VideoPluginConnect.dll"写死
          }).then(() => { // 启动插件服务成功
            oWebControl.JS_SetWindowControlCallback({ // 设置消息回调
              cbIntegrationCallBack: (message) => {
                const { responseMsg: { msg: { result } } } = message;
                console.log('cbIntegrationCallBack:', message, result, domId);
                if (result === 769 && _this.retry < 5) { // 连接失败，重连
                  // eslint-disable-next-line no-plusplus
                  _this.retry++;
                  console.log('失败重连');
                  setTimeout(() => {
                    _this.startPreview(oWebControl, videoCode);
                  }, 2000);
                }
                if (result === 1024) { // 全屏
                  _this.$store.commit('Video/TOGGLE_VIDEOSCREEN', domId);
                }
                if (result === 1025) { // 取消全屏
                  _this.$store.commit('Video/TOGGLE_VIDEOSCREEN', '');
                }
              },
            });
            // JS_CreateWnd创建视频播放窗口，宽高可设定
            oWebControl.JS_CreateWnd(domId, offsetWidth, offsetHeight).then(() => {
              _this.initVideo(oWebControl, videoCode);
            });
          });
        },
        cbConnectError: (error) => {
          _this.oWebControl = null;
          console.log('cbConnectError:', error, _this.domId);
          window.WebControl.JS_WakeUp('VideoWebPlugin://');
          // eslint-disable-next-line no-plusplus
          _this.initCount++;
          if (_this.initCount < 3) {
            setTimeout(() => {
              _this.initPlugin();
            }, 3000);
          } else {
            // eslint-disable-next-line max-len
            console.error('插件启动失败，请检查插件是否安装！chrom浏览器请修改 chrome://flags/#block-insecure-private-network-requests 为 disabled');
          }
        },
      });
      this.oWebControl = oWebControl;
    },
    async initVideo(oWebControl, code) {
      const params = {
        funcName: 'getRSAPubKey',
        argument: JSON.stringify({ keyLength: 1024 }),
      };
      const { responseMsg } = await oWebControl.JS_RequestInterface(params);
      if (responseMsg.data) {
        this.pubKey = responseMsg.data;
        this.getVideoConfig(oWebControl);
        this.startPreview(oWebControl, code);
      }
    },
    /* 视频插件配置 */
    getVideoConfig(oWebControl) {
      const configObj = {
        funcName: 'init',
        argument: JSON.stringify({
          appkey: '27634336', // API网关提供的appkey
          secret: this.setEncrypt('zaC8sYemkREqXUtvnSzJ'), // API网关提供的secret
          ip: '10.2.0.12', // API网关IP地址
          playMode: 0, // 播放模式（决定显示预览还是回放界面）
          port: 443, // 端口
          snapDir: 'C:\\SnapDir', // 抓图存储路径
          videoDir: 'C:\\VideoDir', // 紧急录像或录像剪辑存储路径
          layout: '1x1', // 布局
          enableHTTPS: 1, // 是否启用HTTPS协议
          encryptedFields: 'secret', // 加密字段
          showToolbar: 1, // 是否显示工具栏
          showSmart: 0, // 是否显示智能信息
          reconnectTimes: 3, // 重连次数
          buttonIDs: '1,0,256,257,258,259,260,512,513,514,515,516,517,768,769', // 自定义工具条按钮
        }),
      };
      oWebControl.JS_RequestInterface(configObj).then(() => {
      });
    },
    /* 视频流RSA加密 */
    setEncrypt(value) {
      const encrypt = new JSEncrypt();
      encrypt.setPublicKey(this.pubKey);
      return encrypt.encrypt(value);
    },
    /* 视频播放 */
    startPreview(oWebControl, code) {
      code = code.trim();
      oWebControl.JS_RequestInterface({
        funcName: 'startPreview',
        argument: JSON.stringify({
          cameraIndexCode: code, // 监控点编号
          streamMode: 0, // 主子码流标识：0-主码流，1-子码流
          transMode: 1, // 传输协议：0-UDP，1-TCP
          gpuMode: 0, // 是否启用GPU硬解，0-不启用，1-启用
          wndId: -1, // 播放窗口序号（在2x2以上布局下可指定播放窗口）
        }),
      });
    },
    destroy(cb) {
      if (this.oWebControl != null) {
        this.oWebControl.JS_HideWnd(); // 先让窗口隐藏，规避可能的插件窗口滞后于浏览器消失问题
        this.oWebControl.JS_Disconnect().then((msg) => { // 断开与插件服务连接成功
          console.log('断开连接:', msg, this.domId);
          this.oWebControl = null;
          if (cb) {
            cb();
          }
        },
        (error) => { // 断开与插件服务连接失败
          console.log('断开连接失败:', error, this.domId);
          this.destroy();
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.video-play {
  width: 100%;
  height: 100%;
  &-body {
    width: 100%;
    height: 100%;
  }
}
</style>

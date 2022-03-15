<template>
    <div class="wrap-xiaofangJiankongs">
        <Subnav :showArrow="false" :baseInfo="baseInfo" />
        <div class="wrapper">
            <div class="wrapper-box qsfx">
                <div class="wrapper-title" style="position: relative">
                    煤气监测报警设备在线率
                </div>
                <div class="wrapper-container">
                    <div class="wrapper-gauge" id="wrapper-gauge-1"></div>
                </div>
            </div>
            <div class="wrapper-box lxfx">
                <div class="wrapper-title">消防监测传感器设备在线率</div>
                <div class="wrapper-container">
                    <div class="wrapper-gauge" id="wrapper-gauge-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import { getcw, getch } from '../../../utils/util';
import Subnav from '../../../components/Subnav/index.vue';

export default {
  components: {
    Subnav,
  },
  props: {},
  data() {
    return {
      baseInfo: {
        iconUrl: '',
        title: '隐患排查治理',
        size: `${getcw(-244)}px ${getch(-114)}px`,
      },
      options: [
        {
          value: '选项1',
          label: '近6个月',
        },
        {
          value: '选项2',
          label: '近一年',
        },
      ],
      value: '近6个月',
      optionss: [
        {
          value: '动力厂',
          label: '动力厂',
        },
      ],
      values: '动力厂',
      meiqiChart: null,
      xiaofangChart: null,
    };
  },
  mounted() {
    this.mqjcbjsbzxl();
    this.xfjccgqsbzxl();
  },
  methods: {
    // 煤气监测报警设备在线率
    mqjcbjsbzxl() {
      const option = {
        title: {
          show: true,
          text: '100%',
          left: 'center',
          bottom: '12%',
          textStyle: {
            color: '#00F7F7',
            fontSize: getch(24),
          },
        },
        series: [
          {
            data: [100],
            name: '最外层',
            type: 'gauge',
            roundCap: true,
            radius: '70%',
            center: ['50%', '50%'],
            splitNumber: 0, // 刻度数量
            startAngle: 225,
            endAngle: -45,
            z: 4,
            zlevel: 0,
            axisLine: {
              show: true,
              roundCap: true,
              lineStyle: {
                width: getcw(11), // 宽度
                color: [
                  [0.1, new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [
                      { offset: 0.1, color: '#FDC63B' },
                      { offset: 0.67, color: '#E3FF32' },
                      { offset: 1, color: '#E3FF32' },
                    ],
                  )],
                  [0.3, new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [
                      { offset: 0.1, color: '#C4FF29' },
                      { offset: 0.67, color: '#17D813' },
                      { offset: 1, color: '#00D23A' },
                    ],
                  )],

                  [0.6, new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [{ offset: 0.1, color: '#00D286' },
                      { offset: 0.67, color: '#00D2EA' },
                      { offset: 1, color: '#00D2B8' }],
                  )],
                  [0.8, new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [
                      { offset: 0.1, color: '#C4FF29' },
                      { offset: 0.67, color: '#17D813' },
                      { offset: 1, color: '#00D23A' },
                    ],
                  )],
                  [1, new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [
                      { offset: 0.1, color: '#FDC63B' },
                      { offset: 0.67, color: '#E3FF32' },
                      { offset: 1, color: '#E3FF32' },
                    ],
                  )],
                  // [1, new echarts.graphic.LinearGradient(
                  //   0, 1, 0, 0,
                  //   [
                  //     { offset: 0.1, color: '#FDC63B' },
                  //     { offset: 0.67, color: '#E3FF32' },
                  //     { offset: 1, color: '#E3FF32' },
                  //   ],
                  // )],
                  // [0.9, new echarts.graphic.LinearGradient(
                  //   0, 1, 0, 0,
                  //   [
                  //     { offset: 0.1, color: '#00D291' },
                  //     { offset: 0.67, color: '#17D813' },
                  //     { offset: 1, color: '#44E413' },
                  //   ],
                  // )],
                  // [1, new echarts.graphic.LinearGradient(
                  //   0, 1, 0, 0,
                  //   [
                  //     { offset: 0.1, color: '#C4FF29' },
                  //     { offset: 0.67, color: '#E3FF32' },
                  //     { offset: 1, color: '#E3FF32' },
                  //   ],
                  // )],
                ],
              },
            },
            // 分隔线样式
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: true,
            },
            detail: {
              show: false,
            },
            pointer: {
              show: true,
              length: 40,
              itemStyle: {
                color: '#3880B3',
                borderJoin: 'round',
              },
            },
          },
          {
            name: '内部细刻度',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '60%',
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: false,
              // type: 'dashed',
              lineStyle: {
                width: 1,
                color: [
                  [
                    1,
                    // eslint-disable-next-line no-undef
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: '#FDFD39',
                      },
                      {
                        offset: 0.25,
                        color: '#1CD913',
                      },
                      {
                        offset: 0.5,
                        color: '#00D2EC',
                      },
                      {
                        offset: 0.75,
                        color: '#1CD913',
                      },
                      {
                        offset: 1,
                        color: '#FDFD39',
                      },
                    ]),
                  ],
                ],

              },
            }, // 仪表盘轴线
            axisTick: {
              show: false,

            },
            // 刻度线文字
            axisLabel: {
              distance: 8,
              show: true,
              textStyle: {
                color: '#77FFFF',
                fontSize: getch(13),
              },
            },
            splitLine: {
              show: true,
              length: 2,
              lineStyle: {
                width: getcw(8),
                color: '#3880B3',
              },

            },
            detail: {
              show: false,
            },
            pointer: {
              show: false,
            },
          },
        ],
      };
      this.meiqiChart = echarts.init(document.getElementById('wrapper-gauge-1'));
      this.meiqiChart.setOption(option, true);
      window.onresize = () => {
        this.meiqiChart.resize();
      };
    },
    // 消防监测传感器设备在线率
    xfjccgqsbzxl() {
      const option = {
        title: {
          show: true,
          text: '100%',
          left: 'center',
          bottom: '12%',
          textStyle: {
            color: '#00F7F7',
            fontSize: getch(24),
          },
        },
        series: [
          {
            data: [100],
            name: '最外层',
            type: 'gauge',
            roundCap: true,
            radius: '70%',
            center: ['50%', '50%'],
            splitNumber: 0, // 刻度数量
            startAngle: 225,
            endAngle: -45,
            z: 4,
            zlevel: 0,
            axisLine: {
              show: true,
              roundCap: true,
              lineStyle: {
                width: getcw(11), // 宽度
                color: [
                  [0.1, new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [
                      { offset: 0.1, color: '#FDC63B' },
                      { offset: 0.67, color: '#E3FF32' },
                      { offset: 1, color: '#E3FF32' },
                    ],
                  )],
                  [0.3, new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [
                      { offset: 0.1, color: '#C4FF29' },
                      { offset: 0.67, color: '#17D813' },
                      { offset: 1, color: '#00D23A' },
                    ],
                  )],

                  [0.6, new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [{ offset: 0.1, color: '#00D286' },
                      { offset: 0.67, color: '#00D2EA' },
                      { offset: 1, color: '#00D2B8' }],
                  )],
                  [0.8, new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [
                      { offset: 0.1, color: '#C4FF29' },
                      { offset: 0.67, color: '#17D813' },
                      { offset: 1, color: '#00D23A' },
                    ],
                  )],
                  [1, new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [
                      { offset: 0.1, color: '#FDC63B' },
                      { offset: 0.67, color: '#E3FF32' },
                      { offset: 1, color: '#E3FF32' },
                    ],
                  )],
                  // [1, new echarts.graphic.LinearGradient(
                  //   0, 1, 0, 0,
                  //   [
                  //     { offset: 0.1, color: '#FDC63B' },
                  //     { offset: 0.67, color: '#E3FF32' },
                  //     { offset: 1, color: '#E3FF32' },
                  //   ],
                  // )],
                  // [0.9, new echarts.graphic.LinearGradient(
                  //   0, 1, 0, 0,
                  //   [
                  //     { offset: 0.1, color: '#00D291' },
                  //     { offset: 0.67, color: '#17D813' },
                  //     { offset: 1, color: '#44E413' },
                  //   ],
                  // )],
                  // [1, new echarts.graphic.LinearGradient(
                  //   0, 1, 0, 0,
                  //   [
                  //     { offset: 0.1, color: '#C4FF29' },
                  //     { offset: 0.67, color: '#E3FF32' },
                  //     { offset: 1, color: '#E3FF32' },
                  //   ],
                  // )],
                ],
              },
            },
            // 分隔线样式
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: true,
            },
            detail: {
              show: false,
            },
            pointer: {
              show: true,
              length: 40,
              itemStyle: {
                color: '#3880B3',
                borderJoin: 'round',
              },
            },
          },
          {
            name: '内部细刻度',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '60%',
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: false,
              // type: 'dashed',
              lineStyle: {
                width: 1,
                color: [
                  [
                    1,
                    // eslint-disable-next-line no-undef
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: '#FDFD39',
                      },
                      {
                        offset: 0.25,
                        color: '#1CD913',
                      },
                      {
                        offset: 0.5,
                        color: '#00D2EC',
                      },
                      {
                        offset: 0.75,
                        color: '#1CD913',
                      },
                      {
                        offset: 1,
                        color: '#FDFD39',
                      },
                    ]),
                  ],
                ],

              },
            }, // 仪表盘轴线
            axisTick: {
              show: false,

            },
            // 刻度线文字
            axisLabel: {
              distance: 8,
              show: true,
              textStyle: {
                color: '#77FFFF',
                fontSize: getch(13),
              },
            },
            splitLine: {
              show: true,
              length: 2,
              lineStyle: {
                width: getcw(8),
                color: '#3880B3',
              },

            },
            detail: {
              show: false,
            },
            pointer: {
              show: false,
            },
          },
        ],
      };
      this.xiaofangChart = echarts.init(document.getElementById('wrapper-gauge-2'));
      this.xiaofangChart.setOption(option, true);
      window.onresize = () => {
        this.xiaofangChart.resize();
      };
    },
  },
  destroyed() {
    if (this.safety) {
      this.meiqiChart = null;
      this.xiaofangChart = null;
    }
  },
};
</script>
<style lang="scss" scoped>
/deep/.el-input {
  width: cw(97);
  .el-input__inner {
    height: ch(30);
    line-height: ch(30);
  }
  .el-input__icon {
    line-height: ch(30);
  }
}
.selct-xuanzhe {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: auto;
  .el-select {
    margin-left: cw(10);
  }
}
.wrap-xiaofangJiankongs {
  margin-bottom: ch(17);
  margin-left: cw(19);
  .wrapper {
    width: 100%;
    height: ch(541);
    padding: ch(10) cw(10);
    background: url('../../../assets/image/di6.png') no-repeat;
    background-size: 100% 100%;
    &-title {
      font-size: ch(18);
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #00f7f7;
      display: flex;
      align-items: center;
      height: ch(30);
      &::before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: cw(18);
        height: ch(18);
        margin-right: cw(10);
        @include background(cw(-13), ch(-170));
      }
    }
    .wrapper-box {
      width: 100%;
      height: ch(250) !important;
      margin-bottom: ch(20);
      position: relative;
      .wrapper-container {
        width: 100%;
        height: ch(220);
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: ch(22);
        .wrapper-gauge {
          width: 100%;
          height: ch(260);
          margin-top: -8vh;
        }
      }
    }
    .wrapper-box.qsfx {
      height: ch(271) !important;
      .wrapper-container {
        height: 100%;
        padding-top: ch(7);
      }
    }
    .wrapper-box.lxfx {
      height: ch(270) !important;
      margin-top: ch(15);
      .wrapper-container {
        height: 100%;
      }
    }
    .wrapper-box.yffb {
      margin-top: ch(10);
    }
  }
  .select-popper {
    margin-left: cw(10);
  }
}
</style>

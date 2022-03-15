<template>
    <div>
        <div id="safety" class="container"></div>
    </div>
</template>
<script>
import * as Echarts from 'echarts';

export default {
  data() {
    return {
      safety: null,
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.safety = Echarts.init(document.getElementById('safety'));
      let options = null;
      const currentSpeedData = [{
        value: '20',
      }];
      const { value } = currentSpeedData[0];
      const colorRegionRate = (value / 100).toFixed(2);
      const colors = [
        [0.05, '#3B85CD'],
        [0.10, '#4CA4CD'],
        [0.15, '#4DA6CD'],
        [0.20, '#62CBCE'],
        [0.25, '#6FE3CE'],
        [0.30, '#70FAC7'],
        [0.35, '#78EDBE'],
        [0.40, '#7AEEBE'],
        [0.45, '#78EABC'],
        [0.50, '#7CFACE'],
        [0.55, '#88F0AD'],
        [0.60, '#8EF3A8'],
        [0.65, '#8EF3A8'],
        [0.70, '#8FE998'],
        [0.75, '#8FE998'],
        [0.80, '#A7F68A'],
        [0.85, '#AEF883'],
        [0.90, '#B6F776'],
        [0.95, '#B7F46F'],
        [1, '#C4FC68'],
      ];
      const colorList = [];
      colors.forEach((item) => {
        if (colorRegionRate >= item[0]) {
          colorList.push(item);
        } else {
          colorList.push([item[0], '#1D4176']);
        }
      });
      options = {
        series: [{
          name: '刻度',
          type: 'gauge',
          radius: '90%',
          center: ['50%', '50%'], // 边距
          min: 0, // 最小刻度
          max: 100, // 最大刻度
          splitNumber: 6, // 刻度数量
          startAngle: 180,
          endAngle: 0,
          axisLine: {
            show: true,
            lineStyle: {
              width: 0,
              shadowBlur: 1,
              color: colorList,
            },
          }, // 仪表盘轴线
          axisLabel: {
            show: false,
            color: '#0ab7ff',
            fontSize: 15,
            distance: -50,
            formatter(flow) {
              return `${flow}分`;
            },
          }, // 刻度标签。
          axisTick: {
            show: true,
            splitNumber: 5,
            lineStyle: {
              color: 'auto',
              width: 3, // 外圈刻度盘
            },
            length: -20,
          }, // 刻度样式
          splitLine: {
            show: false,
            length: -0,
            lineStyle: {
              color: '#ffffff',
            },
          }, // 分隔线样式
          pointer: {
            width: 25,
            showAbove: true,
            icon: 'pin',
            length: '55%',
          },
          itemStyle: {
            color: 'rgba(1, 255, 254, 0.5)',
            shadowColor: 'rgba(0,138,255,0.45)',
            shadowBlur: 20,
            shadowOffsetX: 2,
            shadowOffsetY: 2,
          },
          detail: {
            offsetCenter: [0, '-10%'], // x, y，单位px 偏移位置
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              color: '#00f7f7',
              fontSize: 16,
              background: '#083463',
              borderColor: '#3982f7', // 值域边框颜色
              // 边框颜色
              borderWidth: 1,
              shadowColor: '#5da3a4', // 阴影颜色
              shadowOffsetX: 1, // 阴影水平方向上的偏移距离
              shadowOffsetY: 1, // 阴影垂直方向上的偏移距离
              shadowBlur: 15,
              borderRadius: 8,
              padding: [4, 2, 2, 2],
            },
            formatter(currentSpeed) {
              return currentSpeed > 50 ? '危险' : '安全';
            },
          },
          data: currentSpeedData,
        },
        {
          type: 'gauge',
          radius: '75%',
          center: ['50%', '50%'],
          splitNumber: 0, // 刻度数量
          startAngle: 180,
          endAngle: 0,
          axisLine: {
            show: true,
            lineStyle: {
              width: 5, // 内圈刻度
              borderWidth: 1,
              shadowColor: '#3982f7', // 阴影颜色
              shadowOffsetX: 0, // 阴影水平方向上的偏移距离
              shadowOffsetY: 0, // 阴影垂直方向上的偏移距离
              shadowBlur: 8,
              borderRadius: 2,
              color: [
                [
                  value / 100, new Echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [{
                      offset: 0,
                      color: '#0b699e',
                    }, {
                      offset: 0.5,
                      color: '#f1cb2f',
                    },
                    {
                      offset: 1,
                      color: '#f00',
                    },
                    ],
                  ),
                ],
                [
                  1, '#222e7d',
                ],
              ],
            },
          },
          // 分隔线样式。
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          pointer: {
            show: false,
            length: '80%',
            width: '20%',
          },
          title: {
            show: true,
            offsetCenter: ['0%', '-45%'], // x, y，单位px 瞬时流量
            textStyle: {
              color: '#ffffff',
              fontSize: 12,
              fontWeight: 400,
              opacity: 0.9,
            },
          },
          // 仪表盘详情，用于显示数据。
          detail: {
            show: false,
            offsetCenter: ['10%', '-30%'],
            color: '#ffffff',
            padding: [0, 10],
            backgroundColor: '#000',
            borderRadius: 25,
            // eslint-disable-next-line no-shadow
            formatter(value) {
              return value;
            },
            textStyle: {
              fontSize: 14,
            },
          },
          data: [{
            name: '安全预警等级',
          }],

        },
        {
          name: '内圆',
          type: 'gauge',
          radius: '65%',
          center: ['50%', '50%'],
          startAngle: 190,
          endAngle: -30,
          min: 0,
          max: 100,
          axisLine: {
            show: true,
            lineStyle: {
              width: 15,
              color: [
                [
                  1, new Echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [{
                      offset: 0,
                      color: 'rgba(69, 161, 255,0)',
                    }, {
                      offset: 0.3,
                      color: 'rgba(69, 161, 255,0)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(69, 161, 255, 0.7)',
                    },
                    ],
                  ),
                ],
                [
                  1, 'rgba(28,128,245,.0)',
                ],
              ],
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: 0,
          },
          axisLabel: {
            show: 0,
          },
          pointer: {
            show: false,
            length: '100%',
          },
          detail: {
            show: true,
            offsetCenter: [1, '1%'],
            textStyle: {
              fontSize: 10,
              color: 'transpent',
            },

          },
          itemStyle: {
            color: 'rgba(28, 128, 245,.3)',
            borderColor: 'rgba(28, 128, 245,1)',
          },
          data: [{
            value: 100,
          }],
        },
        ],
      };
      this.safety.setOption(options);
      window.onresize = () => {
        this.safety.resize();
      };
    },
  },
  destroyed() {
    if (this.safety) {
      this.safety = null;
    }
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: ch(300);
  margin-left: cw(-20);
}
</style>

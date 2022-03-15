<template>
    <div>
        <div id="pieChart" class="container"></div>
    </div>
</template>
<script>
import * as Echarts from 'echarts';

export default {
  data() {
    return {
      pieChart: null,
      options: {
        title: {
          text: '99.89%',
          subtext: '隐患整改率',
          left: 'center',
          top: '40%', // top待调整
          textStyle: {
            color: '#00F7F7',
            fontSize: 18,
          },
          subtextStyle: {
            color: '#fff',
            fontSize: 12,
            top: 'center',
          },
          itemGap: 0, // 主副标题间距
        },
        series: [
          {
            type: 'gauge',
            radius: '65%',
            clockwise: false,
            startAngle: '-80',
            endAngle: '-439.9999',
            splitNumber: 30,
            detail: {
              offsetCenter: [0, -30],
              formatter: ' ',
            },
            pointer: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [0, 'transparent'],
                  [10 / 100, '#2CFAFC'],
                  [1, 'transparent'],
                ],
                width: 40,
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              length: 70,
              lineStyle: {
                color: '#0a2032',
                width: 6,
              },
            },
            axisLabel: {
              show: false,
            },
          },
          {
            type: 'pie',
            name: '外层细圆环',
            radius: ['71%', '72%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
              normal: {
                color: '#6cdbf5',
              },
            },
            label: {
              show: false,
            },
            data: [100],
          },
          {
            name: '大环',
            type: 'gauge',
            splitNumber: 70,
            radius: '100%',
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
              show: false,
              lineStyle: {
                color: [[1, '#6cdbf5']],
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              length: 3,
              lineStyle: {
                color: 'auto',
                width: 2,
              },
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
            },
          },
        ],
      },
    };
  },
  created() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      this.pieChart = Echarts.init(document.getElementById('pieChart'));
      this.pieChart.setOption(this.options);
    },
  },
  destroyed() {
    if (this.pieChart) {
      this.pieChart = null;
    }
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: ch(200);
}
</style>

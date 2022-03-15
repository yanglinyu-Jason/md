<template>
    <div class="wrap-container">
        <div class="car-content">
            <div class="sn-body">
                <div class="sn-content">
                    <div id="3dChart" class="highcharts-container"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);

export default {
  mounted() {
    const proProtion = [
      { name: '低风险', value: 7917 },
      { name: '一般风险', value: 1815 },
      { name: '较大风险', value: 1340 },
      { name: '重大风险', value: 21 },
    ];
    const dArr = [];
    proProtion.forEach((item) => {
      const d = [];
      d.push(item.name);
      d.push(item.value);
      dArr.push(d);
    });
    this.options.series[0].data = dArr;
    this.$nextTick(() => {
      this.initChart();
    });
  },
  data() {
    return {
      Chart3d: null,
      options: {
        credits: {
          enabled: false, // 不显示LOGO
        },
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 55,
          },
          backgroundColor: 'rgba(0,0,0,0)',
        },
        title: {
          text: '',
        },
        plotOptions: {
          pie: {
            innerSize: 80,
            depth: 45,
            dataLabels: {
              color: '#fff',
              enabled: true,
              distance: 20, // 设置引导线的长度
              // eslint-disable-next-line consistent-return
              formatter() {
                if (this.point.name === '低风险') {
                  // eslint-disable-next-line max-len
                  return `<span style="color:#1db4e8;font-size: 21px;font-weight:bold;">${this.point.y}</span><span style="color:#AADDFF;font-size: 14px">(个)</span><br>
                        <div style="color:#AADDFF;font-size: 14px;margin-top: 10px;">${this.point.name}</div>`;
                }
                if (this.point.name === '一般风险') {
                  // eslint-disable-next-line max-len
                  return `<span style="color:#d3e024;font-size: 21px;font-weight:bold;">${this.point.y}</span><span style="color:#AADDFF;font-size: 14px">(个)</span><br>
                        <div style="color:#AADDFF;font-size: 14px;margin-top: 10px;">${this.point.name}</div>`;
                }
                if (this.point.name === '较大风险') {
                  // eslint-disable-next-line max-len
                  return `<span style="color:#f0b312;font-size: 21px;font-weight:bold;">${this.point.y}</span><span style="color:#AADDFF;font-size: 14px">(个)</span><br>
                        <div style="color:#AADDFF;font-size: 14px;margin-top: 10px;">${this.point.name}</div>`;
                }
                if (this.point.name === '重大风险') {
                  // eslint-disable-next-line max-len
                  return `<span style="color:#ff1a08;font-size: 21px;font-weight:bold;">${this.point.y}</span><span style="color:#AADDFF;font-size: 14px">(个)</span><br>
                        <div style="color:#AADDFF;font-size: 14px;margin-top: 10px;">${this.point.name}</div>`;
                }
              },
            },
          },
        },
        colors: ['#1db4e8', '#d3e024', '#f0b312', '#ff1a08'],
        series: [
          {
            name: '',
            label: {
              normal: {
                formatter: '{b|{b}}{a|{d}%}\n\n',
                borderWidth: 10,
                borderRadius: 5,
                padding: [0, -50],
                rich: {
                  a: {
                    color: '#333',
                    fontSize: 12,
                    lineHeight: 20,
                  },
                  b: {
                    fontSize: 12,
                    lineHeight: 20,
                    color: '#333',
                  },
                },
              },
            },
            data: [],
          },
        ],
      },
    };
  },
  methods: {
    initChart() {
      this.Chart3d = new Highcharts.Chart('3dChart', this.options);
    },
  },
  destroyed() {
    if (this.Chart3d) {
      this.Chart3d = null;
    }
  },
};
</script>
<style lang="scss" scoped>
.wrap-container {
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: painted;
  .car-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-size: 100% 100%;
    .sn-title {
      width: 100%;
      height: ch(30);
      line-height: ch(30);
      font-size: ch(16);
      text-align: center;
      color: #fff;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 10%,
        rgba(0, 88, 179, 0.3) 20%,
        rgba(0, 88, 179, 0.4) 30%,
        rgba(0, 88, 179, 0.5) 40%,
        rgba(0, 88, 179, 0.8) 50%,
        rgba(0, 88, 179, 0.5) 60%,
        rgba(0, 88, 179, 0.4) 70%,
        rgba(0, 88, 179, 0.3) 80%,
        rgba(0, 0, 0, 0) 90%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    .sn-body {
      width: 100%;
      text-align: center;
      padding: 0 cw(10);
      &-type {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
      }
      .sn-content {
        width: 100%;
        position: relative;
        &-right {
          position: absolute;
          text-align: center;
          top: ch(10);
          right: cw(10);
        }
      }
      .highcharts-container {
        width: 100%;
        height: 22vh;
        margin-top: ch(20);
      }
    }
  }
}
</style>

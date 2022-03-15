<template>
  <div><div id="botChart" class="container"></div></div>
</template>
<script>
import * as Echarts from 'echarts';
import { getcw, getch } from '../../../utils/util';

// 隐患数量
const dataArray = [{
  name: '已整改',
  value: 754,
},
{
  name: '整改中',
  value: 611,
},
{
  name: '未整改',
  value: 400,
},
];
export default {
  data() {
    return {
      botChart: null,
      sumValue: 1000,
      arrName: [],
      arrValue: [],
      objData: {},
      optionData: {},
      options: {
        color: ['#1dd468', '#737f27', '#ff0000'],
        legend: {
          show: true,
          icon: 'square',
          data: dataArray.map(val => (val.name)),
          align: 'left',
          bottom: '-2',
          type: 'plain',
          orient: 'horizontal',
          padding: [0, getcw(5)],
          itemGap: getcw(15),
          itemWidth: getcw(8),
          itemHeight: getch(8),
          formatter(name) {
            return `{title|${name}数量}\n\n{value|${dataArray.find(val => (val.name === name)).value}}  {title|个}`;
          },
          textStyle: {
            rich: {
              title: {
                fontSize: getch(14),
                color: '#8ebad9',
              },
              value: {
                fontSize: getch(16),
                color: '#fff',
              },
            },
          },
        },
        grid: {
          top: '7%',
          bottom: '54%',
          left: '50.5%',
          height: '25%',
          containLabel: false,
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          z: 3,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            inside: false,
            textStyle: {
              color: '#fff',
              fontSize: getch(12),
            },
            show: true,
          },
          data: [],
        }],
        xAxis: [{
          show: false,
        }],
        series: {},
      },
    };
  },
  created() {
    this.arrName = this.getArrayValue(dataArray, 'name');
    this.arrValue = this.getArrayValue(dataArray, 'value');
    this.objData = this.array2obj(dataArray, 'name');
    this.optionData = this.getData(dataArray);
    this.$nextTick(() => {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      this.botChart = Echarts.init(document.getElementById('botChart'));
      this.botChart.setOption(this.options);
    },
    getArrayValue(array, key = 'value') {
      const res = [];
      if (array) {
        array.forEach((t) => {
          res.push(t[key]);
        });
      }
      return res;
    },
    array2obj(array, key) {
      const resObj = {};
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
      }
      return resObj;
    },
    getData(data) {
      const res = {
        series: [
          {
            name: '大环',
            type: 'gauge',
            splitNumber: 15,
            radius: '90%',
            center: ['50%', '40%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
              show: false,
              lineStyle: {
                color: [
                  [1, '#03acb5'],
                ],
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              length: 12,
              lineStyle: {
                color: 'auto',
                width: 3.5,
              },
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
            },
          },
          {
            name: '小环',
            type: 'gauge',
            splitNumber: 15,
            radius: '85%',
            center: ['50%', '40%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: '#03acb5',
                width: 2,
              },
              length: 20,
              splitNumber: 5,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
            },
          },
        ],
        yAxis: [],
      };
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.length; i++) {
        res.series.push({
          name: `${data[i].name}隐患数量${data[i].value}`,
          type: 'pie',
          clockWise: true,
          z: 2,
          hoverAnimation: false,
          radius: [`${58 - i * 15}%`, `${53 - i * 15}%`],
          center: ['50%', '40%'],
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          data: [{
            value: data[i].value,
            name: data[i].name,
          }, {
            // eslint-disable-next-line no-undef
            value: this.sumValue - data[i].value,
            name: '',
            itemStyle: {
              color: 'rgba(0,0,0,0)',
              borderWidth: 1,
            },
            tooltip: {
              show: false,
            },
            label: {
              show: false,
            },
            hoverAnimation: false,
          }],
        });
        res.series.push({
          name: '背景线',
          type: 'pie',
          silent: true,
          z: 1,
          clockWise: true,
          hoverAnimation: false,
          radius: [`${57 - i * 15}%`, `${54 - i * 15}%`],
          center: ['50%', '40%'],
          label: {
            show: false,
          },
          itemStyle: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            borderWidth: 5,
          },
          data: [{
            value: 100,
            itemStyle: {
              color: '#2d6682',
              borderWidth: 2,
            },
            tooltip: {
              show: false,
            },
            hoverAnimation: false,
          }],
        });
        res.yAxis.push(data[i].name);
      }
      this.options.yAxis[0].data = res.yAxis;
      this.options.series = res.series;
      console.log(res.series);
    },
  },
  destroyed() {
    if (this.botChart) {
      this.botChart = null;
    }
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: ch(280);
  padding: 0;
}
</style>

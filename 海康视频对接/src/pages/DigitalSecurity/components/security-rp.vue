<template>
    <div class="wrap-xiaofangJiankongs">
        <Subnav :showArrow="false" :baseInfo="baseInfo" />
        <div class="wrapper">
            <div class="wrapper-box qsfx">
                <div class="wrapper-title" style="position: relative">
                    隐患级别分厂分布
                    <div class="selct-xuanzhe">
                        <el-select
                            v-model="value"
                            size="small"
                            placeholder="近6个月"
                            popper-class="select-popper"
                        >
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="wrapper-container">
                    <div class="wrapper-gauge-4" id="wrapper-gauge-4"></div>
                </div>
            </div>
            <div class="line">
                <div></div>
                <div></div>
            </div>
            <div class="wrapper-box lxfx">
                <div class="wrapper-title">未闭环隐患详情</div>
                <div class="wrapper-container">
                    <security-tablerp />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import { getcw, getch } from '../../../utils/util';
import Subnav from '../../../components/Subnav/index.vue';
import securityTablerp from './security-tablerp.vue';

export default {
  components: {
    Subnav,
    securityTablerp,
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
    };
  },
  mounted() {
    this.yfqsfx();
  },
  methods: {
    // 隐患级别分厂分布
    yfqsfx() {
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          top: '16%',
          bottom: '0',
          containLabel: true,
        },
        legend: {
          top: getch(18),
          textStyle: {
            fontSize: getch(14),
            color: '#FFF',
          },
          align: 'left',
          left: getcw(15),
          icon: 'roundRect',
          itemGap: getcw(31),
          itemWidth: getcw(13),
          itemHeight: getch(5),
        },
        xAxis: {
          type: 'value',
          axisLabel: { show: false },
          splitLine: { show: false },
        },
        yAxis: {
          type: 'category',
          data: ['炼铁厂', '轧钢厂', '物流部', '烧结厂', '炼钢厂', '动力厂'],
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: {
            textStyle: {
              color: '#fff',
            },
          },
        },
        series: [
          {
            name: '一般隐患',
            type: 'bar',
            data: [7921, 5678, 4578, 3089, 2134, 1321],
            barWidth: '5',
            itemStyle: {
              normal: {
                barBorderRadius: [20, 20, 20, 20],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: '#71DFF6' },
                  { offset: 1, color: '#41B4FD' },
                ]),
              },
            },
          },
          {
            name: '重大隐患',
            type: 'bar',
            data: [791, 568, 458, 389, 234, 131],
            barWidth: '5',
            itemStyle: {
              normal: {
                barBorderRadius: [20, 20, 20, 20],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: '#F5F50E' },
                  { offset: 1, color: '#FF9F22' },
                ]),
              },
            },
          },
        ],
      };
      const myChart = echarts.init(document.getElementById('wrapper-gauge-4'));
      myChart.setOption(option, true);
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/.el-input {
  width: cw(97);
  input {
    height: ch(30);
    line-height: ch(30);
  }
}
.selct-xuanzhe {
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  .el-select {
    margin-left: cw(10);
  }
}
.wrap-xiaofangJiankongs {
  width: cw(480);
  margin-left: cw(19);
  .wrapper {
    width: 100%;
    height: ch(922);
    padding: ch(2) cw(10);
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
      height: ch(246) !important;
      margin: ch(10) 0 ch(20) 0;
      position: relative;
      .wrapper-container {
        width: 100%;
        height: ch(293);
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: ch(22);
        padding-bottom: ch(10);
        .wrapper-gauge {
          width: 100%;
          height: ch(275);
        }
        .wrapper-gauge-2 {
          width: 100%;
          height: ch(261);
          margin-top: -8vh;
        }
        .wrapper-gauge-4 {
          width: 100%;
          height: ch(269);
        }
      }
    }
    .wrapper-box.qsfx {
      height: ch(300) !important;
      .wrapper-container {
        padding-top: ch(12);
        margin-top: ch(-20);
      }
    }
    .wrapper-box.lxfx {
      margin-top: ch(21);
      .wrapper-container {
        padding-top: ch(10);
      }
    }
  }
  .select-popper {
    margin-left: cw(10);
  }
  .line {
    width: 100%;
    height: 1px;
    opacity: 0.5;
    display: flex;
    & > div {
      flex: 1;
      height: 100%;
      background: linear-gradient(to right, rgba(0, 255, 255, 0), #00ffff);
    }
    & > div:last-child {
      background: linear-gradient(to right, #00ffff, rgba(0, 255, 255, 0));
    }
  }
}
</style>

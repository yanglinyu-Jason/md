
<template>
  <!-- <h3 v-if="isSeriesEmpty">暂无数据</h3> -->
  <div class="chart"></div>
</template>

<script>
import * as Echarts from 'echarts';
import ResizeListener from 'element-resize-detector';
import { merge, isEmpty } from 'lodash';
import { basicOption } from './defaultOption';

export default {
  name: 'PieChart',
  props: {
    seriesData: {
      type: Array,
      required: true,
      default: () => [],
    },
    extraOption: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      chart: null,
    };
  },

  computed: {
    isSeriesEmpty() {
      return (
        isEmpty(this.seriesData) || this.seriesData.every(item => !item.value)
      );
    },
  },

  watch: {
    seriesData: {
      deep: true,
      handler() {
        this.updateChartView();
      },
    },
  },

  mounted() {
    this.chart = Echarts.init(this.$el);
    this.updateChartView();
    window.addEventListener('resize', this.handleWindowResize);
    this.addChartResizeListener();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
    if (this.chart) {
      this.chart = null;
    }
  },

  methods: {
    /* 合并配置项和数据，对于需要自定义的配置项以及数据，使用merge函数将其合并为一个option */

    assembleDataToOption() {
      // 这部分的图例formatter取决于UI要求，如果你的项目中不需要，就可以不写formatter
      // 由于echarts版本的迭代，这里的写法也有稍许改变
      const formatter = (name) => {
        const data = this.seriesData.find(item => item.name === name) || {};
        return `${name}  :  ${data.value}`;
      };

      return merge(
        {},
        basicOption,
        // { color: pieChartColor },
        {
          legend: { formatter },
          series: [{ data: this.seriesData }],
        },
        this.extraOption,
      );
    },
    /**
     * 对chart元素尺寸进行监听，当发生变化时同步更新echart视图
     */
    addChartResizeListener() {
      const instance = ResizeListener({
        strategy: 'scroll',
        callOnAdd: true,
      });

      instance.listenTo(this.$el, () => {
        if (!this.chart) return;
        this.chart.resize();
      });
    },

    /**
     * 更新echart视图
     */
    updateChartView() {
      if (!this.chart) return;
      const fullOption = this.assembleDataToOption();
      this.chart.setOption(fullOption, true);
    },

    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    handleWindowResize() {
      if (!this.chart) return;
      this.chart.resize();
    },
  },
};
</script>

<style scoped="scoped" lang="scss">
.chart {
  width: 100%;
  height: 100%;
}
</style>

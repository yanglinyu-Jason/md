<template>
    <svg class="linear-gradient-text">
        <defs>
            <linearGradient
                :id="id"
                :x1="gradientDirection.x1"
                :x2="gradientDirection.x2"
                :y1="gradientDirection.y1"
                :y2="gradientDirection.y2"
            >
                <stop
                    v-for="(item, index) in styles"
                    :key="index"
                    :offset="item.offset"
                    :style="{'stop-color': item.stopColor, 'stop-opacity': item.stopOpacity}"
                />
            </linearGradient>
        </defs>
        <text
            :x="x"
            :y="y"
            :text-anchor="textAnchor"
            :dominant-baseline="dominantBaseline"
            :style="textStyle"
        >{{ title }}</text>
    </svg>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    styles: {
      type: Array,
      default: () => [
        { offset: '0%', stopColor: '#00FFF6', stopOpacity: 1 },
        { offset: '100%', stopColor: '#25D3FF', stopOpacity: 1 },
      ],
    },
    gradientVertical: { // 渐变方向 默认水平
      type: Boolean,
      default: false,
    },
    textAlign: { // 文字位置 默认左侧
      type: String,
      default: 'left',
    },
    y: {
      type: String,
      default: '50%',
    },
    dominantBaseline: {
      type: String,
      default: 'middle',
    },
  },
  computed: {
    id() {
      return Math.round(Math.random() * 10000);
    },
    x() {
      if (this.textAlign === 'center') {
        return '50%';
      }
      if (this.textAlign === 'right') {
        return '100%';
      }
      return '0';
    },
    textAnchor() {
      if (this.textAlign === 'center') {
        return 'middle';
      }
      if (this.textAlign === 'right') {
        return 'end';
      }
      return 'start';
    },
    gradientDirection() {
      const xy = this.gradientVertical
        ? {
          x1: '0%',
          x2: '0%',
          y1: '100%',
          y2: '0%',
        }
        : {
          x1: '0%',
          x2: '100%',
          y1: '0%',
          y2: '0%',
        };
      return xy;
    },
    textStyle() {
      return { 'fill': `url(#${this.id})` };
    },
  },
};
</script>
<style lang="scss" scoped>
.linear-gradient-text {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="header-panel">
    <div class="header-panel-bg">
      <div class="title-box">
        <linear-gradient-text title="盐城联鑫钢铁三维可视化平台" :gradientVertical="true" textAlign="center"/>
      </div>
      <ul class="nav">
        <li
          v-for="item in routes"
          :key="item.name"
          :class="['nav-item', item.name, activeName===item.name? 'active':'']"
          @click="onClick(item)"
        >
          <div class="nav-item-icon"></div>
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { routes } from '@/router';
import LinearGradientText from '@/components/LinearGradientText.vue';

export default {
  components: {
    LinearGradientText,
  },
  data() {
    return {
      routes,
    };
  },
  computed: {
    activeName() {
      return this.$route.name;
    },
  },
  methods: {
    onClick(item) {
      if (item.name === 'protection') {
        window.open('http://10.2.161.65:4050/#/MainMod', '_blank');
        return;
      }
      if (item.name === 'safety' || item.name === 'production') {
        this.$router.push(item.path);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.header-panel {
  width: 100%;
  height: ch(94);
  line-height: ch(94);
  background: linear-gradient(180deg, #0B1124, rgba(9, 17, 35, 0.01));
  position: relative;
  &-bg {
    width: 100%;
    height: 100%;
    background: url('../../assets/image/heade-bg.png') no-repeat 100% 100%;
    background-size: 100% 100%;
  }
  .title-box {
    width: 15%;
    height: 100%;
    line-height: ch(94);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    .linear-gradient-text {
      font-size: cw(36);
      font-weight: bold;
    }
  }
  .nav {
    width: 43%;
    height: 80%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    &-item {
      width: cw(120);
      height: ch(40);
      margin-right: cw(30);
      line-height: ch(37);
      white-space: nowrap;
      text-align: center;
      color: #00f7f7;
      font-size: cw(18);
      background: rgba(8, 9, 36, 0);
      box-shadow: inset 0px 0px 88px 7px rgba(16, 108, 222, 0.22),
        inset 0px 0px 6px 1px rgba(0, 114, 255, 0.8);
      cursor: pointer;
      position:relative;
      &-icon {
        display: inline-block;
        vertical-align: middle;
        width: cw(22);
        height: ch(22);
        margin-right: cw(3);
      }
      &.production .nav-item-icon {
        @include background2(cw(-293), ch(-70));
      }
      &.protection .nav-item-icon {
        @include background2(cw(-357), ch(-70));
      }
      &.safety .nav-item-icon {
        @include background2(cw(-415), ch(-70));
      }
      &.logistics .nav-item-icon {
        @include background2(cw(-479), ch(-70));
      }
      &.equipment .nav-item-icon {
        @include background2(cw(-543), ch(-70));
      }
      &.active {
        background: rgba(141, 36, 0, 0.34);
        border: 1px solid #f6bd56;
        box-shadow: 0px 0px 11px 1px rgb(255, 99, 14),
        inset 0px 0px 6px 1px rgba(0, 114, 255, 0.8);;
        color: #fff2e9;
      }
      &.active.production .nav-item-icon {
        @include background2(cw(-293), ch(-120));
      }
      &.active.protection .nav-item-icon {
        @include background2(cw(-357), ch(-120));
      }
      &.active.safety .nav-item-icon {
        @include background2(cw(-415), ch(-120));
      }
      &.active.logistics .nav-item-icon {
        @include background2(cw(-479), ch(-120));
      }
      &.active.equipment .nav-item-icon {
        @include background2(cw(-543), ch(-120));
      }

      &::before {
        content: '';
        width: cw(5);
        height: ch(21);
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        @include background(cw(-634), ch(-74));
      }
      &::after {
        content: '';
        width: cw(5);
        height: ch(21);
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        @include background(cw(-704), ch(-74));
      }
      &.active::before, &.active::after {
        display: none;
      }
    }
  }
}
</style>

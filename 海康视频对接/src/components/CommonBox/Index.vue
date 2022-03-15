<!--
 * @Author: lirui
 * @Date: 2022-01-19 16:37:47
 * @LastEditors: lirui
 * @LastEditTime: 2022-02-11 12:53:15
 * @Description: file content
 * @FilePath: \lego-cli-web\src\components\ComBox\Index.vue
-->
<template>
  <div class="wrap">
    <Subnav :baseInfo="titleInfo" :showArrow="false"/>
    <div class="wrap-inner">
      <slot/>
    </div>
  </div>
</template>
<script>
import Subnav from '../Subnav/index.vue';
import { getcw, getch } from '../../utils/util';

export default {
  components: {
    Subnav,
  },
  props: {
    titleInfo: {
      type: Object,
      default: () => ({
        title: '',
        iconUrl: require('../../assets/image/icon-head.png'),
        size: `${getcw(0)}px ${getch(-502)}px`,
      }),
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: ch(15);
  padding-top: ch(50);
  position: relative;
  /deep/ .nav-wrapper {
    position: absolute;
    top: 0;
    left: 0;
  }
  &-inner {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around;
    border: 1px solid #106CDE;
    background: rgba(5, 36, 64, 0.7);
    box-shadow: inset -10px 0px 24px 0px rgba(33, 159, 240, 0.2),
    inset 10px 0px 24px 0px rgba(33, 159, 240, 0.2);
    padding: ch(10) cw(10);
  }
}
</style>

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
    <Subnav :baseInfo="baseInfo" :showArrow="false"/>
    <div class="wrapper">
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
    baseInfo: {
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
  width: cw(482);
  height: ch(354);
  position: relative;
  margin-bottom: ch(50);
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
}
</style>

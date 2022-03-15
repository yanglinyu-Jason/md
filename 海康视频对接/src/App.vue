<!--
 * @Author: lirui
 * @Date: 2022-01-11 09:07:48
 * @LastEditors: lirui
 * @LastEditTime: 2022-02-07 17:26:26
 * @Description: file content
 * @FilePath: \lego-cli-web\src\App.vue
-->
<template>
  <div class="body-panel">
    <header-panel />
    <div class="router-view">
      <router-view />
    </div>
     <common-map class="map-view"></common-map>
  </div>
</template>
<script>
import HeaderPanel from '@/components/Header/Header.vue';

const CommonMap = () => import('@/components/Map/CommonMap.vue'); // 地图组件

export default {
  components: {
    CommonMap,
    HeaderPanel,
  },
};
</script>
<style lang="scss" scoped>
.body-panel {
  /* width: 4864px;
  height: 1088px; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .header-panel {
    position: relative;
    z-index: 1;
  }
  .router-view {
    width: 100%;
    height: ch(994); /* 1088-94 */
    position: relative;
    z-index: 1;
    pointer-events: none;
  }
  .map-view {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
}
</style>

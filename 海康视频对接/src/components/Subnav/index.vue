<!--
 * @Author: lirui
 * @Date: 2022-01-19 14:38:19
 * @LastEditors: lirui
 * @LastEditTime: 2022-02-17 15:11:42
 * @Description: file content
 * @FilePath: \lego-cli-web\src\components\Subnav\index.vue
-->
<template>
  <div class="nav-wrapper">
    <div
      :style="{ 'background-image': baseInfo.iconUrl }"
      :class="['classify', showArrow ? 'show-arrow' : '', 'nav-title']"
    >
      <div class="leftnav-logo">
        <span
          class="icon-img"
          :style="{
            backgroundPosition: baseInfo.size,
          }"
        ></span>
        <span class="icon-title"> {{baseInfo.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    baseInfo: {
      type: Object,
      default: () => ({}),
    },
    showArrow: {
      type: Boolean,
      default: () => '',
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-wrapper {
  width: 100%;
  height: ch(42);
  line-height: ch(42);
  margin-bottom: cw(7);
  .nav-title {
    width: 100%;
    height: 100%;
    background: url('../../assets/image/icon-head.png') no-repeat;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: cw(20);
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #00f7f7;
    position: relative;
    display: flex;
    align-items: center;
    .leftnav-logo {
      width: 100%;
      height: 100%;
      position: relative;
      .icon-img {
        width: cw(20);
        height: ch(20);
        position: absolute;
        top: 50%;
        // margin-top:ch(-10);
        background: url('../../assets/image/icon-group.png') no-repeat;
        background-size: cw(934) ch(1022);
        display: inline-block;
        vertical-align: middle;
        margin: ch(-10) ch(9) 0px ch(10);
      }
      .icon-title{
        position: absolute;
        left: cw(40);

      }
    }

    // &::before {
    //   content: '';
    //   display: inline-block;
    //   vertical-align: middle;
    //   width: cw(20);
    //   height: ch(20);
    //   // @include background(cw(-16), ch(-120));
    //   // background: url('../../assets/image/icon-group.png') no-repeat;
    //   // background-position: cw(-16) ch(-120);
    //   // background-size: cw(934) ch(1022);
    //   margin: 0px ch(9) 0px ch(10);
    // }
  }
  .show-arrow {
    &::after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: cw(20);
      height: ch(20);
      @include background(cw(-120), ch(-167));
      position: absolute;
      top: 50%;
      right: ch(5);
      margin-top: ch(-10);
    }
  }
}
</style>

<!--
 * @Author: lirui
 * @Date: 2022-01-24 16:08:42
 * @LastEditors: lirui
 * @LastEditTime: 2022-02-07 09:53:20
 * @Description: file content
 * @FilePath: \lego-cli-web\src\components\videoList\index.vue
-->
<template>
  <div class="wrap ">
    <Subnav :showArrow="true" :baseInfo="baseInfo" />
    <div class="wrapper">
      <div class="container-body scrollbar">
          <div class="column" v-for="(item, index) in videoList" :key="index">
            <span class="column-title">{{ item.title }}</span>
            <div class="column-shop">
              <div class="detail">
                详情 <span class="font-icon"></span></div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subnav from '../Subnav/index.vue';
import '../../styles/global.scss';
import { getcw, getch } from '../../utils/util';

export default {
  components: {
    Subnav,
  },
  props: {
    videoList: {
      type: Array,
      required: true,
      default: () => [
        {
          title: '',
        },
      ],
    },
  },
  data() {
    return {
      baseInfo: {
        size: `${getcw(-12)}px ${getch(-117)}px`,
        title: '厂区概括',
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>

<!--
 * @Author: lirui
 * @Date: 2022-01-24 16:08:42
 * @LastEditors: 王帅
 * @LastEditTime: 2022-02-14 11:13:47
 * @Description: file content

 * @FilePath: \lego-cli-web\src\components\videoList\index.vue
-->
<template>
  <div class="wrap wrap-xiaokong">
    <Subnav :showArrow="false" :baseInfo="baseInfo" />
    <div class="wrapper">
      <div class="container-body scrollbar">
        <div class="column" v-for="(item, index) in videoList" :key="index">
          <div class="column-shop">
            <div class="detail">详情 <span class="font-icon"></span></div>
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
        size: `${getcw(-452)}px ${getch(-134)}px`,
        title: '消控室',
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.wrap-xiaokong {
  width: 100%;
  height: ch(374);
  .wrapper {
    margin-top: ch(9);
    height: ch(323);
    padding: ch(10) cw(10);
    .container-body {
      width: 100%;
      height: 100%;
      overflow: hidden;
      .column {
        width: 100%;
        height: 100%;
        margin-bottom: 0px;
        .column-shop {
          width: 100%;
          height: 100%;
          background: url('../../assets/image/viedeo-img.png') no-repeat;
          background-size: 100% 100%;
          margin-top: 0px;
        }
      }
    }
  }
}
</style>

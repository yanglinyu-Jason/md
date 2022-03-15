<template>
  <div class="side-panel">
    <com-box :titleInfo="changqufengxiandengji">
      <div class="containers">
        <div
          v-for="(item, index) in leftList"
          :key="index"
          class="video-item"
        >
          <span class="video-item-title">{{ item.title }}</span>
          <div
            class="video-item-body"
            :style="{'background-image':'url('+item.logo+')'}"
          >
            <video-play :domId="`${side}_left_${index}_${item.id}`" :videoCode="item.id"/>
          </div>
        </div>
      </div>
      <div class="containers">
        <div
          v-for="(item, index) in rightList"
          :key="index"
          class="video-item"
        >
          <span class="video-item-title">{{ item.title }}</span>
          <div
            class="video-item-body"
            :style="{'background-image':'url('+item.logo+')'}"
          >
            <video-play :domId="`${side}_right_${index}_${item.id}`" :videoCode="item.id"/>
          </div>
        </div>
      </div>
    </com-box>
  </div>
</template>
<script>
import ComBox from '@/components/CommonBox/Index.vue';
import VideoPlay from '@/components/VideoPlay/Index.vue';
import { getcw, getch } from '../../utils/util';

export default {
  name: 'leftPanel',
  components: {
    ComBox,
    VideoPlay,
  },
  props: {
    videoList: {
      type: Array,
      required: true,
    },
    side: {
      type: String,
      required: 'left',
    },
  },
  computed: {
    leftList() {
      return this.videoList.slice(0, 3);
    },
    rightList() {
      return this.videoList.slice(3, 6);
    },
  },
  data() {
    return {
      changqufengxiandengji: {
        title: '重点生产区域监控',
        iconUrl: require('../../assets/image/icon-head.png'),
        size: `${getcw(-14)}px ${getch(-116)}px`,
      },
    };
  },
  methods: {
    handlePlay(item) {
      console.log(item);
      this.$emit('handlePlay', item);
    },
  },
};
</script>
<style lang="scss" scoped>
.side-panel {
  display: flex;
  justify-content: space-between;
  pointer-events: all;
  /deep/ .wrap-inner{
    border: none;
    box-shadow: none;
    background: transparent;
  }
  .containers {
    width: cw(481);
    height: 100%;
    overflow: hidden;
    box-shadow: inset -10px 0px 24px 0px rgba(33, 159, 240, 0.2),
      inset 10px 0px 24px 0px rgba(33, 159, 240, 0.2);
    padding-left: cw(11);
    padding-top: ch(20);
    box-sizing: border-box;
    .video-item {
      cursor: pointer;

      &-title {
        display: inline-block;
        width: 100%;
        height: ch(18);
        font-size: ch(18);
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #00f7f7;
        position: relative;
        padding-left: cw(25);
        &::before {
          content: '';
          display: inline-block;
          vertical-align: middle;
          width: cw(20);
          height: ch(20);
          @include background(cw(-13), ch(-170));
          position: absolute;
          left: 0;
        }
      }
      &-body {
        width: cw(440);
        height: ch(240);
        margin: ch(20) 0;
        position: relative;
        margin-left: cw(9);
      }
    }
  }
  .containers:last-child {
    margin-left: cw(21);
  }
}
</style>

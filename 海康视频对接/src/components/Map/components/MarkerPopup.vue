<template>
  <div class="popup">
    <qe-html-overlay
      :position="position"
      :offset="[0, -185]"
      :defTemp="false"
    >
      <div
        v-if="attr.type==='shexiangtou'"
        class="popup-video"
      >
        <div class="popup-arrow"></div>
      </div>
      <div
        v-else
        :class="['popup-box', attr.data.baojing? 'alarm':'' ]"
      >
        <div
          :class="['popup-box-title', attr.type]"
          :title="attr.data.title"
        >{{attr.data.title}}</div>
        <basic-info
          :span="24"
          :data="attr.data"
          :columns="columns"
        />
        <div class="popup-arrow"></div>
      </div>
    </qe-html-overlay>
  </div>
</template>
<script>
import { QeHtmlOverlay } from '@qycloud/vue-qearth';
import BasicInfo from '@/components/BasicInfo';
import {
  MARKER_TYPES,
  ZHUJI_COLUMNS,
  BENGFANG_COLUMNS,
  SHUICHI_COLUMNS,
  SHUICHE_COLUMNS,
  XIAOFANGSHUAN_COLUMNS,
  ZHONGDAWEIXIANYUAN_COLUMNS,
  MEIQI_COLUMNS,
  MEIQIBAOJING_COLUMNS,
} from '../constants';

export default {
  components: {
    QeHtmlOverlay,
    BasicInfo,
  },
  props: {
    position: {
      type: Array,
      required: true,
    },
    attr: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      MARKER_TYPES,
    };
  },
  computed: {
    type() {
      return this.attr.type;
    },
    columns() {
      const { type, attr: { data } } = this;
      if (type === MARKER_TYPES.BENGFANG) {
        return BENGFANG_COLUMNS;
      }
      if (type === MARKER_TYPES.SHUICHI) {
        return SHUICHI_COLUMNS;
      }
      if (type === MARKER_TYPES.SHUICHE) {
        return SHUICHE_COLUMNS;
      }
      if (type === MARKER_TYPES.XIAOFANGSHUAN) {
        return XIAOFANGSHUAN_COLUMNS;
      }
      if (type === MARKER_TYPES.ZHUJI) {
        return ZHUJI_COLUMNS;
      }
      if (type === MARKER_TYPES.MEIQI && data.baojing) {
        return MEIQIBAOJING_COLUMNS;
      }
      if (type === MARKER_TYPES.MEIQI) {
        return MEIQI_COLUMNS;
      }
      return ZHONGDAWEIXIANYUAN_COLUMNS;
    },
  },
};
</script>
<style lang="scss" scoped>
.popup {
  &-video {
    width: cw(300);
    height: ch(175);
    background: url('~@/assets/image/viedeo-img.png') no-repeat 100% 100%;
    background-size: 100% 100%;
    border: 2px solid #00f7f7;
  }
  &-box {
    position: relative;
    width: cw(300);
    background-color: rgba(4, 28, 51, 0.85);
    padding-top: ch(25);
    /deep/ .basic-info {
      font-size: cw(18);
      padding: ch(15) cw(15);
    }
    border-left: 2px solid #00f7f7;
    border-right: 2px solid #00f7f7;
    border-bottom: 2px solid #00f7f7;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ch(12);
      background-image: url('../../../assets/image/map/header_blue.png');
      background-repeat: no-repeat;
      background-position: 100% 100%;
      background-size: 100% 100%;
    }
    &-title {
      font-size: cw(18);
      font-weight: bold;
      color: #00f7f7;
      line-height: cw(36);
      background: linear-gradient(
        90deg,
        rgba(55, 211, 254, 0.4) 0%,
        rgba(55, 211, 254, 0) 100%
      );
      padding-left: cw(10);
      padding-right: cw(10);
      @extend .ellipsis;
      &::before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: cw(20);
        height: ch(20);
        margin-right: cw(5);
      }
      &.zhuji::before {
        @include background(cw(-504), ch(-53));
      }
      &.bengfang::before {
        @include background(cw(-452), ch(-132));
      }
      &.xiaofangshuan::before {
        @include background(cw(-452), ch(-52));
      }
      &.shuichi::before {
        @include background(cw(-503), ch(-133));
      }
      &.shuiche::before {
        @include background(cw(-503), ch(-90));
      }
      &.zhongdaweixianyuan::before {
        @include background(cw(-330), ch(-55));
      }
    }

    &.alarm {
      background-color: rgba(150, 12, 0, 0.85);
      border-left: 2px solid #f43524;
      border-right: 2px solid #f43524;
      border-bottom: 2px solid #f43524;
      &::before {
        background-image: url('../../../assets/image/map/header_red.png');
      }
      .popup-box-title {
        color: #ffffff;
        background: linear-gradient(
          90deg,
          rgba(255, 0, 0, 0.4) 0%,
          rgba(255, 0, 0, 0) 100%
        );
        &.zhuji::before {
          @include background(cw(-504), ch(-166));
        }
      }
      .popup-arrow {
        border-top-color: #f43524;
      }
    }
  }
  &-arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: cw(-8);
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: cw(8);
    margin-right: cw(4);
    border-top-color: #00f7f7;
    border-bottom-width: 0;
  }
}
</style>

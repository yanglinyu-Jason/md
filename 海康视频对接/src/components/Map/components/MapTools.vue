<template>
  <div
    class="marker-tools"
    :style="{right: toolsRight}"
  >
    <ul class="layers" v-if="hasLayers">
      <li
        :class="['layers-item', activeLayerIndex===index? 'active':'']"
        v-for="(layer, index) in layers"
        :key="index"
        @click="activeLayerIndex=index"
      >{{layer}}</li>
    </ul>
    <ul class="tools">
      <li class="tools-item fullscreen" :class="{active: fullscreen}" @click="$emit('toggle-screen')">
        <div class="before-icon"></div>
        <span>地图全屏</span>
      </li>
      <li
        v-for="(item, index) in tools"
        :key="index"
        class="tools-item"
        :class="[item.type, item.inactive? '':'active']"
        @click="onClickTool(item, index)"
      >
        <div class="before-icon"></div>
        <div class="font-icon">{{ item.name }}</div>
        <div class="after-icon"></div>
      </li>
      <div class="top-left"></div>
      <div class="top-right"></div>
      <div class="bottom-left"></div>
      <div class="bottom-right"></div>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { PRODUCTION_MAP_TOOLS, SAFETY_MAP_TOOLS } from '../constants';

const TOOLS = {
  production: PRODUCTION_MAP_TOOLS,
  safety: SAFETY_MAP_TOOLS,
};
export default {
  data() {
    return {
      activeLayerIndex: 0,
      toolsRight: '0',
      tools: [],
    };
  },
  computed: {
    ...mapState('Map', ['fullscreen']),
    layers() {
      return TOOLS[this.$route.name].filter(item => !!item.children).map(item => item.name);
    },
    hasLayers() {
      return this.layers && this.layers.length > 0;
    },
  },
  mounted() {
    /* this.$nextTick(() => {
      document.body.addEventListener('keyup', (e) => {
        console.log(e);
        if (e.keyCode === 27) {
          this.$set(this.tools[0], 'inactive', false);
        }
      });
    }); */
  },
  watch: {
    '$route.path': {
      immediate: true,
      handler() {
        this.initPosition();
        this.setTools();
      },
    },
    fullscreen() {
      this.initPosition();
    },
    activeLayerIndex() {
      this.setTools();
    },
  },
  methods: {
    setTools() {
      const tools = this.hasLayers ? TOOLS[this.$route.name][this.activeLayerIndex].children : TOOLS[this.$route.name];
      this.tools = tools.map(item => ({ ...item, inactive: false }));
      const activeMarkerTypes = this.tools.map(item => item.type);
      this.$store.commit('Map/SET_ACTIVE_MARKER_TYPES', activeMarkerTypes);
    },
    initPosition() {
      if (this.fullscreen) {
        this.toolsRight = '20px';
      } else {
        const el = document.getElementById('rightPanel');
        this.toolsRight = el ? `${el.clientWidth + 30}px` : '30px';
      }
    },
    onClickTool(tool, index) {
      tool.inactive = !tool.inactive;
      this.$set(this.tools, index, tool);
      const activeMarkerTypes = this.tools
        .filter(item => !item.inactive)
        .map(item => item.type);
      this.$store.commit('Map/SET_ACTIVE_MARKER_TYPES', activeMarkerTypes);
    },
  },
};
</script>
<style lang="scss" scoped>
.marker-tools {
  position: absolute;
  top: ch(95);
  z-index: 9;
  font-size: cw(18);
  display: flex;
  .layers {
    display: flex;
    height: ch(40);
    line-height: ch(36);
    background: #131E3C;
    border: 1px solid #106CDE;
    margin-right: cw(10);
    color: #C1C3C7;
    border-radius: cw(3);
    &-item {
      padding: 0 cw(10);
      border-radius: cw(3);
      cursor: pointer;
      &.active {
        color:#00F7F7;
        box-shadow: inset 0px 0px 7px 3px #00F7F7;
      }
    }
  }
  .tools {
    display: flex;
    flex-direction: column;
    position: relative;
    background: rgba(19, 30, 60, 0.7);
    &-item {
      height: ch(40);
      line-height: ch(40);
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: cw(10);
      padding-right: cw(50);
      cursor: pointer;
      position: relative;
      color: #c1c3c7;
      &.active {
        color: #00f7f7;
      }
      & > .before-icon {
        @include background2(cw(-450), ch(-266));
        margin-right: cw(3);
        width: cw(22);
        height: ch(22);
      }
      &.active > .before-icon {
        @include background2(cw(-450), ch(-228));
      }
      .after-icon {
        margin-left: cw(10);
        width: cw(22);
        height: ch(29);
        position: absolute;
        right: cw(10);
        top: ch(8);
      }
      &.zhongdaweixianyuan > .after-icon {
        @include background2(cw(-379), ch(-195));
      }
      &.zhuji > .after-icon {
        @include background2(cw(-379), ch(-233));
      }
      &.bengfang > .after-icon {
        @include background2(cw(-377), ch(-272));
      }
      &.shuichi > .after-icon {
        @include background2(cw(-379), ch(-310));
      }
      &.shuiche > .after-icon {
        @include background2(cw(-379), ch(-350));
      }
      &.xiaofangshuan > .after-icon {
        @include background2(cw(-379), ch(-386));
      }
      &.meiqi > .after-icon {
        @include background2(cw(-379), ch(-426));
      }
      &.shexiangtou > .after-icon {
        @include background2(cw(-379), ch(-467));
      }
      &.shexiangtoushuliang > .after-icon {
        @include background2(cw(-450), ch(-345));
      }
      &.fullscreen {
        color: #00f7f7;
        &.active > .before-icon {
          @include background2(cw(-448), ch(-306));
        }
        & > .before-icon {
          @include background2(cw(-448), ch(-192));
        }
      }
    }
    %corner {
      width: cw(18);
      height: ch(18);
      position: absolute;
      border: 2px solid #00aeff;
      pointer-events: none;
    }
    .top-left {
      top: 0;
      left: 0;
      border-right: none;
      border-bottom: none;
      @extend %corner;
    }
    .top-right {
      top: 0;
      right: 0;
      border-left: none;
      border-bottom: none;
      @extend %corner;
    }
    .bottom-left {
      bottom: 0;
      left: 0;
      border-right: none;
      border-top: none;
      @extend %corner;
    }
    .bottom-right {
      bottom: 0;
      right: 0;
      border-left: none;
      border-top: none;
      @extend %corner;
    }
  }
}
</style>

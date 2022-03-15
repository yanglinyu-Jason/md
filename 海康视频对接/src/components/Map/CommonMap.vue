<template>
  <div class="map-panel" id="common-map">
    <qe-viewer
      imagery-type="TMap"
      :navigation="navigationOpts"
      :fullscreen-button="false"
      :default-view="defaultView"
      @init="initQE"
    >
      <position-picking :picking="picking" />
      <tilesets />
      <markers />
      <risk-polygons v-if="showRiskPolygons" />
    </qe-viewer>
    <!-- <alarm-table-panel /> -->
    <map-tools @toggle-screen="onToggleScreen"/>
    <div class="before" v-show="!fullscreen"></div>
    <div class="after" v-show="!fullscreen"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { QeViewer } from '@qycloud/vue-qearth';
import '@qycloud/vue-qearth/lib/vue2qearth.css';
import PositionPicking from './components/PositionPicking.vue';
import Markers from './components/Markers.vue';
import MapTools from './components/MapTools.vue';
// import AlarmTablePanel from './components/AlarmTablePanel.vue';
import Tilesets from './components/Tilesets.vue';
import RiskPolygons from './components/RiskPolygons.vue';
import { MARKER_TYPES } from './constants';

export default {
  provide() {
    return { getQE: this.getQE };
  },
  components: {
    QeViewer,
    // AlarmTablePanel,
    PositionPicking, // 坐标拾取
    Markers, // 标记
    MapTools, // 地图工具
    Tilesets, // 3D模型
    RiskPolygons, // 风险四色
  },
  data() {
    return {
      QE: null,
      navigationOpts: {
        enableCompass: true, // 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。
        enableZoomControls: true, // 用于启用或禁用缩放控件。
        enableDistanceLegend: true, // 用于启用或禁用距离图例。
        enableCompassOuterRing: true, // 用于启用或禁用指南针外环。
      },
      picking: false,
      defaultView: [
        120.779,
        33.1875,
        3700,
        355.59,
        -53.783141852231246,
        0.008819224020548466,
      ],
    };
  },
  computed: {
    ...mapState('Map', {
      fullscreen: 'fullscreen',
      activeMarkerTypes: 'activeMarkerTypes',
    }),
    showRiskPolygons() {
      return this.activeMarkerTypes.includes(MARKER_TYPES.FENGXIANSISE);
    },
  },
  methods: {
    initQE(QE) {
      console.log(QE);
      this.QE = QE;
    },
    getQE(callback) {
      const self = this;
      function find() {
        if (self.QE) {
          callback(self.QE);
        } else {
          self.$nextTick(() => {
            find();
          });
        }
      }
      find();
    },
    popupEvts() {
      this.isShowInfoWindow = false;
    },
    onToggleScreen() { // 全屏切换
      const { fullscreen } = this;
      if (fullscreen) {
        this.QE.Cesium.Fullscreen.exitFullscreen();
      } else {
        this.QE.Cesium.Fullscreen.requestFullscreen(document.getElementById('common-map'));
      }
      this.$store.commit('Map/TOGGLE_FULLSCREEN', !fullscreen);
    },
  },
};
</script>
<style lang="scss" scoped>
.map-panel {
  width: 100%;
  height: 100%;
  position: relative;
  .before {
    width: cw(1532);
    height: 100%;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background:  linear-gradient(90deg, rgba(11, 17, 36, 0.9),rgba(11, 17, 36, 0.9), rgba(9, 17, 35, 0.01));
    pointer-events: none;
  }
  .after {
    width: cw(1490);
    height: 100%;
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    background:  linear-gradient(270deg, rgba(11, 17, 36, 0.9),rgba(11, 17, 36, 0.9), rgba(9, 17, 35, 0.01));
    pointer-events: none;
  }
}
</style>

<!--
 * @Description:
 * @version:
 * @Author: 王帅
 * @Date: 2022-01-21 09:15:38
 * @LastEditors: 王帅
 * @LastEditTime: 2022-01-21 09:40:40
-->
<template>
  <div class="markers">
    <component :is="markerLayer" v-bind="layerProps">
      <qe-marker
        v-for="(marker, index) in markers"
        :key="'marker' + index"
        :position="marker.ps"
        :billboard="marker.bd"
        :label="marker.lb"
        :attr="marker.attr"
        @click="markerEvents"
      ></qe-marker>
    </component>>
    <template v-for="(popup, index) in popups">
      <marker-popup
        :key="'marker-popup' + index"
        :position="popup.ps"
        :attr="popup.attr"
      />
    </template>
    <qe-primitive-layer>
      <qe-animation
        v-for="(effect, index) in circleEffects"
        :key="'circle-effect' + index"
        :inner-radius="60"
        :outer-radius="100"
        :styles="{ color: 'rgba(151, 12, 12, 0.4)', speed: 30}"
        :position="effect.ps"
      ></qe-animation>
    </qe-primitive-layer>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import {
  QeEntityLayer, QeClusterLayer, QeMarker, QeAnimation,
} from '@qycloud/vue-qearth';
// import { getcw, getch } from '@/utils/util';
import MarkerPopup from './MarkerPopup.vue';
import { MARKER_TYPES } from '../constants';

const MARKER_SIZE = [38, 177];

export default {
  components: {
    QeClusterLayer,
    QeEntityLayer,
    QeMarker,
    MarkerPopup,
    QeAnimation,
  },
  data() {
    return {
      markers: [], // 点位
      popups: [], // 弹窗
      circleEffects: [], // 圆形扫描圈
    };
  },
  computed: {
    ...mapState('Map', {
      activeMarkerTypes: 'activeMarkerTypes', // 激活的地图点位类型
    }),
    markerLayer() {
      return this.activeMarkerTypes.includes(MARKER_TYPES.SHEXIANGTOU) ? 'qe-cluster-layer' : 'qe-entity-layer';
    },
    layerProps() {
      return this.activeMarkerTypes.includes(MARKER_TYPES.SHEXIANGTOU) ? {
        fontSize: 32,
        pixelRange: 300,
        clusterStyle: 'custom',
        clusterCount: [10, 50],
        clusterBillboards: [
          {
            image: require('@/assets/image/map/cluster.png'),
            width: 120,
            height: 120,
          },
          {
            image: require('@/assets/image/map/cluster.png'),
            width: 100,
            height: 100,
          },
          {
            image: require('@/assets/image/map/cluster.png'),
            width: 140,
            height: 140,
          },
        ],
        zoomScale: 2,
      } : {};
    },
  },
  watch: {
    'activeMarkerTypes': {
      immediate: true,
      handler() {
        this.getMarkers();
      },
    },
  },
  methods: {
    async getMarkers() {
      let markers = [];
      const popups = [];
      const circleEffects = [];
      const res = await this.$store.dispatch('Map/ACTION_GET_MARKERS', this.activeMarkerTypes);
      markers = res.map((item) => {
        // 消防点位
        if (item.data && item.data.baojing) {
          // 报警点位 默认展示弹窗及扫描圈
          popups.push({
            ps: item.position,
            attr: item,
          });
          circleEffects.push({
            ps: [...item.position, 0],
          });
        }
        if (item.type === MARKER_TYPES.ZHONGDAWEIXIANYUAN) {
          popups.push({
            ps: item.position,
            attr: item,
          });
        }
        return {
          ps: [...item.position, 10],
          bd: {
            icon: require(`../../../assets/image/map/${item.type}.png`),
            size: MARKER_SIZE, // marker大小
          },
          attr: item,
        };
      });
      this.markers = markers;
      this.popups = popups;
      this.circleEffects = circleEffects;
      console.log('circleEffects:', circleEffects, this.circleEffects);
    },
    markerEvents(evt) {
      const { attr } = evt.overlay;
      console.log(attr, attr.id);
      const index = this.popups.findIndex(item => item.attr.id === attr.id);
      if (index > -1) {
        this.popups.splice(index, 1);
      } else {
        this.popups.push({
          ps: attr.position,
          attr,
        });
      }
    },
  },
};
</script>

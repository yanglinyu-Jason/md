/* eslint-disable no-shadow */
import {
  MARKERS,
} from '@/components/Map/constants';

export const TOGGLE_FULLSCREEN = 'TOGGLE_FULLSCREEN';
export const SET_MARKERS_LIST = 'SET_MARKERS_LIST';
export const SET_ACTIVE_MARKER_TYPES = 'SET_ACTIVE_MARKER_TYPES';

export const ACTION_GET_MARKERS = 'ACTION_GET_MARKERS';

const state = {
  fullscreen: false, // 地图全屏
  activeMarkerTypes: [], // 地图点位类型
  markers: [], // 地图点位
};

const mutations = {
  [TOGGLE_FULLSCREEN](state, flag) {
    state.fullscreen = flag;
  },
  [SET_ACTIVE_MARKER_TYPES](state, types) {
    state.activeMarkerTypes = types;
  },
  [SET_MARKERS_LIST](state, markers) {
    state.markers = markers;
  },

};

const getters = {};

const actions = {
  /* 获取标记点 */
  async [ACTION_GET_MARKERS]({ commit }, activeMarkerTypes) {
    const markers = MARKERS.filter(marker => activeMarkerTypes.includes(marker.type));
    commit(SET_MARKERS_LIST, markers);
    return markers;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};

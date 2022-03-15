/* eslint-disable no-shadow */
export const TOGGLE_VIDEOSCREEN = 'TOGGLE_VIDEOSCREEN';

const state = {
  videoScreenId: '', // 视频全屏domId 有值时，该视频全屏；其他视频隐藏； JS_HideWnd
};

const mutations = {
  [TOGGLE_VIDEOSCREEN](state, id) {
    state.videoScreenId = id;
  },
};

const getters = {};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};

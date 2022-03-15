import Vue from 'vue';
import Vuex from 'vuex';
import Map from '../components/Map/store';
import Video from '../components/VideoPlay/store';

Vue.use(Vuex);

const state = {
};

const mutations = {
};

const actions = {
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    Map,
    Video,
  },
});
export default store;

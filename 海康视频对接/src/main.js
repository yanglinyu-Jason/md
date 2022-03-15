import Vue from 'vue';
import '@qycloud/lego/dist/lego.css';
import * as echarts from 'echarts';
import { fitChartSize } from './utils/util';
import router from './router';
import App from './App.vue';
import store from './store';
import './styles/index.scss';
import './styles/global.scss';

Vue.prototype.$fitChartFont = fitChartSize;

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

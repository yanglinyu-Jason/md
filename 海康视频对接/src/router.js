/*
 * @Author: lirui
 * @Date: 2022-01-19 09:46:44
 * @LastEditors: lirui
 * @LastEditTime: 2022-01-19 16:23:29
 * @Description: file content
 * @FilePath: \lego-cli-web\src\router.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import '@qpaas/vue-plugin-global';
import './install';
import { destroyAllDialogs } from '@qycloud/lego';
// import { patchGlobalConfig } from './services';
import Login from './pages/Login/Login.vue';
import DigitalSecurity from './pages/DigitalSecurity/Index.vue';
import Production from './pages/Production/Index.vue';

const { globalConfig } = window;

Vue.use(VueRouter);

export const routes = [
  {
    path: '/equipment ',
    name: 'equipment',
    label: '数字装备',
    component: DigitalSecurity,
  },
  {
    path: '/logistics ',
    name: 'logistics',
    label: '数字物流',
    component: DigitalSecurity,
  },
  {
    path: '/safety',
    name: 'safety',
    label: '数字安全',
    component: DigitalSecurity,
  },
  {
    path: '/protection',
    name: 'protection',
    label: '数字环保',
    component: DigitalSecurity,
  },
  {
    path: '/production',
    name: 'production',
    label: '数字生产',
    component: Production,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: globalConfig.router.base,
  routes: [
    { path: '/', redirect: '/safety' },
    { path: '/login', name: 'login', component: Login },
    ...routes,
  ],
});

router.beforeEach(async (to, _, next) => {
  destroyAllDialogs();
  next();
  // if (to.matched.some(route => route.meta.requiresAuth === false)) {
  //   next();
  // } else {
  //   const status = await patchGlobalConfig();
  //   const isToLoginPage = to.name === 'login';
  //   if (status === 401) {
  //     if (isToLoginPage) {
  //       next();
  //     } else {
  //       next('/login');
  //     }
  //   } else if (isToLoginPage) {
  //     next('/');
  //   } else {
  //     next();
  //   }
  // }
});

window.routerInstance = router;

export default router;

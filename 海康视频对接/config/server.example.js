module.exports = {
  dev: {
    cookieDomain: 'dev.lxgt.demo.qpaas.com',
    https: false,
    host: 'dev.lxgt.demo.qpaas.com',
    port: 22331,
    proxies: [], // 只需配置平台以外的接口转发
  },
  server: {
    www: 'www.lxgt.demo.qpaas.com',
  },
  router: {
    base: '/bee/lxgteq',
  },
};

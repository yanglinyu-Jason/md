const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
  publicPath, babelConfig, externalConfig, devServer, globalConfig, chainWebpackPlugins,
} = require('./config');

function chainWebpackGloablConfig(config) {
  config.plugin('html').tap((args) => {
    args[0].templateParameters = {
      ...(args[0].templateParameters),
      globalConfig,
    };
    return args;
  });
}

const QEarthSource = 'node_modules/@qycloud/vue-qearth/lib/static';

function QEarthSourcePlugin() {
  const plugins = [
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify('./static'),
    }),
    // 可以根据具体的项目部署将资源打包复制到指定文件夹
    new CopyWebpackPlugin([
      {
        from: QEarthSource,
        to: 'static',
      },
    ]),
  ];
  return plugins;
}

module.exports = {
  publicPath,
  devServer,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
    externalConfig.chainWebpackExternals(config);
    chainWebpackPlugins(config);
    chainWebpackGloablConfig(config);
    // 引入全局sass文件
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 引入多个全局sass文件
          resources: ['./src/styles/variables.scss', './src/styles/mymixins.scss'],
        })
        .end();
    });
  },
  configureWebpack: {
    externals: externalConfig.externals,
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.json', '.sass', '.css', '.vue'],
      alias: {
        '@': path.join(__dirname, './src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: babelConfig,
            },
          ],
        },
      ],
    },
    plugins: QEarthSourcePlugin(),
  },
};

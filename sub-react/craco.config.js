const { name } = require("./package");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.library = `${name}-[name]`;
      webpackConfig.output.libraryTarget = "umd";
      webpackConfig.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
      webpackConfig.output.publicPath = "http://localhost:8001/";
      return webpackConfig;
    },
  },
  devServer: (devServerConfig) => {
    devServerConfig.historyApiFallback = true;
    devServerConfig.open = false;
    devServerConfig.hot = false;
    devServerConfig.watchFiles = [];
    devServerConfig.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    return devServerConfig;
  },
};

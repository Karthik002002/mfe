const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CommonConfig = require("./webpack.common");
const PackageJSON = require("../package.json");
const devConfig = {
  mode: "development",
  output: { publicPath: "http://localhost:8081/" },
  devServer: {
    port: 8081,
    // historyApiFallback: {
    //   index: "index.html",
    // },
    historyApiFallback: true,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: PackageJSON.dependencies,
    }),
  ],
};

module.exports = merge(CommonConfig, devConfig);

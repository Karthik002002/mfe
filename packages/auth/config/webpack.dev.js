const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CommonConfig = require("./webpack.common");
const PackageJSON = require("../package.json");
const devConfig = {
  mode: "development",
  output: { publicPath: "http://localhost:8082/" },
  devServer: {
    port: 8082,
    // historyApiFallback: {
    //   index: "index.html",
    // },
    historyApiFallback: true,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap",
      },
      shared: PackageJSON.dependencies,
    }),
  ],
};

module.exports = merge(CommonConfig, devConfig);

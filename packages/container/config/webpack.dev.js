const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CommonConfig = require("./webpack.common");
const PackageJSON = require("../package.json");
const devConfig = {
  mode: "development",
  output: { publicPath: "http://localhost:8080/" },
  devServer: {
    port: 8080,
    // historyApiFallback: {
    //   index: "index.html",
    // },
    historyApiFallback: true,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
        auth: "auth@http://localhost:8082/remoteEntry.js",
      },
      // shared: PackageJSON.dependencies,
    }),
  ],
};

module.exports = merge(CommonConfig, devConfig);

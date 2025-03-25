const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CommonConfig = require("./webpack.common");
const PackageJSON = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const ProdConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/auth/latest/",
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

module.exports = merge(CommonConfig, ProdConfig);

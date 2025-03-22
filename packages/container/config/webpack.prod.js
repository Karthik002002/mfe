const { merge } = require("webpack-merge");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CommonConfig = require("./webpack.common");
const PackageJSON = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;
const ProdConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: PackageJSON.dependencies,
    }),
  ],
};

module.exports = merge(CommonConfig, ProdConfig);

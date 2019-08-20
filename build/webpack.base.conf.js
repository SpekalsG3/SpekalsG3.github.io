const webpack =  require("webpack");
const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/"
}

const PAGES_DIR = `${PATHS.src}/html`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(el => el != "index.html");

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    default: `${PATHS.src}/js/default.js`,
    index: `${PATHS.src}/js/index.js`,
    filter: `${PATHS.src}/js/filter.js`,
    room: `${PATHS.src}/js/room.js`,
    authorization: `${PATHS.src}/js/authorization.js`,
    signin: `${PATHS.src}/js/signin.js`,
    signup: `${PATHS.src}/js/signup.js`
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: "/src/"
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        },
      },
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: "/node_modules/"
    }, {
      test: /\.(woff(2)?|ttf)$/,
      loader: "file-loader",
      options: {
        name: `${PATHS.assets}fonts/[name].[ext]`
      }
    }, {
      test: /\.(svg|jpg|png)$/,
      loader: "file-loader",
      options: {
        name: `[path]/[name].[ext]`
      }
    }, {
      test: /\.scss$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: { sourceMap: true }
        }, {
          loader: "postcss-loader",
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }, {
          loader: "sass-loader",
          options: { sourceMap: true }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: { sourceMap: true }
        }, {
          loader: "postcss-loader",
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[contenthash].css`,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: "" }
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/index.html`,
      filename: `./index.html`,
      chunks: ["vendor", "default", "index"]
    }),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.split(".")[0]}/index.html`,
      chunks: ["vendor", "default", page.split(".")[0]]
    }))
  ]
}
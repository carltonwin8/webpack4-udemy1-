const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  buid: path.join(__dirname, "./build")
};

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: PATHS.buid,
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/i,
        use: ["file-loader"]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env"],
              plugins: ["transform-class-properties"]
            }
          }
        ]
      },
      {
        test: /\.hbs$/i,
        use: ["handlebars-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "styles.[contenthash].css" }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", path.join(__dirname, "dist/**/*")]
    }),
    new HtmlWebpackPlugin({
      title: "Hello world",
      template: "src/index.hbs"
    })
  ]
};

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  buid: path.join(__dirname, "./build")
};

module.exports = {
  mode: "production",
  entry: {
    "hello-world": "./src/hello-world.js",
    dog: "./src/dog.js"
  },
  output: {
    filename: "[name].[contenthash].js",
    path: PATHS.buid,
    publicPath: ""
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      automaticNameDelimiter: "_"
    }
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
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", path.join(__dirname, "dist/**/*")]
    }),
    new HtmlWebpackPlugin({
      filename: "hello-world.html",
      chunks: ["hello-world", "vendors~dog~hello-world"],
      title: "Hello world",
      template: "src/page-template.hbs"
    }),
    new HtmlWebpackPlugin({
      filename: "dog.html",
      chunks: ["dog", "vendors~dog~hello-world"],
      title: "Dog",
      template: "src/page-template.hbs"
    })
  ]
};

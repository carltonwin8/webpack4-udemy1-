const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  buid: path.join(__dirname, "./build")
};

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: PATHS.buid,
    publicPath: ""
  },
  devServer: {
    contentBase: PATHS.build,
    index: "index.html",
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/i,
        use: ["file-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", path.join(__dirname, "dist/**/*")]
    }),
    new HtmlWebpackPlugin({
      title: "Hello world",
      template: "src/index.hbs"
    })
  ]
};

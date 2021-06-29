import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

/* eslint-disable no-console */


export default {
  mode: "production",
  devtool: "source-map",
  entry: {
   main: path.resolve("./src/index.js"),
   vendor: path.resolve("./src/vendor.js"),
  },
  output: {
    path: path.resolve("dist"),
    publicPath: "/",
    filename: "[name].js",
  },
  plugins: [
     // Create HTML file that includes reference to bundled JS.
     new HtmlWebpackPlugin({
        template: "src/index.html",
     }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },

};

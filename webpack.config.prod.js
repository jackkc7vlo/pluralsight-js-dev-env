import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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
    filename: "[name].[chunkhash].js",
  },
  plugins: [
     // Generate an external css file with a hash in the filename
     new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
     }),

     // Create HTML file that includes reference to bundled JS.
     new HtmlWebpackPlugin({
        template: "src/index.html",
        trackJSToken: "dceccdda8aa74662a0f5ccbe0476c66e"
     }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },

};

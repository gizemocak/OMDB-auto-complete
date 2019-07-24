const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.[contenthash:8].js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".jsx", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Setting up webpack 4",
      template: "index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};

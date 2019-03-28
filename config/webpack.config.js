
const path = require('path')
const HtmlWebpackPlugin= require('html-webpack-plugin')
var config = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // template: "src/web/pages/admin/admin.html",
      // chunks: ['app']
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'), //服务器内容 publicPath是静态文件内容
    hot: true,//启动热更新
    index: 'index.html',
    proxy: {

      // "/upload": "http://localhost:3000",
      "/api": {
        target: "http://localhost:3000",

      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "stage-0", "stage-1", "stage-2"]
          // presets: ["es2015"]
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
          // presets: ["es2015"]
        }
      }
    ]
  }

};
module.exports = config;
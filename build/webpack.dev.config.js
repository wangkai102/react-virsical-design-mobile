const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../example/main.js'), //入口文件
  output: {
    filename: 'bundle.[hash4].js', // 打包后的文件名称
    path: path.join(__dirname, '../dist'),
  }, //出口文件
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react'], // env转换es6 react转react
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 如果想要启用 CSS 模块化，可以为 css-loader 添加 modules 参数即可
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader?modules', 'less-loader'],
      },
    ],
  }, //处理对应模块
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../example/index.html'),
      hash: true,
    }),
  ], // 对应的插件
  mode: 'development', //模式配置
};

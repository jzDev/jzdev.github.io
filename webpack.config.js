const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const path = require('path');

const isProduction = env => env !== 'development';

module.exports = (env = 'development') => ({
  mode: env,
  devServer: {
    contentBase: [path.join(__dirname, 'dist')],
    historyApiFallback: true,
  },
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: isProduction(env) ? 'dist/' : '',
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: isProduction(env) ?
        path.join(__dirname, './index.html') :
        path.join(__dirname, './dist/index.html'),
      template: 'src/template.html',
    }),
    new HtmlWebpackHarddiskPlugin(),
  ]
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const path = require('path');

module.exports = (env = 'development') => ({
  mode: env,
  devServer: {
    contentBase: [path.join(__dirname, 'dist')],
    historyApiFallback: true
  },
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: path.join(__dirname, './dist/index.html'),
      template: 'src/template.html'
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
});

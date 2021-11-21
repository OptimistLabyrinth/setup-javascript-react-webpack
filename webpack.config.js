const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['babel-loader'],
      },
      {
        test: /\.(scss)$/i,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 99999999,
    maxEntrypointSize: 99999999,
  },
  target: 'browserslist',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    static: 'public',
    proxy: {
      '/api': 'http://localhost:4000',
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    liveReload: false,
  },
}

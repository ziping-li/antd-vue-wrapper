const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => ({
  mode: 'production',
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    publicPath: './',
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd', // 采用通用模块定义
    libraryExport: 'default',
  },
  optimization: {
    minimizer: [], // disable minify
  },
  externals: {
    vue: 'Vue',
  },
  resolve: {
    alias: {
      // this isn't technically needed, since the default `vue` entry for bundlers
      // is a simple `export * from '@vue/runtime-dom`. However having this
      // extra re-export somehow causes webpack to always invalidate the module
      // on the first HMR update and causes the page to reload.
      vue: '@vue/runtime-dom',
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue'],
  },
  module: {
    rules: [
      {
        test: /(\.jsx?|\.tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.(png|svg|ttf|woff|woff2|eot|otf)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 12288, name: '[name].[ext]' },
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'antd-vue-wrapper.css',
    }),
  ],
});

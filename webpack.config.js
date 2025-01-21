const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './resources/js/app.js',
    styles: './resources/scss/app.scss',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public/assets'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.scss'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  mode: 'development',
};

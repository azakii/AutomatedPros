const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production', // or 'production'
  entry: './src/js/main.js',

  stats: {
    children: true,
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },

      {
        test: /\.scss$/,
        use: [
            // 'style-loader',
            // 'css-loader',
            // 'sass-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
 
        ],
      },
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          // chunks: ['main'],
          // filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
          filename: 'main.css',
        }),
        // new CopyWebpackPlugin({
        //   patterns: [
        //     {
        //       from: './src/img', // source directory
        //       to: './src/img', // target directory in the output path
        //     },
        //     // Add more patterns if needed
        //   ],
        // }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      open: true,
      hot: true, // Enable Hot Module Replacement (HMR)
    },
  
};
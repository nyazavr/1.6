const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  
  entry: './src/js/index.js',
  //'./src/js/index.js',
  output: {
    //filename: 'bundle.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },

  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader',{
          loader: 'sass-loader',
          options: {
            sourceMap: true, 
          }
        }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        
      },
    ],
    
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/img', to: './resource', },
      ]
    }),
  ],
  
  devServer: {
    static: './dist',
  },
  
  mode: 'development',
};
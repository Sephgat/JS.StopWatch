const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");

require('dotenv').config();

module.exports = {
    mode: 'development',
    entry: {
      index: './src/js/index.js',
      timer: './node_modules/@ocdla/timer/Timer.js',
      timercomponent: './node_modules/@ocdla/timer/TimerComponent.js',
      salesforceapi: './node_modules/@ocdla/salesforceapi/salesforceapi.js',
      salesforceapi: './node_modules/@ocdla/timer/APIComponent.js',
    },
    resolve: {
      symlinks: false,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: '[name].bundle.js',
      assetModuleFilename: "images/[name][ext]",
      clean: true,
    },
    target: 'web',
    devServer: { 
      static: "./dist"
    }, 
    devtool: 'source-map', 
    module: {
      rules: [	
        { 
          test: /\.(js|jsx)$/,
          use: { 
            loader: 'babel-loader', 
            options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }}
        }, 
        { 
          test: /\.css$/i, 
          use: [ 'style-loader', 'css-loader' ]		
        },
        { 
            test: /.s[ac]ss$/i, 
            use: [ 'style-loader', 'css-loader' , 'sass-loader']		
        },
        {  
          test: /\.(svg|eot|ttf|woff|woff2)$/i,  
          type: "asset/resource",
        },
        {
          test: /\.(png|jpg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/index.html"),
        chunks: ["index"],
        inject: "body",
        filename: "index.html",
      }),
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SERVER_URL: JSON.stringify(process.env.SERVER_URL),
        ACCESS_TOKEN: JSON.stringify(process.env.ACCESS_TOKEN),
        INSTANCE_URL: JSON.stringify(process.env.INSTANCE_URL),
      }),
    ],
}
  
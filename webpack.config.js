const path = require("path");
const webpack = require('webpack');
const fs = require('fs');

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'dear-college.js',
    library: {
      type: "umd",
      name: "client",
    },
  },
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }] 
            ]
          }
        },
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "vm": require.resolve("vm-browserify")
    }
  }
};

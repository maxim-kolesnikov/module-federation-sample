const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

module.exports = merge(webpackCommonConfig, {
    mode: 'development',
    cache: false,
    optimization: {
        minimize: false,
    },
    output: {
        publicPath: 'auto',
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: process.env.PORT,
    }
});

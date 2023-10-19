const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

const { BUILD_PATH = path.join('./dist'), NAME } = process.env;

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    devtool: 'cheap-source-map',
    cache: true,
    output: {
        clean: false,
        pathinfo: false,
        path: path.resolve(`${BUILD_PATH}/${NAME}`),
    }
});

const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

const { PUBLIC_URL = '', OUTPUT_PATH = path.join('./dist') } = process.env;

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    devtool: 'cheap-source-map',
    cache: true,
    output: {
        publicPath: `${PUBLIC_URL}/`,
        pathinfo: false,
        path: path.resolve(OUTPUT_PATH),
    }
});

const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');


module.exports = ({ PORT }) =>
    merge(webpackCommonConfig, {
        mode: 'development',
        cache: false,
        optimization: {
            minimize: false,
        },
        output: {
            publicPath: PORT ? `http://localhost:${PORT}/` : 'auto'
        },
        devServer: {
            port: PORT,
            historyApiFallback: true
        }
    });

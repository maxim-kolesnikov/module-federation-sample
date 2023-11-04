const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

module.exports = ({ BUILD_PATH = path.join('./dist'), NAME = '' }) => {

    console.log({ BUILD_PATH: path.resolve(`${BUILD_PATH}/${NAME}`) })
    return merge(webpackCommonConfig, {
        mode: 'production',
        devtool: 'cheap-source-map',
        cache: true,
        output: {
            clean: false,
            pathinfo: false,
            path: path.resolve(`${BUILD_PATH}/${NAME}`)

        }
    });
}


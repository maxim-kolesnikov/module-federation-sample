const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackDevConfig = require('./configs/webpack.dev');
const webpackProdConfig = require('./configs/webpack.prod');

module.exports = (env, { mode }) => {
    const isDevMode = mode === 'development';
    const configMode = isDevMode ? webpackDevConfig : webpackProdConfig;

    return merge(configMode(env))
};

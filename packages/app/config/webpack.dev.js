const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app',
            remotes: {
                home: `home@${process.env.REMOTE_HOME}/remoteEntry.js`
            },
            exposes: {
                './App': './src/App',
            },
            shared: {
                react: { singleton: true },
                'react-dom': { singleton: true }
            },
        }),
    ],
});

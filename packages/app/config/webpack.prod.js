const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    devtool: 'cheap-source-map',
    cache: true,
    output: {
        publicPath: '/',
        pathinfo: false,
        path: path.join(__dirname, '../../../build'),
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app',
            remotes: {
                home: `home@/home/remoteEntry.js`
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
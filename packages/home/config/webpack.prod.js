const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    devtool: 'cheap-source-map',
    cache: true,
    output: {
        publicPath: `${process.env.PUBLIC_URL}/home/`,
        pathinfo: false,
        path: path.join(__dirname, '../../../build/home'),
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'home',
            library: { type: 'var', name: 'home' },
            filename: 'remoteEntry.js',
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

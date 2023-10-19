const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;

require('dotenv').config({ path: path.resolve('.env') });
const { NODE_ENV, REMOTE_HOME, REMOTE_PROFILE } = process.env;

module.exports = {
    entry: './src/index',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app',
            remotes: {
                home: `home@${NODE_ENV === 'development' ? REMOTE_HOME : 'home'}/remoteEntry.js`,
                profile: `profile@${NODE_ENV === 'development' ? REMOTE_PROFILE : 'profile'}/remoteEntry.js`
            },
            exposes: {
                './App': './src/App',
            },
            shared: {
                ...deps,
                react: { singleton: true },
                'react-dom': { singleton: true }
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};

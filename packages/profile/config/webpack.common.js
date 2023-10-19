const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;

require('dotenv').config({ path: path.resolve('.env') });

const { NAME } = process.env;

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
            name: NAME,
            library: { type: 'var', name: NAME },
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App'
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

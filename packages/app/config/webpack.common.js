const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require("webpack");
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;

require('dotenv').config({ path: path.resolve('.env') });
const { NODE_ENV, REMOTE_HOME, REMOTE_PROFILE } = process.env;

console.log(process.cwd(), NODE_ENV)

module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
    },
    plugins: [
        new DefinePlugin({
            'process.env.HASH_ROUTER': process.env.HASH_ROUTER,
        }),
        new ModuleFederationPlugin({
            name: 'app',
            remotes: {
                home: `home@${NODE_ENV === 'development' ? REMOTE_HOME : 'home'}/remoteEntry.js`,
                profile: `profile@${NODE_ENV === 'development' ? REMOTE_PROFILE : 'profile'}/remoteEntry.js`
            },
            exposes: {},
            shared: {
                ...deps,
                react: { singleton: true },
                'react-dom': { singleton: true },
                'react-router-dom': {
                    singleton: true,
                    requiredVersion: deps['react-router-dom'],
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};

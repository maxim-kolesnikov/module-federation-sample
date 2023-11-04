const webpackCoreConfig = require('@mfs/core/webpack.config');

const path = require('path');
const { merge } = require('webpack-merge');
const { DefinePlugin } = require("webpack");
const { ModuleFederationPlugin } = require('webpack').container;

require('dotenv').config({ path: path.resolve('.env') });
const { REMOTE_HOME = '', REMOTE_PROFILE = '', NAME } = process.env;

const deps = require('./package.json').dependencies;
module.exports = (env, { mode }) => {
    const isDevMode = mode === 'development';

    return merge(webpackCoreConfig({ ...env, ...process.env }, { mode }), {
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
                    'react-dom': { singleton: true },
                    'react-router-dom': {
                        singleton: true,
                        requiredVersion: deps['react-router-dom'],
                    },
                },
            }),
        ],
    })
};

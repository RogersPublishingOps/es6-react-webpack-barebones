const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const path = require('path');

const config = {
    entry: './src/index.jsx',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            { test: /\.(jsx|js)?$/, loader: 'babel-loader', exclude: [/node_modules/, /test/] }
        ]
    },

    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },

    plugins: [
        new ProgressBarPlugin()
    ],

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 1234
    }
}

module.exports = config;
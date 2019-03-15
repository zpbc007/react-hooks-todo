const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        port: 8082,
        hot: true,
        contentBase: '../dist',
        host: '0.0.0.0',
        open: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({})
    ]
})
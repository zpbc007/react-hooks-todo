const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin'); 

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.jsx?$/,
            include: /node_modules/,
            use: ['react-hot-loader/webpack'],
        }, {
            test: /\.md$/,
            use: 'ignore-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: 'index.html',
        }),
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, '../tsconfig.json')
        })],
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
};
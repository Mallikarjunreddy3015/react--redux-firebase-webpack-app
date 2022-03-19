const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('babel-core');

module.exports = {
    mode: 'production',

    entry: {
        // main:'./public/temp.js',
        index: './src/index.js',
        //  app: './src/App.js',
        //  home:'./src/pages/home',
        //  login:'./src/pages/login'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,

    },

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        }
    },


    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },


    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,

                use: ["source-map-loader", 'babel-loader'],
            },
            {
                test: /\.css$/,
                
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },

            {
                test: /\.(jpg)$/,
                type: 'asset/resource'
            },



        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public/index.html')
        }),


    ],



}
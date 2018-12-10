/*
* @Author: zhang
* @Date:   2018-12-08 11:50:12
* @Last Modified by:   zhang
* @Last Modified time: 2018-12-09 13:08:58
*/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
            'react-hot-loader/patch',  //缓存住组件state状态
            path.join(__dirname,'src/index.js'),
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name].js',
        chunkFilename: "js/[name].[chunkhash].js",
        // publicParh: '/'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true //cacheDirectory用于缓存babel的编译结果,加快重新编译的速度
                    }
                },
                include: path.join(__dirname,'src')
            },{
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192   // 小于8k的图片会被转化成base64编码
                    }
                }]
            },{
               test: /.css$/,
               use: [MiniCssExtractPlugin.loader,'css-loader']
            }, {
                 test: /.(scss|sass)$/,
                 use:[MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            }, {
                test: /.less$/,
                use:[MiniCssExtractPlugin.loader,'css-loader', 'less-loader']
            }
        ]
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJSPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css",
            chunkFilename: "css/[id].[hash].css"
        }),
        new webpack.DefinePlugin({ //允许创建一个在编译时可以配置的全局常量。
            test: JSON.stringify("test"),
        })
    ]
}
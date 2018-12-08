/*
* @Author: zhang
* @Date:   2018-12-08 11:49:54
* @Last Modified by:   zhang
* @Last Modified time: 2018-12-08 15:50:38
*/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',  //缓存住组件state状态
        path.join(__dirname,'src/index.js')
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name].js'
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
               use: ['style-loader','css-loader']
            }, {
                 test: /.(scss|sass)$/,
                 use:['style-loader','css-loader', 'sass-loader']
            }, {
                test: /.less$/,
                use:['style-loader','css-loader', 'less-loader']
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
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 9001,
        hot: true,
        inline:true,
        historyApiFallback: true,
        proxy: {
            // "/api": "http://localhost:9000/api/"
        }
    }
}
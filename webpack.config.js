const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const path = require('path');


// 引入路径管理模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
//可以在webpack 运行到某个时刻的时候，进行工作
const webpack = require('webpack');

// sourceMap它是一个映射关系，他知道dist目录下main. j s文件96
// 实际上对应的是src目录下index. js文件中的第一行
// 当前其实是index.js中第一行代码出错了
module.exports = {
    mode: 'development',
    devtool: "cheap-module-eval-source-map",
    // 开发环境development devtool使用cheap-module-eval-source-map
    // 生产环境production devtool使用cheap-module-source-map
    // SourceMap原理 需要学习
    entry: {
        main: "./src/index.js",
    },  // 指定入口文件
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        hotOnly: true,
        // 页面热更新，html、css可以直接解决，js需要再写代码兼容
        // proxy:{
        //     '/api':'http://localhost:3000'
        // }
    },
    module: {
        rules: [{
            test: /\.(png|svg|jpg|gif)$/,
            use: {
                loader: "url-loader",
                options: {
                    name: "[name]_[hash].[ext]",
                    outputPath: 'images/',
                    limit: 2048,

                }
            }
        },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            // modules: true,

                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]

            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]

            },
            {
                test: /\.(eot|ttf|svg|woff)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: 'font/',

                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    // "presets": [["@babel/preset-env",{
                        // target:{
                        //     edge:"17",
                        //     firefox:"60",
                        //     chrome:"67",
                        //     safari:"11.1",
                        // },
                        // 高版本不会转业务代码使用
                        // useBuiltIns:"usage"
                    // }]]
                    "plugins": [
                        [
                            "@babel/plugin-transform-runtime",
                            {
                                "absoluteRuntime": false,
                                "corejs": 2,
                                "helpers": true,
                                "regenerator": true,
                                "useESModules": false
                            }
                        ]
                    ]
                    // 库代码使用，防止污染全局环境
                }
            }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()

    ],
    optimization: {
        usedExports:true
    },
    output: {
        filename: "[name].js",  // 指定出口文件名
        path: path.resolve(__dirname, 'dist')
        // 指定出口路径
    }
}

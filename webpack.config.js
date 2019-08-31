const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const path = require('path');
// 引入路径管理模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
//可以在webpack 运行到某个时刻的时候，进行工作


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
                test: /\.(eot|ttf|svg|woff)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: 'font/',

                    }
                }
            }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })

    ],
    output: {
        filename: "[name].js",  // 指定出口文件名
        path: path.resolve(__dirname, 'dist')
        // 指定出口路径
    }
}

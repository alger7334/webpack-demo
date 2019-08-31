const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const path = require('path');
// 引入路径管理模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
//可以在webpack 运行到某个时刻的时候，进行工作



module.exports = {
    mode: 'development',
    entry: {
        main: "./src/index.js",
        sub: "./src/index.js",
    },  // 指定入口文件
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
        publicPath: "", //给引入的文件添加前缀
        filename: "[name].js",  // 指定出口文件名
        path: path.resolve(__dirname, 'dist')
        // 指定出口路径
    }
}

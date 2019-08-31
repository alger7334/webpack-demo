const path = require('path');
// 引入路径管理模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
//可以在webpack 运行到某个时刻的时候，进行工作


module.exports = {
    mode: 'development',
    entry: {
        main: "./src/index.js",
    },  // 指定入口文件
    module: {
        rules: [{
            test: /\.jpg$/,
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
                    {loader: 'css-loader', options: {importLoaders: 2}},
                    'sass-loader',
                    'postcss-loader'
                ]

            }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })],
    output: {
        filename: "build.js",  // 指定出口文件名
        path: path.resolve(__dirname, 'dist')
        // 指定出口路径
    }
}

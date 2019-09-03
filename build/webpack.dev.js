
//可以在webpack 运行到某个时刻的时候，进行工作
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

 const devConfig ={
    mode: 'development',
    devtool: "cheap-module-eval-source-map",
    // 开发环境development devtool使用cheap-module-eval-source-map
    // 生产环境production devtool使用cheap-module-source-map
    // SourceMap原理 需要学习

    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        // hotOnly: true,
        // 页面热更新，html、css可以直接解决，js需要再写代码兼容
        // proxy:{
        //     '/api':'http://localhost:3000'
        // }
    },

    plugins: [

        new webpack.HotModuleReplacementPlugin()

    ],
    optimization: {
        usedExports:true
    },

}
module.exports = merge(commonConfig,devConfig);

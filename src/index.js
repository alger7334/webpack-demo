
// Tree Shaking 只支持ES Module 模块的使用
// 只打包需要的模块，不需要的再线上环境不打包
// import '@babel/polyfill'
// "sideEffects": ["@babel/polyfill","index.css"],
// packjson 顶部添加这个设置，让用到的文件打包，css文件不生效

import {add } from './math'
add(1,2);

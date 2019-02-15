// 引入
const express = require('express');

// 创建服务器
const app = express();

// 处理响应

    // 如果请求以/sucai开头，我就做这件事
    app.use('/sucai',(req,res,next) => {
        console.log('白菜');
        next();
    });
    app.use('/sucai',(req,res,next) => {
        console.log('花菜');
        next();
    });

    // 如果请求以/huncai开头，我就做这件事
    app.use('/huncai',(req,res,next) => {
        console.log('熏鹅');
        next();
    });
    app.use('/huncai',(req,res,next) => {
        console.log('桶子鸡');
        next();
    });

// 开启监听
app.listen(8888,() => {
    console.log('服务启动在8888端口');
    console.log('你你要吃什么？')
});
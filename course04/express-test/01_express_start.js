// 引入
const express = require('express');

// 创建服务器
const app = express();

// 处理响应
app.use('/sucai',(req,res,next) => {
    console.log('白菜');
});

// 开启监听
app.listen(8888,() => {
    console.log('服务启动在8888端口');
});
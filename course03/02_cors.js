// 提供数据的返回
// 1.编写基本服务器框架
const http = require('http');

let app = http.createServer();

// 核心对象url来获取query
const url = require('url');

app.on('request',(req,res)=>{
    // 2.处理/jsonp的请求 get
    if(req.url.startsWith('/cors')){

        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET,PUT,DELETE,OPTIONS');
        // 运行自定义头
        res.setHeader('Access-Control-Allow-Headers','my-token,content-type');
        res.end('xxxx');
    }
});



// 3.端口是8888

app.listen(8888,()=>{
    console.log('服务器启动在8888端口');
});
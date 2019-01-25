// 提供数据的返回
// 1.编写基本服务器框架
const http = require('http');

let app = http.createServer();

// 核心对象url来获取query
const url = require('url');

app.on('request',(req,res)=>{
    // 2.处理/jsonp的请求 get
    if(req.url.startsWith('/jsonp')){
        res.end('josnp ok');
        // 从请求url参数中获取callback对应的值
        let fnName = url.parse(req.url,true).query.callback;
        console.log(fnName);
        // 拼接函数名 （数据）的字符串返回给客户端
        let str = fnName + `('jsonp ok')`;
        res.end(str);
    }
    
});



// 3.端口是8888

app.listen(8888,()=>{
    console.log('服务器启动在8888端口');
});
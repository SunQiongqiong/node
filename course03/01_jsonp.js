// 提供数据的返回
// 1.编写基本服务器框架
const http = require('http');

let app = http.createServer();

app.on('request',(req,res)=>{
    // 2.处理/jsonp的请求 get
    if(req.url.startsWith('/jsonp')){
        res.end('josnp ok');
    }
    
});



// 3.端口是8888

app.listen(8888,()=>{
    console.log('服务器启动在8888端口');
});
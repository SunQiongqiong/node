// 提供数据的返回
// 1.编写基本服务器框架
const http = require('http');

let app = http.createServer();

// 核心对象url来获取query
const url = require('url');

const fs = require('fs'); // 引入 fs 读取 html 页面并返回 
const request = require('request'); // 引入 request 对象

app.on('request',(req,res)=>{
    // 2.处理/jsonp的请求 get
    if(req.url.startsWith('/proxy')){

        // 请求别人的数据返回给你
        // 再次去访问 http://api.douban.com/v2/movie/in_theaters,
        // 再将这个数据返回给客户端浏览器

        // 创建一个客户端对象，指定url
        var x = request('http://api.douban.com/v2/movie/in_theaters');

        // 将原本请求的信息，通过管道传递到 x 新请求对象中，并发起请求
        req.pipe(x);    // x copy req 的请求参数
        
        // 将 x 的请求数据，通关管道流到页面的 ajax 响应中
        x.pipe(res); // x 将响应传输给 res

    } else if (req.url === '/') {
        // 返回页面
        let data = fs.readFileSync('./03_proxy.html');
        res.end(data);

    }
});



// 3.端口是8888

app.listen(8888,()=>{
    console.log('服务器启动在8888端口');
});
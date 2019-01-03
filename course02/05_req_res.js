const http = require('http');

let server = http.createServer();

server.on('request',(req,res) => {
    console.log(req.url) // 首行
    console.log(req.method) // 首行
    console.log('++++++++++++++++++')
    console.log(req.headers) // 头

    

    // 响应 写头
    res.setHeader('test','123'); // 在内存中设置头，没有写到服务器

    // 响应 首行中的状态码
    res.writeHead(500);  // 设置并写入头  


    // 响应体
    res.write('1');  // 写多次
    res.write('2');
    res.write('3');

    // 响应体 写一次
    res.end('4');   // write和end  参数是 string||buffer(二进制数据)



});

server.listen(8888,()=>{
    console.log('服务启动了22222')
})
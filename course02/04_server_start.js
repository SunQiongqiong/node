// 1.创建核心对象
const http = require('http');
// 2.通过核心对象创建服务器对象
// let server = http.createServer((req,res)=>{
//     console.log("请求进来了")
// });
let server = http.createServer();

// 3.绑定请求事件
server.on('request',(req,res) => {
    console.log("请求进来了1111")
});

// 4. 监听端口，设置IP
server.listen(8888,'192.168.32.24',()=>{
    console.log('服务器启动在8888端口，IP:192.168.32.24');
});
const http = require('http'); // 引入核心对象
const fs = require('fs');  // 读取文件

http.createServer((req,res) => {
    if (req.url === '/' && req.url === '/index.html') {
        fs.readFile('./search.html',(err,data) => {
            // data 是二进制数据，以16进制表现
            res.end(data);
        });
    } else if (req.url === '/views.html') {
        fs.readFile('./views.html',(err,data) => {
            res.end(data);
        })
    } else if (req.url.startsWith('/search')) {

    }
});
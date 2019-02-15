const Koa = require('koa');

// 创建服务器示例对象
const app = new Koa();

// 安排一个中间件
// app.use((context,next) => {
//     // 要么响应数据，要么next给下一个中间件响应
//     // 获取请求常用操作
//     console.log(context.request.url);
//     console.log(context.request.method);
//     console.log(context.request.headers);


//     // 设置响应头和状态码
//     // context.response.set('my-token','asd');
//     // context.response.status = 404;

//     // 响应 任意数据 读文件的buffer||字符串||对象
//     // context.response.body = {name:'koa'}

//     // 设置cookie
//     // context.cookies.set('name','koa123')
//     next();
// })

// 这个中间件目前还未执行
app.use(async (ctx,next) => {
    // console.log('第二个中间件');  // 同步代码
    // ctx.response.body = 'ok';

    // 异步代码
    ctx.response.body = await new Promise(function(resolve,reject){
        require('fs').readFile('./01_start_req_res.js','utf8',(err,data) => {
            if (err) {
                reject(err);
                return;
            }
            // 返回data
            resolve(data)
        })
    })

    // 由于文件不是立刻读取，后续才读到，响应404
})

// 监听端口
app.listen(8888,() => {
    console.log('服务启动了');
});
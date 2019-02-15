// URL重写：原本有一个url：/xxx     但是不和首页的/一样
// 但是我们需要首页显示/xxx

// 配置两条路由
const Koa = require('koa');
const Router = require('koa-router');  // 引入路由中间件

const app = new Koa();  // 创建服务器对象
var router = new Router();  // 创建示例对象

router.get('/', (ctx, next) => {
    ctx.body = 'hello';
})
.get('/test',(ctx,next) => {
    ctx.body = 'word';
})
.post('/method',(ctx,next) => {
    ctx.body = 'post'
})
   
app
.use(router.routes())
// 包装一些响应 405 方法不允许 501 方法未实现
.use(router.allowedMethods());
// 以上函数的配置，其实就是给405/501做一个包装，而非统一提示404
// 405  代表，有该url，没有该请求方式
// 501 该请求方式不支持

app.listen(8888);
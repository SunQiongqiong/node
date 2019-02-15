// URL重写：原本有一个url：/xxx     但是不和首页的/一样
// 但是我们需要首页显示/xxx

// 配置两条路由
const Koa = require('koa');
const Router = require('koa-router');  // 引入路由中间件

const app = new Koa();  // 创建服务器对象
var router = new Router();  // 创建实例对象

router.get('/', (ctx, next) => {
    ctx.body = 'index';
})
.get('/showinfo',(ctx,next) => {
    ctx.body = 'showinfo';
})
.get('/showerror',(ctx,next) => {
    ctx.body = 'error';
})

// 模拟一个变量，未登录
let isLogin = false;
app.use(async (ctx,next) => {
    // 检查当前进入showinfo的用户是否登录
    if (ctx.url === '/showinfo') {
        if (!isLogin) {
            // 重写url。让其访问别的
            ctx.url = '/showerror'
        }
    }
    // 怎样都要放行，只是没有登录的时候url变了  next是异步，所以要加await    
    await next();
})

   
app
.use(router.routes())
.use(router.allowedMethods());

app.listen(8888);
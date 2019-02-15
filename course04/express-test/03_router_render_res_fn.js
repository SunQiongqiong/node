// 路由、模板

// 引入
const express = require('express');

// 创建服务器
const app = express();


const expressArtTemplate = require('express-art-template');
// 配置模板引擎  参数1也是后缀名
app.engine('art',expressArtTemplate);

app.set('view options', {
    // debug 表示是否压缩文件，是否使用缓存   true 不使用 如果是false,修改静态文件后需要重启服务器才能生效
    debug: process.env.NODE_ENV !== 'production'
});

// 创建路由对象
const router = express.Router();

// 配置一些路由规则
router.get('/',(req,res,next) => {
    res.json({name:'jack'});
})
.post('/post',(req,res) => {
    res.download('./02_use.js');
})
.get('/jsonp',(req,res) => {
    res.jsonp('我是jsonp数据');
})
.get('/render',(req,res) => {
    res.render('index.art',{
        text: 'hello'
    });
})

// 加入到中间件中
app.use(router);
 
// 开启监听
app.listen(8888,() => {
    console.log('服务启动在8888端口');
});
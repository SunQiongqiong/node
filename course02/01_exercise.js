// 1:fs 引入核心对象fs
const fs = require('fs')
// 2: 指定一个目录，使用readdir函数来读取   参数path,callback
const myPath = 'C:\\Users\\JoneS\\Desktop\\node\\02';
// 3: callback(err,files字符串数组)
fs.readdir(myPath,(err,files)=>{
	console.log(files)
})

// 小结： readdir参数：path,callback:err,files

// fs.stat(path,callback);  callback:err,states:isFile...函数
const myPath1 = 'C:\\Users\\JoneS\\Desktop\\node\\02\\node_modules';
const myPath2 = 'C:\\Users\\JoneS\\Desktop\\node\\02\\start.js';

// 测试各有所不同
fs.stat(myPath1,(err,state)=>{
	console.log('其是一个文件夹' + state.isDirectory());
	console.log('其是一个文件' + state.isFile())
});

fs.stat(myPath2,(err,state)=>{
	console.log('其是一个文件夹' + state.isDirectory());
	console.log('其是一个文件' + state.isFile())
});
// fs.stat(路径，回调函数（err,文件状态）)
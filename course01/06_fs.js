//  1. 引入核心对象
const fs = require('fs')

//  读取一个文件数据
fs.readFile('./01_start.js',(err,data)=>{
    // data 当前是一个二进制的数据，是以一种16进制表现形式来的
    // 如果你要看，data.toString()
    if (err) throw err
    // console.log(data)
    // console.log(data.toString())

});
// 在nodejs中，以函数作为参数出现的时候，如果有可能出现异常
// 规定了错误对象是优先放在第一位的


// fs.writeFile('./new.txt','江芳波是一个大坏蛋，大笨猪',(err)=>{
//     if (err) throw err    // err 为 null 没有错
//     console.log(err)
// })
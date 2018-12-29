// 测试同步IO
const fs = require('fs');

// 同步API就是异步后面加上Sync，并且函数返回至是数据，没有回调函数了

console.log('读之前...');
let readData = fs.readFlieSync('C:\\Users\\JoneS\\Desktop\\test.mp4');
console.log('读之后...');
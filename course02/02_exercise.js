const myPath = "C:\\Users\\JoneS\\Desktop\\node\\course02";

// 1： 引入fs核心对象
const fs = require('fs');

// 利用path核心对象来拼接并修正路径
const path = require('path');

function myReadFile(temPath){
	// 2: fs去读这个目录，返回字符串数组，其中有目录，有文件
	fs.readdir(temPath,(err,files)=>{
		// 循环字符串数组，获取每个文件名
		files.forEach(file=>{
			// console.log(file);
			// 3：要判断就需要每个文件都state一下，通过isFile来判断
			// 3.5：需要绝对路径
			// 3.8：在拼接路径的时候，使用path.join(),防止路径拼错
			let fPath = path.join(temPath,file);
			fs.stat(fPath,(err,state)=>{
				// 4：如果是文件夹，就继续同样的操作，否则输出（递归）
				if(state.isFile()){
					console.log(file)
				} else {
					// 递归入口
					myReadFile(fPath)
				}
			});
		});
	});
}
myReadFile(myPath);


// 递归是同步，整个文件操作是异步
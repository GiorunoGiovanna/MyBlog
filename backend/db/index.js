//导入mysql模块
const mysql = require('mysql')

//创建数据库链接对象
//链接在线数据库
const db = mysql.createPool({
	host:'106.55.54.148',
	port:'3306',
	user:'zhouker',
	password:'tps83722309',
	database:'blog'
})

//导出db数据库连接对象
module.exports = db
//项目入口文件
//导入express
const express = require('express')
//导入cors中间件
const cors = require('cors')

//创建服务器的实例对象
const app = express()
//将cors组测位全局中间件
app.use(cors())
//配置解析表单数据的中间件(这个中间件只能解析application/x-www-form-urlencoded格式的请求)
app.use(express.urlencoded({ extended: false }))

//在路由之前创建全局中间件
app.use((req, res, next) => {
	//status默认值为1，标识失败的情况
	res.cc = (err, status = 1) => {
		res.send({
			status,
			message: err instanceof Error ? err.message : err
		})
	}
	next()
})
//导入解析token中间件
app.use(express.urlencoded({ extended: false }))
//在路由之前解析token
const expressJWT = require('express-jwt')
const config = require('./config')
app.use(expressJWT({secret: config.jwtSecretKey,algorithms:['HS256']}).unless({path: [/^\/api\/login$/,/^\/api\/register/,/^\/v1\/api/]}))

//定义错误级别的中间件
app.use((err, req, res, next) => {
	//身份认证错误
	if(err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
	res.cc(err)
})

//配置路由
const userRouter = require('./router/user')
app.use('/api',userRouter)

//启动swagger
app.use('/v1/api', express.static('public'));

//启动服务器
app.listen(3007, () => {
	console.log('api server running at http://127.0.0.1:3007')
})
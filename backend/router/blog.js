const express = require('express')
//创建路由对象
const router = express.Router()
//引入用户路由处理函数模块
const toolHandler = require('../router-handler/blog')

//更新md转html
router.post('/updateMyBlog', toolHandler.updateMyBlog)

//查询所有博客文件
router.get('/searchAll', toolHandler.searchAll)

//按名称查询博客文件
router.get('/searchByName', toolHandler.searchByName)

//模糊查询博客文件
router.get('/search', toolHandler.search)

//将路由对象共享出去
module.exports = router
/**
 * 在这里定义和博客相关的路由处理函数，供/router/tool.js模块进行调用
 */

//导入数据库操作模块
const db = require('../db/index')

//更新本地博客到数据库中的处理函数
const { transfrom } = require('../utils/getMd')
exports.updateMyBlog = (req, res) => {
    transfrom().then(
        result => {
            return res.cc(result, 200)
        }, err => {
            return res.cc(err)
        }
    )
}
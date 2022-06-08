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

//按页查询所有博客的处理函数
exports.searchAll = (req, res) => {
    const { page, size } = req.query
    // res.cc(req.query, 200)
    //定义sql语句，查询所有博客
    const sqlStr = 'select name from blog'
    db.query(sqlStr, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        return res.cc(results.slice((page - 1) * size, page * size), 200)
    })
}

// 按名称查找具体博客
exports.searchByName = (req, res) => {
    const { name } = req.query
    console.log(name)
    // res.cc(req.query, 200)
    //定义sql语句，查询所有博客
    const sqlStr = 'select * from blog where name = ?'
    db.query(sqlStr, name, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        return res.cc(results, 200)
    })
}


//按名称模糊查询的处理函数
exports.search = (req, res) => {
    const { text, page, size } = req.query
    //定义sql语句，查询按照查询规则模糊查询
    const sqlStr = 'select * from blog where name like ?'
    db.query(sqlStr, `%${text}%`, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        return res.cc(results.slice((page - 1) * size, page * size), 200)
    })
}
// 导入axios实例
import service from '../request/index.js'

// 按页获取博客
export function getAllBlog(param) {
    return service({
        url: 'blog/searchAll',
        method: 'get',
        params: param,
    })
}

//按名称搜索具体博客
export function getBlogByName(param) {
    return service({
        url: 'blog/searchByName',
        method: 'get',
        params: param,
    })
}

//按页搜索博客名称
// export function getBlogByName(param) {
//     return service({
//         url: 'blog/search',
//         method: 'get',
//         params: param,
//     })
// }

//更新博客
export function updateBlog() {
    return service({
        url: 'blog/updateMyBlog',
        method: 'post'
    })
}
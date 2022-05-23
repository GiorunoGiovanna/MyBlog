// 导入axios实例
import service from '../request/index.js'

// 获取用户信息
export function apiGetUserInfo(param) {
    return service({
        url: 'register',
        method: 'post',
        data: param,
    })
}
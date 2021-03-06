//请求拦截器
import axios from 'axios';

//创建一个axios实例
const service = axios.create({
    baseURL: 'http://localhost:3007',
    timeout: 60000,//请求超时时间
    withCredentials: false, // 异步请求携带cookie
    headers: {
        // 设置后端需要的传参类型
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiIsInVzZXJfcGljIjoiIiwiaWF0IjoxNjUzNjIwNjg3LCJleHAiOjE2NTM2MjQyODd9.ebosBdtl-E8ESf1CMyGLsicNf36kNOWNOO4mTAuvlfI',
        'X-Requested-With': 'XMLHttpRequest',
    },
})

// 添加请求拦截器
service.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        // 如果用户已经登录，则添加token
        config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiIsInVzZXJfcGljIjoiIiwiaWF0IjoxNjU0MzI5MzE4LCJleHAiOjE2NTQzMzI5MTh9.y6PzlwDBAefmTGKwQmWImtotz-28mkL7c5gz1E0EGLQ'
        // console.log(config)
        return config
    },
    function (error) {
        // 对请求错误做些什么
        console.log(error)
        return Promise.reject(error)
    }
)

// 添加响应拦截器
service.interceptors.response.use(
    function (response) {
        // console.log(response)
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        // dataAxios 是 axios 返回数据中的 data
        const dataAxios = response.data
        // 这个状态码是和后端约定的
        const code = dataAxios.status
        //请求时成功了，再查看和后端约定的状态是否有问题
        if (code === 200) {
            //请求成功，没有问题
            return dataAxios
        } else {
            //请求后端收到了，但是有一些问题，返回后端传值
            return Promise.reject(dataAxios)
        }
    },
    function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        console.log(error)
        return Promise.reject(error)
    }
)

export default service
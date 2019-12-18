import axios from 'axios'

//方法四：最简单的axios的封装
export function request(config) {
    //1.创建axios实例
    const instance1 = axios.create({
        baseURL: 'http://106.54.54.237:8000/api/v1',
        timeout: 5000
    })
    //(1):请求拦截
    instance1.interceptors.request.use(config => {
        //在这里拦截掉请求
        return config;
    }, err => {

    })
    //(2):响应拦截
    instance1.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);
        
    })

    //3.发送真正的请求：请求返回的就是一个promise，所以就直接返回这个请求的结果就好了
    return instance1(config);
}
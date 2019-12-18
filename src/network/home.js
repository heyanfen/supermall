/*
 * @Author: heyanfen
 * @Date: 2019-12-08 21:18:41
 * @LastEditTime: 2019-12-11 13:00:58
 * @LastEditors: Please set LastEditors
 * @Description: 首页要用的网络请求
 * @FilePath: \vue-router\supermall\src\network\home.js
 */
import {request} from './request'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}

//函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
//函数调用结束 -> 弹出函数栈(释放函数中所有的变量)
/**
 * function test() {
 *  const names = ['why','heyanfen']
 * }
 */
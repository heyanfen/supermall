/*
 * @Author: your name
 * @Date: 2019-12-14 11:33:01
 * @LastEditTime: 2019-12-16 01:06:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\coderwhyBrother\supermall\src\network\detail.js
 */
 import { request } from './request'

 export function getDetail(iid) {
     return request({
         url: '/detail',
         params: {
             iid
         }
     })
 }

 export function getRecommend() {
     return request({
         url: '/recommend'
     })
 }

 export class Goods {
     constructor(itemInfo, columns, services) {
         this.title = itemInfo.title;
         this.desc = itemInfo.desc;
         this.newPrice = itemInfo.price;
         this.oldPrice = itemInfo.oldPrice;
         this.discount = itemInfo.discountDesc;
         this.columns = columns;
         this.services = services;
         this.realPrice = itemInfo.lowNowPrice
     }
 }

 export class Shop {
     constructor(shopInfo) {
         this.logo = shopInfo.shopLogo;
         this.name = shopInfo.name;
         this.fans = shopInfo.cFans;
         this.sells = shopInfo.cSells;
         this.score = shopInfo.score;
         this.goodsCount = shopInfo.cGoods
     }
 }

 /**
  * const obj = {
  * }
  * Object.keys(obj).length === 0 就代表这个obj这个对象里面没有值，没有属性，用此方法判断对象是否为空
  */

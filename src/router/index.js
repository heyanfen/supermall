/*
 * @Author: heyanfen
 * @Date: 2019-12-08 17:27:19
 * @LastEditTime: 2019-12-14 11:00:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\supermall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//1.安装插件
Vue.use(VueRouter)


const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const Cart = () => import('views/cart/Cart');
const Profile = () => import('views/profile/profile');
const Detail = () => import('views/detail/Detail');

//抽离出来的router对象的属性
const routes = [
    {
        path: "",
        redirect: "/home"
      },
      {
        path: "/home",
        component: Home
      },
      {
        path: '/category',
        component: Category
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/profile',
        component: Profile
      },
      {
        //动态路由方式传参
        path: '/Detail/:id',
        component: Detail
      }
]

//2.创建router对象
const router = new VueRouter({
    //传一些属性
    routes,
    mode: 'history'
})

export default router
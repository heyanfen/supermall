import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建store对象
const store = new Vuex.Store({
    state: {
        //用于存放购物车里面的每件商品
        cartList: []
    },
    mutations: {
        addCart(state, payLoad) {
            state.cartList.push(payLoad);
        }
    },

})

//3.挂载到vue实例上
export default store
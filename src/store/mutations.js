import {
    ADD_COUNTER,
    ADD_TOP_CART,
    ALL_CHOOSE
} from './mutations-types'

export default {
    //mutations唯一的目的就是修改state中的状态
    //mutations中的每个方法尽可能完成的事件比较单一一点
    [ADD_COUNTER](state, payLoad) {
    payLoad.count++;
    },
    [ADD_TOP_CART](state,payLoad) {
    state.cartList.push(payLoad);
    },
    [ALL_CHOOSE](state,payLoad){
        
    }
}
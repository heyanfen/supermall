import {
    ADD_COUNTER,
    ADD_TOP_CART
} from './mutations-types'

export default {
    addCart(context, payLoad) {
        return new Promise((resolve, reject) => {
            //查找元素组中是否有改数据
            let oldProduct = context.state.cartList.find(item => item.iid == payLoad.iid)
            
            //2.判断oldproduct
            if(oldProduct) {
            // oldProduct.count += 1;
                context.commit(ADD_COUNTER, oldProduct);
                resolve('当前的数量加一')
            } else {
                payLoad.count = 1;
                payLoad.checked = true;
                //state.cartList.push(payLoad);
                context.commit(ADD_TOP_CART,payLoad);
                resolve('添加新的商品')
            }
        })
    }
}
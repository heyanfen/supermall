<template>
<div>
    <!--导航-->
    <navBar class="nav-bar">
        <div slot="center">购物车({{length}})</div>
    </navBar>

    <!--商品列表-->
    <cartList></cartList>

    <!--底部汇总-->
    <cartButtomBar></cartButtomBar>
</div>
</template>

<script>
import navBar from 'components/common/navbar/navBar'
import cartList from './childComponents/cartList'
import cartButtomBar from './childComponents/cartButtomBar'

import { mapGetters } from 'vuex'
export default {
    name: 'Cart',
    components: {
        navBar,
        cartList,
        cartButtomBar
    },
    data() {
        return {

        }
    },
    computed: {
        // cartLength() {
        //     //return this.$store.state.cartList.length;
        //     return this.$store.getters.cartLength;
        // }

        //直接使用getters里面的属性
        //两种语法：数组语法和对象语法
        // ...mapGetters(['cartLength'])
        ...mapGetters({
            length: 'cartLength'
        })
    }
}
</script>

<style scoped>
.nav-bar{
    background-color: var(--color-tint);
    color: white;
    /* font-weight: 700; 加粗字体*/
}
</style>
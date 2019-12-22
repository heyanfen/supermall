<!--
 * @Author: your name
 * @Date: 2019-11-26 14:06:23
 * @LastEditTime: 2019-12-12 21:22:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\tabbarv2\src\components\mainTabber.vue
 -->
<template>
  <div>
      <TabBar>
     <TabBarItem path="/home">
       <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
       <div slot="item_text">首页</div>
     </TabBarItem>
     <TabBarItem path="/category">
       <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
       <div slot="item_text">分类</div>
     </TabBarItem>
     <TabBarItem path="/cart">
       <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
       <div slot="item_text">购物车</div>
     </TabBarItem>
     <TabBarItem path="/profile">
       <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
       <div slot="item_text">我的</div>
     </TabBarItem>
   </TabBar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>
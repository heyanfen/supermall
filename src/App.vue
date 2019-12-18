<!--
 * @Author: your name
 * @Date: 2019-12-07 20:28:15
 * @LastEditTime: 2019-12-08 17:40:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\supermall\src\App.vue
 -->
<template>
  <div id="app">
    <router-view></router-view>
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from '@/components/content/mainTabBar/mainTabber'
export default {
  name: 'app',
  components: {
    mainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>

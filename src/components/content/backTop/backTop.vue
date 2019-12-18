<!--
 * @Author: heyanfen
 * @Date: 2019-12-13 00:27:15
 * @LastEditTime: 2019-12-13 00:56:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\supermall\src\components\content\backTop\backTop.vue
 -->
<template>
  <div class="back-top-style">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name: 'backTop'
}
</script>

<style scoped>
.back-top-style{
    position: fixed;
    right: 8px;
    bottom: 55px;
}
.back-top-style img {
    width: 43px;
    height: 43px;
}
</style>
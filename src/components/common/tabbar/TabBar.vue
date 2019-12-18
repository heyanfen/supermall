`<!--
 * @Author: heyanfen
 * @Date: 2019-11-24 21:16:04
 * @LastEditTime: 2019-11-24 21:36:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\tabbarv2\src\components\tabbar\TabBar.vue
 -->
<template>
  <div id="tab-bar">
     <slot></slot>
   </div>
</template>

<script>
export default {

}
</script>

<style>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /**x(偏移量) y border color */
  box-shadow: 0px -1px 1px rgba(100,100,100,0.1);
}
</style>
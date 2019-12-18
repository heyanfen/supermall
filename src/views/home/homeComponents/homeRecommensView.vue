<!--
 * @Author: your name
 * @Date: 2019-12-09 17:01:07
 * @LastEditTime: 2019-12-09 17:27:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\supermall\src\views\home\homeRecommensView.vue
 -->
<template>
  <div class="recommends">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
    name: "homeRecommendView",
    props: {
        recommends: {
          type: Array,
          defalut() {
            return []
          }
        }
    }
}
</script>

<style>
.recommends{
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
}
</style>
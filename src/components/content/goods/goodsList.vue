<!--
 * @Author: your name
 * @Date: 2019-12-11 14:02:44
 * @LastEditTime: 2019-12-11 15:02:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\supermall\src\components\content\goods\goodsList.vue
 -->
<template>
  <div class="goods-list">
      <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"/>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem'

export default {
    name: "goodsList",
    components: {
        goodsListItem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
 .goods-list {
    display: flex;
    flex-wrap: wrap;/**可以根据width决定一行显示几个 */
    justify-content: space-around;
    background-color: var(--color-background);

    padding: 2px;
  }
</style>
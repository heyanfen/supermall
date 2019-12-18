<!--
 * @Author: your name
 * @Date: 2019-12-09 13:52:16
 * @LastEditTime: 2019-12-09 13:55:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\supermall\src\views\home\homeComponents\homeSwiper.vue
 -->
<template>
  <div>
      <swiper>
          <swiper-item v-for="item in banners" :key="item.title">
            <a :href="item.link">
              <img :src="item.image" alt="">
            </a>
          </swiper-item>
        </swiper>
  </div>
</template>

<script>
import swiper from 'components/common/swiper/Swiper';
import swiperItem from 'components/common/swiper/SwiperItem';
export default {
    name: "homeSwiper",
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
    swiper,
    swiperItem
  },
}
</script>

<style>

</style>
<!--
 * @Author: your name
 * @Date: 2019-12-14 11:59:06
 * @LastEditTime: 2019-12-14 12:40:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\supermall\src\views\detail\detailComponents\detailSwiper.vue
 -->
<template>
    <swiper class="detail-swiper">
        <swiper-item v-for="(item, index) in topImages" :key="index">
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
import swiper from 'components/common/swiper/Swiper';
import swiperItem from 'components/common/swiper/SwiperItem';
export default {
    name: 'DetailSwiper',
    props: {
        topImages: {
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
    methods: {
    }
}
</script>

<style scoped>
.detail-swiper{
    height: 300px;
    overflow: hidden;
}
</style>
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
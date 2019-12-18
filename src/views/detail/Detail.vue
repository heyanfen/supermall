<template>
  <div id="details-style">
      <detailNavBar class="detail-nav"></detailNavBar>
      <Scroll class="detail-content" ref="scroll">
        <detailSwiper :top-images="topImages"></detailSwiper>
        <detailBaseInfo :goods="goods"></detailBaseInfo>
        <detailShopInfo :shop="shop"></detailShopInfo>
      </Scroll>
      
  </div>
</template>

<script>
import goodsList from 'components/content/goods/goodsList'
import detailNavBar from './detailComponents/detailNavBar'
import detailSwiper from './detailComponents/detailSwiper'
import detailBaseInfo from './detailComponents/DetailBaseInfo'
import detailShopInfo from './detailComponents/DetailShopInfo'
import detailImageInfo from './detailComponents/datailImageInfo'

import Scroll from 'components/common/scroll/Scroll'

import { getDetail, Goods, Shop, getRecommend } from 'network/detail'
export default {
    name: 'Detail',
    components: {
        detailNavBar,
        detailSwiper,
        detailBaseInfo,
        Scroll,
        detailShopInfo
    },
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {}
        }
    },
    created() {
        //1.保存传入的iid
        this.iid = this.$route.params.id;

        //2.根据iid请求详情数据
        getDetail(this.iid).then(res => {
            console.log(res.result);
            
            //1.取出数据
            const data = res.result;
            //2.获取顶部图片轮播数据
            this.topImages = res.result.itemInfo.topImages;

            //3.获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns, data.shopInfo.services)

            //4.创建店铺信息的对象
            this.shop = new Shop(data.shopInfo);

            //5.取出详情的信息
            this.detailInfo = data.detailInfo;
        })
    },
    methods: {
    }
}
</script>

<style scoped>
#details-style {
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
}
.detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.detail-content{
    height: calc(100% - 44px);
}
.goods-info-style{
    background-color: #fff;
}
.shop-info-style{
    background-color: #fff;
}
</style>
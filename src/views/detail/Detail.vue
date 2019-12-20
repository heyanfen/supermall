<template>
  <div id="details-style">
      <detailNavBar class="detail-nav"></detailNavBar>
      <Scroll class="detailContent" ref="scroll">
        <detailSwiper :top-images="topImages"></detailSwiper>
        <detailBaseInfo :goods="goods"></detailBaseInfo>
        <detailShopInfo :shop="shop"></detailShopInfo>
        <detailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad"></detailGoodsInfo>
      </Scroll>
  </div>
</template>

<script>
import detailNavBar from './detailComponents/detailNavBar'
import detailSwiper from './detailComponents/detailSwiper'
import detailBaseInfo from './detailComponents/DetailBaseInfo'
import detailShopInfo from './detailComponents/DetailShopInfo'
import detailGoodsInfo from './detailComponents/DetailGoodsInfo'

import Scroll from 'components/common/scroll/Scroll'

import { getDetail, Goods, Shop } from 'network/detail'
export default {
    name: 'Detail',
    components: {
        detailNavBar,
        detailSwiper,
        detailBaseInfo,
        detailShopInfo,
        detailGoodsInfo,

        Scroll
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

        getDetail(this.iid).then(res => {
            console.log(res);
            const data = res.result;
            //1.获取顶部图片的轮播数据
            this.topImages = res.result.itemInfo.topImages

            //2.获取shangp信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

            //3.创建店铺信息对象
            this.shop = new Shop(data.shopInfo)

            //4.保存商品的详情数据
            this.detailInfo = data.detailInfo;
        })
    },
    methods: {
        imageLoad() {
            this.$refs.scroll.refresh();
        }
    }

}
</script>

<style scoped>
#details-style{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
.detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.detailContent{
    height: calc(100% - 44px);
}
</style>
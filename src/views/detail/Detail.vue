<template>
  <div id="details-style">
      <detailNavBar class="detail-nav"></detailNavBar>
      <Scroll class="detailContent" ref="scroll">
        <detailSwiper :top-images="topImages"></detailSwiper>
        <detailBaseInfo :goods="goods"></detailBaseInfo>
        <detailShopInfo :shop="shop"></detailShopInfo>
        <detailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad"></detailGoodsInfo>
        <detailParamInfo :param-info="paramInfo"></detailParamInfo>
        <detailCommentInfo :comment-info="commentInfo"></detailCommentInfo>
        <GoodsList :goods="recommends"></GoodsList>
      </Scroll>
  </div>
</template>

<script>
import detailNavBar from './detailComponents/detailNavBar'
import detailSwiper from './detailComponents/detailSwiper'
import detailBaseInfo from './detailComponents/DetailBaseInfo'
import detailShopInfo from './detailComponents/DetailShopInfo'
import detailGoodsInfo from './detailComponents/DetailGoodsInfo'
import detailParamInfo from './detailComponents/DetailParamInfo'
import detailCommentInfo from './detailComponents/DetailCommentInfo'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/goodsList'

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail'
export default {
    name: 'Detail',
    components: {
        detailNavBar,
        detailSwiper,
        detailBaseInfo,
        detailShopInfo,
        detailGoodsInfo,
        detailParamInfo,
        detailCommentInfo,

        Scroll,
        GoodsList
    },
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommends: []
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

            //5.获取参数信息
            // console.log(data.itemParams.info, data.itemInfo.rule, 'heyanfen');
            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);

            //6.取出评论信息
            if(data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0];
            }

            //请求推荐商品数据
            getRecommend().then(res => {
                this.recommends = res.data.list;
            })
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
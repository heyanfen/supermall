<template>
  <div id="details-style">
      <detailNavBar class="detail-nav" @titleClick="titleClick" ref="nav"></detailNavBar>
      <Scroll class="detailContent" ref="scroll" :probe-type="3" @Uscroll="contentScroll">
        <detailSwiper :top-images="topImages"></detailSwiper>
        <detailBaseInfo :goods="goods"></detailBaseInfo>
        <detailShopInfo :shop="shop"></detailShopInfo>
        <detailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad"></detailGoodsInfo>
        <detailParamInfo :param-info="paramInfo" ref="params"></detailParamInfo>
        <detailCommentInfo :comment-info="commentInfo" ref="comment"></detailCommentInfo>
        <GoodsList :goods="recommends" ref="recommend"></GoodsList>
      </Scroll>
      <detailBottomBar @addToCart="addToCart"></detailBottomBar>
      <!--与首页使用混入-->
      <backTop @click.native="backClick" v-show="isShow"></backTop>
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
import detailBottomBar from './detailComponents/detailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/goodsList'
import {debounce} from 'common/utils'
import {itemListenerMixin, backTopMixin} from 'common/mixin'

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
        detailBottomBar,

        Scroll,
        GoodsList
    },
    mixins: [itemListenerMixin, backTopMixin],
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramInfo: {},
            commentInfo: {},
            recommends: [],
            themeTopsY: [],
            currentIndex: 0
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

            // 第一次获取 值不对。原因：this.$refs.params.$el压根没有渲染
            /**this.themeTopsY = [];

            this.themeTopsY.push(0);
            this.themeTopsY.push(this.$refs.params.$el.offsetTop);
            this.themeTopsY.push(this.$refs.comment.$el.offsetTop);
            this.themeTopsY.push(this.$refs.recommend.$el.offsetTop);

            console.log(this.themeTopsY);**/


            //第二次获取：值不对。原因：图片没有获取
            //组件渲染完成回调函数:百分百能拿到值，这里是DOM渲染完成，但是图片还没有加载完
            // offsetTop值不对，一般都是因为图片引起的
            // this.$nextTick(() => {
            //     this.themeTopsY = [];

            //     this.themeTopsY.push(0);
            //     this.themeTopsY.push(this.$refs.params.$el.offsetTop);
            //     this.themeTopsY.push(this.$refs.comment.$el.offsetTop);
            //     this.themeTopsY.push(this.$refs.recommend.$el.offsetTop);

            //     console.log(this.themeTopsY);
            // })
        })
    },
    mounted() {
        
    },
    destroyed() {
        this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods: {
        imageLoad() {
            this.$refs.scroll.refresh();

            //可以放在这里，因为这个是已经防抖的了
            this.themeTopsY = [];

            this.themeTopsY.push(0);
            this.themeTopsY.push(this.$refs.params.$el.offsetTop);
            this.themeTopsY.push(this.$refs.comment.$el.offsetTop);
            this.themeTopsY.push(this.$refs.recommend.$el.offsetTop);

            console.log(this.themeTopsY); 
        },
        titleClick(index) {
            console.log(index);
            this.$refs.scroll.scrollTo(0,-(this.themeTopsY[index]),200);
        },
        contentScroll(position) {
            //拿到滚动的y值
            const positionY = -position.y;

            //2.与主题中的值进行对比
            let length = this.themeTopsY.length;
            for(let i = 0; i < length; i++) {
                if(this.currentIndex !== i && ((i < length -1 && positionY >= this.themeTopsY[i] && positionY < this.themeTopsY[i+1]) || (i === length - 1 && positionY >= this.themeTopsY[i]))) {
                        this.currentIndex = i;
                        console.log(this.currentIndex);
                        this.$refs.nav.currentIndex = this.currentIndex;
                }
            }
            if((-position.y) > 1000) {
                this.isShow = true;
            } else {
                this.isShow = false;
            }
        },
        addToCart() {
             //1.获取到商品需要在购物车展示的信息
             const product = {};
             product.image = this.topImages[0];
             product.title = this.goods.title;
             product.desc = this.goods.desc;
             product.price = this.goods.realPrice;
             product.iid = this.iid;

             //2.将商品添加到购物车里面
             this.$store.commit('addCart', product)
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
    height: calc(100% - 44px - 49px);
}
</style>
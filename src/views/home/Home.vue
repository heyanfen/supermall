<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <Scroll class="content" ref="scroll"
       :probe-type="3"
        @Uscroll="contentScroll"
        :pull-up-load="true">
        <home-swiper :banners="banners"></home-swiper>
        <homeRecommendsView :recommends="recommends"></homeRecommendsView>
        <featureView></featureView>
        <tabControl :titles="title" class="tab-control" @tabClick="tabClick"></tabControl>
        <goodsList :goods="showGoods"></goodsList>
      </Scroll>
      <!--组件无法直接监听，要使用native属性：原生(组件监听原生事件)-->
      <backTop @click.native="backClick" v-show="isShow"></backTop>
  </div>
</template>

<script>
import homeSwiper from './homeComponents/homeSwiper';
import homeRecommendsView from './homeComponents/homeRecommensView';
import featureView from './homeComponents/featureView';

import NavBar from 'components/common/navbar/navBar';
import tabControl from 'components/content/tabControl/tabControl'
import goodsList from 'components/content/goods/goodsList'
import Scroll from 'components/common/scroll/Scroll'
import backTop from 'components/content/backTop/backTop'

import {getHomeMultidata, getHomeGoods} from 'network/home';

export default {
  name: 'Home',
  components: {
    NavBar,
    homeSwiper,
    homeRecommendsView,
    featureView,
    tabControl,
    goodsList,
    Scroll,
    backTop
  },
  data() {
    return {
      banners: null,
      recommends: null,
      title: ['流行','新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      list: [],
      currentType: 'pop',
      isShow: false
    }
  },
  created() {
    //1.请求多个数据：异步操作
    this.getHomeMultidata();
    
    //2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

    //监听item中图片加载完成
    // this.$bus.$on('itemImageLoad', () => {
    //   this.$refs.scroll.refresh();
    // } )
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    },
    /**
   * 事件监听相关的方法
   */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
    backClick() {
      //拿到组件对象，拿到对象就可以直接拿到对象里面的属性
      //scrollTo(x,y,回到（x,y）的时间); x,y要回到的坐标
      //再进过Scroll对象内部的封装
      this.$refs.scroll.scrollTo(0,0,500);
    },
    contentScroll(position) {
      if((-position.y) > 1000) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
}
</script>

<style scoped>
#home{
  /* padding-top: 44px; */
  /**vh:view height:视口高度 */
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;

  /**固定头部 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.swiper-style{
  width: 100%;
  height: 150px;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 10;
}
/**给BScroll设置固定高度的方法二 */
.content{
  /* height: 300px; */
  overflow: hidden;

  position:absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/**给BScroll设置固定高度的方法一 */
/* .content{
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
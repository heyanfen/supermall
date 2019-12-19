<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <tabControl :titles="title" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabFixed"></tabControl>
      <Scroll class="content" ref="scroll"
       :probe-type="3"
        @Uscroll="contentScroll"
        :pull-up-load="true"
        @pullingUp = "loadMore">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
        <homeRecommendsView :recommends="recommends"></homeRecommendsView>
        <featureView></featureView>
        <tabControl :titles="title" @tabClick="tabClick" ref="tabControl2"></tabControl>
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
import {debounce} from 'common/utils'

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
      isShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  created() {
    //1.请求多个数据：异步操作
    this.getHomeMultidata();
    
    //2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    //监听item中图片加载完成, 在mounted里面是为了保证this.$refs.scroll已经完成了挂载
    //封装一个函数，进行防抖
    const refresh = debounce(this.$refs.scroll.refresh,500);

    this.$bus.$on('itemImageLoad', () => {
      refresh();
    })

    //2.获取tabControl的offsetTop
    //所有的组件都有一个属性$el:这个属性用于获取组件中的元素，但是图片加载慢，对这个长度有影响，所以这个放在swiperImageLoad方法里改变
    // this.tabOffsetTop = this.$refs.tabControl;

    //undefined：所以组件是没有offsetTop属性的
    //console.log(this.$refs.tabControl.$el.offsetTop);
    
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  //销毁时调用的函数:是在没有keep-alive时
  destroyed() {
    console.log('home destroyed');
    
  },
  //活跃路由
  activated() {
    console.log('home activated');
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh();
  },
  //不活跃时调用：离开时调用
  deactivated() {
    console.log('home deactivated ');
    this.saveY = this.$refs.scroll.getScrollY();
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

        //完成了上拉加载更多
        this.$refs.scroll.finishPullUp();
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      //拿到组件对象，拿到对象就可以直接拿到对象里面的属性
      //scrollTo(x,y,回到（x,y）的时间); x,y要回到的坐标
      //再进过Scroll对象内部的封装
      this.$refs.scroll.scrollTo(0,0,500);
    },
    contentScroll(position) {
      //1.判断backTop是否显示
      if((-position.y) > 1000) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }

      //2.决定tabControl是否吸顶（position:fixed）
      this.isTabFixed = (-position.y) > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      console.log(this.$refs.tabControl2.$el.offsetTop);
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

  /**固定头部: 在使用js原生滚动时才有用 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.swiper-style{
  width: 100%;
  height: 150px;
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
.tab-control{
  position: relative;
  z-index: 9; /**只对有定位的元素有效果 */
}
</style>
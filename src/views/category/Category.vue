<template>
<!--1.ref绑定到子组件上,拿到就是组件对象 2.ref可以绑定在普通元素上(div)拿到的就是元素对象-->
  <div>
      <h2>开发中.......</h2>
  </div>
</template>

<script>
import BScroll from "better-scroll"
// import BScroll from 'better-scroll'
export default {
  name: 'Category',
  data() {
    return {
      scroll: null
    }
  },
  //created生命周期是在组件创建完调用，此时还没有DOM
  mounted() {
    // this.scroll = new BScroll(this.$refs.wrapper, {
    //   probeType: 3,
    //   pullUpLoad: true
    // })
    // this.scroll.on('scroll', (position) => {
    //   // console.log(position);
      
    // })
    // this.scroll.on('pullingUp', () => {
    //   console.log('上拉加载更多');
      
    // })
  },
  methods: {
    btnClick() {
      console.log('按钮');
      
    }
  }
}
</script>

<style scoped>
.wrapper{
  height: 150px; /**必须有确定的高度 */
  background-color: red;

  /* overflow: hidden; */
  /* overflow-y: scroll;*设置成y轴滚动时就默认超出部分隐藏了 */
}
h2{
  text-align: center;
  margin: 100px;
}
</style>
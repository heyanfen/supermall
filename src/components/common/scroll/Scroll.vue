<!--
 * @Author: your name
 * @Date: 2019-12-12 23:49:13
 * @LastEditTime: 2019-12-15 23:04:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\supermall\src\components\common\scroll\Scroll.vue
 -->
<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Scroll',
    props:{
        probeType: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        //1.创建scroll对象
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })

        //2.监听滚动位置
        this.scroll.on('scroll', (position) => {
            this.$emit('Uscroll',position);
        })
    },
    methods: {
        scrollTo(x, y, time=300) {
            this.scroll.scrollTo(x, y, time);
        },
        finishPullUp() {
            this.scroll.finishPullUp();
        },
        refresh() {
            this.scroll.refresh();
        }
    }
}
</script>

<style>

</style>
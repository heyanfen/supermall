<!--
 * @Author: your name
 * @Date: 2019-11-24 21:45:29
 * @LastEditTime: 2019-11-26 14:02:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\tabbarv2\src\components\tabbar\TabBarItem.vue
 -->
<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- <slot v-if="!isActive" name="item-icon"></slot>不直接写，怕插槽替换的时候将v-if也替换掉没了 -->
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item_text"></slot></div>
        <!--如下面所写，图片和文字是固定的，但是我们现在不想要固定的，所以用插槽：slot-->
        <!-- <img src="../../assets/img/tabBar/svg_home.svg" alt="">
       <div>首页</div> -->
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type:String,
            default: 'red'
        }
    },
    data() {
        return{
            //isActive: true
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods: {
        itemClick() {
            this.$router.push(this.path);
        }
    }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;/**去掉图片的默认3px:图片底部有默认的3px */
    margin-bottom: 2px;
}
</style>
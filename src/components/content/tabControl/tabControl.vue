<!--
 * @Author: heyanfen
 * @Date: 2019-12-09 21:09:32
 * @LastEditTime: 2019-12-11 15:35:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\supermall\src\components\content\tabControl\tabControl.vue
 -->
<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" :key="index" 
            @click="textclick(index)"
            class="tab-control-item" :class="{active: index === currentIndex}">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: "TabControl",
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        textclick(index) {
            this.currentIndex = index;
            this.$emit('tabClick',index);
        }
    }
}
</script>

<style>
.tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
}
.tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
}
.tab-control-item span {
    padding: 5px;
}
.active {
    color: var(--color-high-text);
    
}
.active span {
    border-bottom: 3px solid  var(--color-high-text);
}
</style>
<template>
  <div>
      <navBar>
          <div slot="left" class="back" @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="title">
              <div v-for="(item, index) in titles" 
              :key="index" 
              class="item-style"
              :class="{active: index === currentIndex}"
              @click="titleClick(index)">
              {{item}}
            </div>
          </div>
      </navBar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar'
export default {
    name: 'DetailNavBar',
    components: {
        navBar
    },
    data() {
        return {
            titles: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    methods: {
        titleClick(index) {
            this.currentIndex = index;
            this.$emit('titleClick', index);
        },
        backClick() {
            this.$router.back();
        }
    }
}
</script>

<style scoped>
.title {
    display: flex;
    font-size: 13px;
}
.item-style {
    flex: 1;
}
.active {
    color: var(--color-high-text);
}
.back img {
    margin-top: 12px;
}
</style>
<!--
 * @Author: your name
 * @Date: 2019-11-25 15:32:12
 * @LastEditTime : 2019-12-31 14:50:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\tabbarv2\src\views\profile\profile.vue
 -->
<template>
  <div>
      <Scroll class="content">
        <div calss="top" @click="backClick">
             <img src="~assets/img/profile/top.png" alt="error">
        </div>

        <div calss="header" @click="backClick">
             <img src="~assets/img/profile/head.png" alt="error">
        </div>

        <div class="navigator">
            <div>我的订单</div>
            <div>我的钱包</div>
            <div>优惠特权</div>
            <div>地址管理</div>
            <div>安全设置</div>
            <div>维权管理</div>
            <div>账号设置</div>
         </div>
        <div class="Incenter">
                <div class="In">
                  <div class="In1">
                    <img src="~assets/img/profile/xiangqing.png" alt="error">
                  </div>
                   <div class="In2">
                    <img src="~assets/img/profile/xiangqing1.png" alt="error">
                   </div>
                </div>
         </div>

         <div class="footer">
            <img src="~assets/img/profile/footer.png" alt="error">
         </div>

      </Scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
  name: 'profile',
  components: {
   
    Scroll
  }
}
</script>

<style scoped>
.content{
  height: 100vh;
  overflow: hidden;
}

.top {
  width: 100%;
  height: 36px;
  overflow: hidden;
  padding-top: 0%;
}
.content .top img{
  width: 100vh;
  height: 100vh;
  overflow:auto;
}


.content .header {
  width: 100%;
  height: 105px;
  overflow: hidden;
  padding-top: 0%;
}
.navigator{
  width: 80%;
  height: 49px;
  display: flex;
  justify-content:space-between;
  align-items: center;

  margin: 0 auto;
}
.content .navigator span{
  cursor: pointer;
  /* margin-right: 240px; */
  padding: 0px 0px 0px;
}

.content .Incenter{
  height: 648px;
  width: 100%;
  /* background-color: #000; */
}

.content .Incenter .In{
  height: 632px;
  width: 917px;
  /* background-color: #0f0; */
  margin-left: 500px;
  overflow: hidden;
    box-shadow: 100px;
}
.content .Incenter .In .In1{
  margin-left: 0px;
   float: left;
  overflow: hidden;
}

.content .Incenter .In .In2{
  width: 772px;
  margin-right: 0px;
  float: right;
  overflow: hidden;
}
</style>
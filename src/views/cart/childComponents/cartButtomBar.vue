<template>
  <div class="buttom-bar">
    <div class="check-content">
      <checkButtom @click.native="checkClick" class="check-buttom" :is-checked="isSelectAll"></checkButtom>
      <span>全选</span>
    </div>

    <div class="total-style">
      合计:{{totalPrice}}
    </div>

    <div class="calculate">
      去计算：({{calculated}})
    </div>
  </div>
</template>

<script>
import checkButtom from 'components/content/checkbuttom/checkButtom'
import { mapGetters } from 'vuex'
export default {
    name: 'CartButtomBar',
    components: {
        checkButtom
    },
    methods: {
        /**全选按钮 */
        checkClick() {
          if(this.isSelectAll){ //全部选中
              this.cartList.forEach(item => item.checked = false);
          } else {
            this.cartList.forEach(item => item.checked = true);
          }
        }
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked;
        }).reduce((preValue,item) => {
          return preValue + item.price * item.count
        },0).toFixed(2);
      },
      calculated() {
        //法一：
        // return this.$store.getters.cartLength;
        //法二：
        return this.cartList.filter(item => item.checked).length;
      },
      isSelectAll() {
        /**法一：先找一下数组里面有没有没被选中的取出没被选中的的数组的长度，再取反 */
        // return !this.cartList.filter(item => !item.checked).length

        /**法二：find函数：找到一个就返回,性能高一些 */
        if(this.cartList.length === 0) 
          return false;
          return !this.cartList.find(item => !item.checked)
      }
    }
}
</script>

<style scoped>
.buttom-bar{
  position: relative;
  display: flex;

  height: 40px;
  line-height: 40px;

  background-color: #eee;
  font-size: 14px;
}
.check-content{
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-buttom{
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.total-style{
  margin-left: 20px;
  flex: 1;
}
.calculate{
  width: 90px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>
/*
 * @Author: heyanfen
 * @Date: 2019-12-07 20:28:15
 * @LastEditTime: 2019-12-15 23:02:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router\supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//Vue实例作为我们的事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

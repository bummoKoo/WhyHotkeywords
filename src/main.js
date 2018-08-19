import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/index.js'

Vue.use(VueRouter)

new Vue({
  router, // 이 부분을 추가합니다.
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app') // 이 부분도요

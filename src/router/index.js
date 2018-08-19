import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// Components 추가
import Home from '../components/Home.vue'
import NaverKeywords from '../components/NaverKeywords.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/naverKeywords',
      name: 'NaverKeywords',
      component: NaverKeywords
    }
  ]
});

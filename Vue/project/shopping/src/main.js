import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'
import setAxios from './setAxios.js'
setAxios()
Vue.config.productionTip = false
Vue.prototype.$http = axios
//路由守卫
router.beforeEach((to, from, next) => {
  /*
    1. 无论是刷新还是跳转路由，此钩子函数必然会执行
    2. 刷新会导致vuex中的值丢失，顾先从本地存储获取token后设置给vuex
  */
  store.commit('setToken', localStorage.getItem('token'))
  if(to.meta.requireAuth){
    if(store.state.token){
      next()
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

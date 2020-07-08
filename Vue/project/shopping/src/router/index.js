import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    redirect:'/login' //重定向
  },{
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Login.vue')
  },{
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },{
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path:'',
        name:'Index',
        redirect:'main'
      },
      {
        path: 'main',
        name: 'Main',
        component: () => import('../views/Main.vue')
      },
      {
        path: 'lists',
        name: 'Lists',
        component: () => import('../views/Lists.vue')
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('../views/Search.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        meta:{
          requireAuth:true //需要登录后才能进入
        },
        component: () => import('../views/Cart.vue')
      },
      {
        path: 'mine',
        name: 'Mine',
        meta:{
          requireAuth:true //需要登录后才能进入
        },
        component: () => import('../views/Mine.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    redirect:'/login' //重定向
  },{
    path: '/register',
    name: 'register',
    component:Register
  },{
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/footer',
    name: 'Footer',
    component: () => import('../views/Footer.vue'),
    children:[
      {
        path:'',
        name:'Home',
        redirect:'index'
      },
      {
        path: 'index',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'lists',
        name: 'Index',
        component: () => import('../views/Lists.vue')
      },
      {
        path: 'search',
        name: 'Index',
        component: () => import('../views/Search.vue')
      },
      {
        path: 'cart',
        name: 'Index',
        component: () => import('../views/Cart.vue')
      },
      {
        path: 'mine',
        name: 'Index',
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

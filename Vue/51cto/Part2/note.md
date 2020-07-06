# Vue实战

## vue全家桶所用到的技术栈

	1. 项目构建脚手架vue-cli
	
		安装：npm install -g @vue/cli
		
		安装webpack：npm install -g webpack 
	
	2. 路由vue-router
	
	3. 状态管理vuex
	
	4. http请求功能axios
	
## anxios

- 安装：npm install anxios

使用：main.js

```javascript
	import axios from 'axios'
	Vue.prototype.$http = axios
```

- 拦截器

```javascript
	import axios from 'axios'
	import store from './store'
	import router from './router'
	//http全局拦截
	//token要放在我们请求的header上面带回去给后端
	export default function setAxios(){
		//请求拦截
		axios.interceptors.request.use(
			config => {
				if(store.state.token)
					config.headers.token = store.state.token
				return config
			}
		)
		//每次带有返回值的请求，都要先经过这个拦截器
		axios.interceptors.response.use(
			response => {
				if(response.status == 200){
					const data = response.data
					if(data.code == -1){
						//登录超时,需重新登录
						//清空vuex的token和localStorage的token
						store.commit('token', '')
						localStorage.removeItem('token')
						//跳转到login
						router.replace({path:'/login'})
					}
					return data
				}
				return response
			}
		)
	}
```

## vuex存储

	文件路径：src/store/index.js
	
	存储token：

```javascript
	import Vue from 'vue'
	import Vuex from 'vuex'

	Vue.use(Vuex)

	export default new Vuex.Store({
	  state: {
		token:''
	  },
	  mutations: {
		//设置vuex的token
		setToken(state, token){
		  state.token = token
		}
	  },
	  actions: {
	  },
	  modules: {
	  }
	})

```

## 开发经验

1. 导入的组件必须使用，否则编译失败

2. 组件导入使用驼峰命名，对应标签用“-”分开，否则编译失败

```
	//导入
	import DataTabel from "./DataTabel.vue"
	//使用
	<data-tabel :tableData="tableData"></data-tabel>
```

3. 嵌套路由的path不要再加“/”,否则路由无法找到

```javascript
	{
		path: '/footer',
		name: 'Footer',
		component: () => import('../views/Footer.vue'),
		children:[
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
```
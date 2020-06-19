# Vue

## Vue路由跳转原理

	单页面应用的路由模式有两种
	
	1. 哈希模式（利用hashchange事件监听url的hash的改变）
	
	2. history模式（使用此模式需要后台配合把接口都打到我们打包后的index.html上）
	
	一般采用哈希模式执行跳转
	
```html
	window.addEventListener('hashchange', function(e){
	
	})
```
	核心：锚点值的改变，我们监听的锚点值改变了就去局部改变页面的数据，不做跳转。
	
```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 11 路由跳转原理</title>
		</head>
		<body>
			<div id = "app"></div>
			<a href = "#/login">Login</a>
			<a href = "#/register">Register</a>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript">		
			var app = document.getElementById('app')
			window.addEventListener('hashchange', function(e){
				console.log(location.hash)
				switch(location.hash){
					case "#/login":
						app.innerHTML= "To the Login Page"
						break
					case "#/register":
						app.innerHTML = "To the Register Page"
						break
				}
			})
		</script>
	</html>
```
## 安装使用路由

	路由是以插件的形式引入到vue项目中
	
	vue-router是vue的核心插件
	
	1. 下载：npm i vue-router -S
	
	2. 安装插件：Vue.use(VueRouter)
	
	3. 创建路由对象：var router = new VueRouter()
	
	4. 配置路由规则：router.addRoutes([路由对象])
		
		- 路由对象：{path:'锚点值',component:要显示的组件}
	
	5. 将配置好的路由对象交给Vue
	
		在options中传递：key为router
		
	6. 留坑（使用组件）：<router-view></router-view>
	
```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 12 路由跳转</title>
		</head>
		<body>
			<div id = "app"></div>
			<a href = "#/login">Login</a>
			<a href = "#/register">Register</a>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript" src = "vue-router.js"></script>
		<script type = "text/javascript">	
			var Login = {
				template:`
					<div>The Login page</div>
				`
			}
			var Register = {
				template:`
					<div>The Register page</div>
				`
			}
			//安装路由插件
			Vue.use(VueRouter);
			//创建路由对象
			var router = new VueRouter({
				routes:[
					{path:'/login',name:'login',component:Login},
					{path:'/register',name:'register',component:Register},
				]
			});
			new Vue({
				el:"#app",
				router,
				template:`
					<div>						
						<router-view></router-view>				
					</div>
				`,			
				data(){
					return {
						
					}
				}
			})
		</script>
	</html>
```
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

## 路由跳转

	跳转方式：
	
	1. 通过标签：<router-link to = "/login"><router-link>
	
	2. 通过js跳转：this.$router.push({path:'/login'})
	
	区别：
	
	this.$router.push()跳转到指定的url，会向history插入一条记录
	
	this.$router.replace()同样是跳转到指定的url，但是这个方法不会向history里插入记录，点击返回，会跳转到上上个页面，上一个记录是不存在的
	
	this.$router.go(-1)常用来返回，读取history里面的记录后退一个
	
	vue-router中的对象：
	
	- $route路由信息对象，只读对象
	
	- $router路由操作对象，只写对象
	
```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 13 路由跳转</title>
		</head>
		<body>		
			HTML link : <a href = "#/login">Login</a>
			<a href = "#/register">Register</a>
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript" src = "vue-router.js"></script>
		<script type = "text/javascript">	
			var Login = {
				template:`
					<div style = 'color:red'>The Login page</div>
				`
			}
			var Register = {
				template:`
					<div style = 'color:green'>The Register page</div>
				`
			}
			var Shopping = {
				template:`
					<div style = 'color:green'>The Shopping page</div>
				`
			}
			//安装路由插件
			Vue.use(VueRouter);
			//创建路由对象
			var rs = new VueRouter({
				routes:[
					{path:'/login',name:'login',component:Login},
					{path:'/register',name:'register',component:Register},
					{path:'/shopping',name:'shopping',component:Shopping}
				]
			});
			new Vue({
				el:"#app",
				router:rs,//指定路由
				template:`
					<div>						
						<!-- 标签跳转 -->		
						Router link : <router-link to = "/login">Go to Login</router-link>
						<router-link to = "/register">Go to Register</router-link>	<br>				
						Router JS : 
						<button @click = "toLogin">To Login</button>
						<button @click = "toRegister">To Register</button>
						<button @click = "toShopping">To Shopping</button>
						<button @click = "back">Back</button>
						<router-view></router-view>						
					</div>
				`,			
				data(){
					return {
						
					}
				},
				methods:{
					toLogin(){
						this.$router.push({path:'/login'})					
					},
					toRegister(){
						this.$router.push({path:'/register'})					
					},
					toShopping(){
						this.$router.replace({path:'shopping'})
					},
					back(){
						this.$router.go(-1)
					}
				}
			})
		</script>
	</html>
```

## 路由的传参和取值

	- 查询参
	
		1. 配置（传参）：:to = "{name:'login',query:{id:loginId}}"
		
		2. 获取（取参）：this.$route.query.id
	
	- 路由参数
	
		1. 配置（传参）：:to = "{name:'register',params:{id:registerId}}"
		
		2. 配置路由规则{name:'detail', path:'/detail/:id'}
		
		3. 获取：this.$route.params.id
		
	注：也可通过属性进行参数的获取，配置路由的时候，设置props为true即可
	
	总结：
		
		1. :to传参的属性里 params是和name配对的， query和name或者path都可以
		
		2. 使用路由参数必须要配置路由规则里面配置好的参数名，否则刷新页面参数会丢失
		
		注：js跳转路由传参和标签传参，路由相同而参数不同页面不刷新的问题
			  解决方案：<router-view :key = "$route.fullPath"></router-view>
		
```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 14 路由传参</title>
		</head>
		<body>		
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript" src = "vue-router.js"></script>
		<script type = "text/javascript">	
			var Login = {
				template:`
					<div style = 'color:red'>
						The Login page
						<span style = 'color:red'>Parameter from redirect : {{msg}}</span>
					</div>
				`,
				data(){
					return {
						msg:''
					}
				},
				created(){
					this.msg = this.$route.query.id
				}
			}
			var Register = {
				template:`
					<div style = 'color:green'>
						The Register page
						<span style = 'color:green'>Parameter from redirect : {{name}}</span>
					</div>
				`,
				data(){
					return {
						name:''
					}
				},
				created(){
					this.name = this.$route.params.name
				}
			}
			var Shopping = {
				template:`
					<div style = 'color:blue'>
						The Shopping page
						<span style = 'color:blue'>Thing to buy : {{good}}</span>
					</div>
				`,
				props:[
					'good'
				]
			}
			var Chart = {
				template:`
					<div style = 'color:black'>
						The Chart page
						<span style = 'color:red'>Chart list : {{list}}</span>
					</div>
				`,
				props:[
					'list'
				]
			}
			var Buy = {
				template:`
					<div>
						The Buy page
						<span style = 'color:#38a'>Buy list : {{bought}}</span>
					</div>
				`,
				data(){
					return {
						bought:''
					}
				},
				created(){
					this.bought = this.$route.query.bought
				}
			}
			//安装路由插件
			Vue.use(VueRouter);
			//创建路由对象
			var rs = new VueRouter({
				routes:[
					{path:'/login',name:'login',component:Login},
					{path:'/register/:name',name:'register',component:Register},
					//通过属性接收路由参数[props设为true]
					{path:'/shopping/:good',name:'shopping',props:true,component:Shopping},
					{path:'/chart/:list',name:'chart',props:true,component:Chart},
					{path:'/buy/:bought',name:'buy',props:true,component:Buy}
				]
			});
			new Vue({
				el:"#app",
				router:rs,//指定路由
				template:`
					<div>						
						<!-- 标签跳转 -->		
						Router link : <router-link :to = "{name:'login',query:{id:'abcd'}}">Go to Login</router-link>
						<router-link :to = "{name:'register',params:{name:'Harry'}}">Go to Register</router-link>
						<router-link :to = "{name:'shopping',params:{good:'iPhoneSE2'}}">Go to Shopping</router-link><br>				
						Router JS : 					
						<button @click = "toChart">To Chart</button>
						<button @click = "toBuy">To Buy</button>
						<button @click = "toLogin">To Login</button>
						<button @click = "back">Back</button>
						<router-view :key = "$route.fullPath"></router-view>						
					</div>
				`,			
				data(){
					return {
						
					}
				},
				methods:{			
					toChart(){
						/*由于动态路由也是传递params的，所以在 this.$router.push() 方法中 path不能和params一起使用，
						否则params将无效。需要用name来指定页面。*/
						this.$router.push({name:'chart',params:{list:'ChatListIs...'}})
					},
					toBuy(){
						this.$router.push({name:'buy',query:{bought:'Apples'}})
					},
					toLogin(){
						//js跳转路由传参和标签传参，路由相同而参数不同页面不刷新的问题
						//解决方案：<router-view :key = "$route.fullPath"></router-view>
						this.$router.push({name:'login',query:{id:'efgh'}})
					},
					back(){
						this.$router.go(-1)
					}
				}
			})
		</script>
	</html>
```

## 嵌套路由

	1. router-view的细分
	
		router-view包含一个router-view
		
	2. 每个坑都对应一个组件
	
	3. 路由配置

```html
	routes:[
		{
			path:"/nav",
			name:"nav",
			component:Nav,
			//路由嵌套增加此属性
			children:[
				//配置嵌套的子路由
			]
		}
	]
```

```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 15 路由嵌套</title>
		</head>
		<body>		
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript" src = "vue-router.js"></script>
		<script type = "text/javascript">	
			var Nav = {
				template:`
					<div>							
						<router-link :to = "{name:'nav.index'}">Home</router-link>			|
						<router-link :to = "{name:'nav.login'}">Login</router-link>			|
						<router-link :to = "{name:'nav.personal'}">Personal</router-link>			|
						<router-link :to = "{name:'nav.mine'}">Mine</router-link>			
						<router-view></router-view>
					</div>
				`
			}
			var Index = {
				template:`
					<div>
						<h1>Home Page</h1>
					</div>
				`
			}
			var Login = {
				template:`
					<div>
						<h2>Login Page</h2>
					</div>
				`
			}
			var Personal = {
				template:`
					<div>
						<h2>Personal Page</h2>
					</div>
				`
			}
			var Mine = {
				template:`
					<div>
						<h2>My Page</h2>
					</div>
				`
			}
			//安装路由插件
			Vue.use(VueRouter);
			//创建路由对象
			var rs = new VueRouter({
				routes:[
					{
						path:'/nav',
						name:'nav',
						component:Nav,
						children:[
							//嵌套路由
							{path:'',redirect:'/nav/index'},//子路径为空是，默认显示主页
							{path:'index',name:'nav.index',component:Index},
							{path:'login',name:'nav.login',component:Login},
							{path:'personal',name:'nav.personal',component:Personal},
							{path:'mine',name:'nav.mine',component:Mine}
						]
					}
				]
			});
			new Vue({
				el:"#app",
				router:rs,//指定路由
				template:`
					<div>						
							<router-view></router-view>
					</div>
				`,			
				data(){
					return {
						
					}
				},
				methods:{			
					
				}
			})
		</script>
	</html>
```

## 路由守卫

	路由守卫主要是检查一下是否登录，没有登录就跳转到登录页面，但是现在这种处理方式主要通过请求的全局拦截来做。
	
```javascript
	const router = new VueRouter(
		{...}
	)
	
	router.beforeEach((to, from, next) =>{
		// ...
	})
	
	router.afterEach((to, from) => {
		// ...
	})
```

```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 16 路由守卫</title>
		</head>
		<body>		
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript" src = "vue-router.js"></script>
		<script type = "text/javascript">	
			var Nav = {
				template:`
					<div>							
						<router-link :to = "{name:'nav.index'}">Home</router-link>			|
						<router-link :to = "{name:'nav.login'}">Login</router-link>			|
						<router-link :to = "{name:'nav.personal'}">Personal</router-link>			|
						<router-link :to = "{name:'nav.mine'}">Mine</router-link>			
						<router-view></router-view>
					</div>
				`
			}
			var Index = {
				template:`
					<div>
						<h1>Home Page</h1>
					</div>
				`
			}
			var Login = {
				template:`
					<div>
						<h2>Login Page</h2>
					</div>
				`
			}
			var Personal = {
				template:`
					<div>
						<h2>Personal Page</h2>
					</div>
				`
			}
			var Mine = {
				template:`
					<div>
						<h2>My Page</h2>
					</div>
				`
			}
			//安装路由插件
			Vue.use(VueRouter);
			//创建路由对象
			var router = new VueRouter({
				routes:[
					{
						path:'/nav',
						name:'nav',
						component:Nav,
						children:[
							//嵌套路由						
							{path:'',redirect:'/nav/index'},//子路径为空是，默认显示主页
							{path:'index',name:'nav.index',component:Index},
							{path:'login',name:'nav.login',component:Login},
							{path:'personal',name:'nav.personal',component:Personal},
							{path:'mine',name:'nav.mine',component:Mine}
						]
					}
				]
			});
			new Vue({
				el:"#app",
				router:router,//指定路由
				template:`
					<div>						
							<router-view></router-view>
					</div>
				`,			
				data(){
					return {
						
					}
				},
				methods:{			
					
				},
				mounted(){
					router.beforeEach((to, from, next)=>{
						console.log(to)
						if(to.path == "/nav/index"){
							next()
						}else{
							setTimeout(function(){
								next()
							},2000)
						}
					})
				}
			})
		</script>
	</html>
```
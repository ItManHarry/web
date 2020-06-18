# Vue

## 组件化开发

	1. 创建组件的两种方式
	
		1.1. 局部声明
		
```html
	var header = {template:'templateName',data:function(){...},methods:{...},components:child components}
```
		
		1.2. 全局声明
		
```html
	Vue.component('组件名',组件对象)
```

	2. 组件类型
	
		2.1. 通用组件（例如表单、弹窗、布局等）
		
		2.2. 业务组件（抽奖、机器分类）
		
		2.3. 页面组件（单页面开发的每个页面都是一个组件，只完成功能，不复用）
		
	3. 开发三步：声明、注册、使用
	
```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 6 组件化开发</title>
		</head>
		<body>
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript">		
			//以下是语法糖方式创建
			var MyHeader = {
				template:`
					<div><h1>组件化开发</h1></div>
				`
			}
			var MyBody = {
				template:`
					<div><h3>I am Body ...</h3></div>
				`
			}
			//Vue扩展创建
			var MyFooter = Vue.extend({
				template:`
					<div><h3>I am Footer ...</h3></div>
				`
			})
			//全局组件 - 可直接使用
			Vue.component('MyNav',{
					template:`
						<div><h3>I am Nav ...</h3></div>
					`
			})
			new Vue({
				el:"#app",
				components:{
					MyHeader, MyBody,MyFooter
				},
				template:`
					<div>
						<my-header></my-header>					
						<my-body></my-body>
						<my-nav></my-nav>
						<my-footer></my-footer>
					</div>
				`,			
				data:function(){
					return {
						
					}
				}
			})
		</script>
	</html>
```

## slot插槽和ref、$parent

	1. slot插槽
	
		1.1. slot就是子组件里给DOM留下的坑位
		
		1.2. <子组件>DOM</子组件>
		
		1.3. slot是动态的DOM
		
	2. ref获取子组件实例
	
		2.1. 识别：在子组件或元素上使用属性ref="xxx"
		
		2.2. 获取：this.$refs.xxx
		
		2.3. $el是拿其DOM
		
	3. $parent获取父组件实例（可在子组件直接使用this.$parent即可）
	
```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 7 slot插槽和ref、$parent</title>
		</head>
		<body>
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript">		
			var Child = {
				template:`
					<div>I am child component</div>
				`,
				data(){
					return {
						name:"Harry"
					}
				},
				created(){
					console.log("Parent data msg value is : "+this.$parent.msg)
				}
			}
			var  Parent = {
				template:`
					<div>
						I am parent component
						<slot name = 'hello'></slot>
						<child ref = "cc"></child>
					</div>
				`,
				data(){
					return {
						msg:"I am Parent "
					}
				},
				components:{
					Child
				},
				mounted(){
					console.log("Child data name value is : "+this.$refs.cc.name)
				}
			}		
			new Vue({
				el:"#app",
				components:{
					Parent
				},
				template:`
					<div>
						<parent>
							<div slot = "hello">I am slot content</div>
						</parent>										
					</div>
				`,			
				data:function(){
					return {
						
					}
				}
			})
		</script>
	</html>
```

## 父子组件通信

	1. 父传子
	
		1.1. 父传子的时候通过属性传递
		
		1.2. 子要声明props:['"属性名"]来接收
		
		1.3. 收到就是自己的，可以随意使用
		
			- 在template可以直接使用
			
			- 在js中this.属性名
	
	2. 子传父
	
		2.1. 子组件通过$emit('自定义事件名',val1,val2...)触发
		
		2.2. 父组件@自定义事件名=“事件名”进行监听
		
		2.3. 子组件方法里：this.$emit('sendParent',val1,val2)触发自定义事件
				父组件里：<child @sendParent='myMethod'></child>
		
```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 8 父子组件通信</title>
		</head>
		<body>
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript">		
			var Child = {
				template:`
					<div>I am child component, Value from Parent : {{propertyOfParent}}<br><button @click = "sendMsgToParent">Git message to Parent</button></div>
				`,
				data(){
					return {
						name:"Harry"
					}
				},
				props:[
					'propertyOfParent'
				],
				methods:{
					sendMsgToParent(){
						this.$emit('childValue', 'DataFromChild1','DataFromChild2')
					}
				},
				created(){
					console.log("Parent data msg value is : "+this.$parent.msg + "; Property from parent is : " + this.propertyOfParent)
				}
			}
			var  Parent = {
				template:`
					<div>
						I am parent component
						<slot name = 'hello'></slot>
						<child ref = "cc" propertyOfParent = "ParentCompentValue" @childValue = "reverseTheValue"></child>
					</div>
				`,
				data(){
					return {
						msg:"I am Parent ",
						v1:'',
						v2:''
					}
				},
				components:{
					Child
				},
				methods:{
					reverseTheValue(val1, val2){
						alert("Value 1 : " + val1 + ", value 2 : " + val2)
						this.v1 = val1;
						this.v2 = val2;
						console.log("Data from child value1 is : " + this.v1 + ", value 2 : " + this.v2)
					}
				},
				mounted(){
					console.log("Child data name value is : "+this.$refs.cc.name)				
				}
			}		
			new Vue({
				el:"#app",
				components:{
					Parent
				},
				template:`
					<div>
						<parent>
							<div slot = "hello">I am slot content</div>
						</parent>										
					</div>
				`,			
				data:function(){
					return {
						
					}
				}
			})
		</script>
	</html>
```

## 非父子组件通信

- 创建一个空实例(bus中央事件总线也可以叫做中间组件)

- 利用$emit $on的触发和监听事件实现非父子组件的通信

```html
	Vue.prototype.$bus = new Vue()					//在vue上面挂载一个$bus作为中央处理组件
	this.$bus.$emit('自定义事件名','传递数据')		//触发自定义事件传递数据
	this.$bus.$on('自定义事件名', fn)					//监听自定义事件获取数据
```

	解决方案还有vuex、provide/inject是解决同根往下派发，本地存储也可以进行非父子组件之间的通信
	
```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 9 非父子组件通信</title>
		</head>
		<body>
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript">		
			Vue.prototype.$bus = new Vue();	//中央处理组件
			var Child1 = {
				template:`
					<div>
						<h2>I am child component 1 of  Parent 1</h2>
						<h3>Data From Parent2's child3 : <span style = 'color:red'>{{child3Val}}</span></h3>
					</div>
				`,
				data(){
					return {
						childName1:"Child1",
						child3Val:''
					}
				},
				methods:{
					
				},
				created(){
					var self = this
					self.$bus.$on('dataFromChild3', function(v){
						self.child3Val = v
					})
				}
			}
			var Child2 = {
				template:`
					<div>
						<h2>I am child component 2 of Parent 1</h2>
						<h3>Data From Parent2's child3 : <span style = 'color:red'>{{child3Val}}</span></h3>
						<button @click = "sendData(200,300)">Send data to other components</button>
					</div>
				`,
				data(){
					return {
						childName2:"Child2",
						child3Val:'',
						child4Val:''
					}
				},
				methods:{
					sendData(v1,v2){
						this.$bus.$emit('dataFromChild2',v1,v2)
					}
				},
				created(){
					this.$bus.$on('dataFromChild3', v=>{
						this.child3Val = v
					})
				}
			}
			var Child3 = {
				template:`
					<div>
						<h2>I am child component 1 of Parent 2</h2>
						<button @click = "sendData(100)">Send data to other components</button>
						<h3>Data From Parent1's child2  value 1 is : <span style = 'color:red'>{{child2Val1}}</span>, value 2 is :<span style = 'color:red'> {{child2Val2}}</span></h3>
					</div>
				`,
				data(){
					return {
						childName3:"Child3",
						child2Val1:'',
						child2Val2:''
					}
				},
				methods:{
					sendData(v){
						this.$bus.$emit('dataFromChild3', v)
					}
				},
				created(){
					this.$bus.$on('dataFromChild2', (v1, v2) =>{
						this.child2Val1 = v1
						this.child2Val2 = v2
					})
				}
			}
			var Child4 = {
				template:`
					<div>
						<h2>I am child component 2 of Parent 2</h2>
						<h3>Data From Parent1's child2  value 1 is : <span style = 'color:red'>{{child2Val1}}</span>, value 2 is : <span style = 'color:red'>{{child2Val2}}</span></h3>
					</div>
				`,
				data(){
					return {
						childName4:"Child4",
						child2Val1:'',
						child2Val2:''
					}
				},
				methods:{
					
				},
				created(){
					this.$bus.$on('dataFromChild2', (v1, v2) =>{
						this.child2Val1 = v1
						this.child2Val2 = v2
					})
				}
			}
			var  Parent1 = {
				template:`
					<div>
						I am parent component	 1				
						<child1 ref = "child1"></child1>
						<child2 ref = "child2"></child2>
					</div>
				`,
				data(){
					return {
						msg:"I am Parent1 ",
						v1:'',
						v2:''
					}
				},
				components:{
					Child1,Child2
				},
				methods:{
					
				},
				mounted(){
							
				}
			}		
			var  Parent2 = {
				template:`
					<div>
						I am parent component	 2			
						<child3 ref = "child3"></child3>
						<child4 ref = "child4"></child4>
					</div>
				`,
				data(){
					return {
						msg:"I am Parent2 ",
						v1:'',
						v2:''
					}
				},
				components:{
					Child3,Child4
				},
				methods:{
					
				},
				mounted(){
							
				}
			}		
			new Vue({
				el:"#app",
				components:{
					Parent1,Parent2
				},
				template:`
					<div>
						<parent1></parent1>			
						<hr>				
						<parent2></parent2>							
					</div>
				`,			
				data:function(){
					return {
						
					}
				}
			})
		</script>
	</html>
```

## Vue的生命周期

- 需要频繁的创建和销毁组件

	比如页面中部分内容显示与隐藏，但是使用的是v-if
	
- 组件缓存

	1. 内置组件中<keep-alive>
	
	2. 被其包裹的组件，在v-if=false的时候，不会销毁，而是停用
	
	3. v-if=true不会创建，而是激活
	
	4. 避免频繁创建组件对象的性能损耗
	
	5. 组件的激活和停用（组件必须包裹在keep-alive标签中）
	
		activated和deactivated
		
- 对比

	1. created和beforeCreate
	
		前者数据已初始化可以操作，后者数据未初始化，不可操作
		
	2. mounted和beforeMount
	
		前者dom初始化完毕，可以操作，后者dom未初始化，不可操作
		
	3. updated和beforeUpdate
	
		前者获取最终数据，后者可以二次修改
		
```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 10 Vue生命周期</title>
		</head>
		<body>
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript" src = "demo10.js"></script>
	</html>
	javascript(demo10.js)
	
	var Test = {
		template:`
			<div>
				<h2>Vue生命周期</h2>	
				<button @click = "msg+='1'">message + 1</button>
				<h3>{{msg}}</h3>
			</div>
		`,			
		data:function(){
			return {
				msg:"Hello Vue Test"
			}
		},
		//生命周期钩子函数
		beforeCreate(){
			//组件创建之前msg未初始化，所以是undefined
			console.log("Test组件创建之前msg值 : " + this.msg)
		},
		created(){
			//组件创建之后，msg可以正常使用了
			console.log("Test组件创建之后msg值 : " + this.msg)
		},
		beforeMount(){
			//DOM挂载前
			console.log("Test组件DOM挂载前 : " + document.body.innerHTML)
		},
		mounted(){
			//DOM挂载后
			console.log("Test组件DOM挂载后 : " + document.body.innerHTML)
		},
		beforeUpdate(){
			//数据更新前	
			console.log("数据msg更新前 : " + document.body.innerHTML)		
		},
		updated(){
			//数据更新后
			console.log("数据msg更新后 : " + document.body.innerHTML)				
		},
		beforeDestroy(){
			//组件销毁前	
			console.log("执行组件销毁" + document.body.innerHTML)		
		},
		destroyed(){
			//组件销毁后	
			console.log("组件已销毁" + document.body.innerHTML)	
		},
		deactivated(){
			//组件停用
			console.log("停用Test组件")
		},
		activated(){
			//组件启用
			console.log("启用Test组件")
		}
	}
	new Vue({
		el:"#app",
		components:{
			Test
		},
		template:`
			<div>
				<keep-alive><test ref = "test" v-if = "show"></test></keep-alive><br>
				<button @click="destroyTest">销毁组件Test	</button>		
			</div>
		`,			
		data:function(){
			return {
				msg:"Hello Vue",
				show:true
			}
		},
		methods:{
			destroyTest(){
				this.show = !this.show
			}
		},
		mounted(){
			console.log("Parent data msg is : " + this.msg + ", componet data msg is : " + this.$refs.test.msg)
		}
	})
```
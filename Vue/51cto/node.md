# Vue

## 引包、留坑、实例化、插值表达式

```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>First Demo</title>
		</head>
		<body>
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript">
			new Vue({
				el:"#app",
				template:`
					<div>
						<div>This is my template, {{msg}}</div>
						<span>Harry Port</span>
					</div>
				`,
				data:function(){
					return {
						msg:'Hello Vue'
					}
				}
			})
		</script>
</html>
```

	注：template option对应的div只能有一个主div不能多个并存
	
## 常用指令

	1. v-text
	
	2. v-html
	
	3. v-if
	
	4. v-else-if
	
	5. v-else
	
	6. v-show
	
	7. v-for
	
		7.1 数组: item, index
		
		7.2. 对象:value,key, index
		
```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 2 常用指令</title>
		</head>
		<body>
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript">
			new Vue({
				el:"#app",
				template:`
					<div>
						<div>This is my template, {{msg}}</div>
						<span v-text='txt'></span>
						<div v-html = 'html'></div>
						<div v-if = "show">You can see me!</div>
						<button v-if = "n == 1">Button1</button>
						<button v-else-if = "n == 2">Button2</button>
						<button v-else>Button3</button>	
						<span v-show = "show">Show me</span>
						<ul>
							<li v-for = "(item,index) in items">{{item}}-{{index}}</li>
						</ul>
						<ul>
							<li v-for = "(o,k,i) in obs">Key : {{k}}, value : {{o}}, index : {{i}}</li>
						</ul>
					</div>
				`,
				data:function(){
					return {
						msg:'Hello Vue',
						txt:'I am a Text',
						html:'<h2>I am a html</h2>',
						show:true,
						n:4,
						items:[1,2,3,4,5,6,7],
						obs:{
							name:'Harry',
							age:28,
							sex:'M'
						}
					}
				}
			})
		</script>
	</html>
```		

## 单双向数据及事件绑定

- 单项绑定 v-bind(属性)，简写：:(属性)

	1. 内存改变，影响页面
	2. 内存改变，会出发重新渲染
	
- 双向绑定v-model(属性),只作用于有value属性的元素

	1. input中的值改变，会影响内存的改变
	2. 内存改变，也会影响input的值
	
- 事件绑定：v-on(事件名)="表达式|函数名"，简写：@(事件名)="表达式|函数名"

```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 3 单双向数据及事件绑定</title>
		</head>
		<body>
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript">
			new Vue({
				el:"#app",
				template:`
					<div>
						<h2>单向数据绑定 : </h2>
						<input type = "text" :value = "txt"><br>
						<h2>双向数据绑定 : </h2>
						<input type = "text" v-model = "txt"><br>
						<h2>事件绑定 : </h2>
						<button @click = "txt='I have changed by the button'">Change Value</button>
						<button @click = "clickMe">Click Me</button>
					</div>
				`,
				data:function(){
					return {
						txt:"Hello Text"
					}
				},
				methods:{
					clickMe:function(){
						alert('You have clicked me!!!')
					}
				}
			})
		</script>
	</html>
```

## 过滤器

 1. 过滤器是把我们的数据进行处理后再显示
 
 2. 过滤器分为全局过滤器和组件内过滤器
 
	2.1. 全局过滤器：Vue.filter('过滤器名', 过滤方式fn)
	
	2.2. 组件内过滤器：filters:{'过滤器名', 过滤方式fn}
	
	2.3. {{msg | 过滤器名}}
	
```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 4 过滤器</title>
		</head>
		<body>
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript">
			//全局过滤器
			Vue.filter('reversal3',function(v,t){
				return t + v.split('').reverse().join('')
			})
			new Vue({
				el:"#app",
				template:`
					<div>
						Input ： <input type = "text" v-model = "instr"><br>
						Output: {{instr}}<br>
						Reverse Output1: {{instr|reversal1}}<br>
						{{instr|reversal2('Reverse Output2: ')}}<br>
						{{instr|reversal3('Reverse Output3: ')}}
					</div>
				`,
				data:function(){
					return {
						instr:''
					}
				},
				//组件内过滤器
				filters:{
					reversal1(v){
						return v.split('').reverse().join('')
					},
					reversal2(v,t){
						return t + v.split('').reverse().join('')
					}
				}
			})
		</script>
	</html>
```

## 监听watch和计算属性computed

```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Demo 5 监听&计算属性</title>
		</head>
		<body>
			<div id = "app"></div>
		</body>
		<script type = "text/javascript" src = "vue.js"></script>
		<script type = "text/javascript">		
			new Vue({
				el:"#app",
				template:`
					<div>
						普通监听：<input type = "text" v-model = "name"><br>
						深度监听：<input type = "text" v-model = "man.age"><br>
						计算属性：
						(<input type = "text" v-model = "n1"> + <input type = "text" v-model = "n2">) * <input type = "text" v-model = "n3">={{result}}
					</div>
				`,
				data:function(){
					return {
						name:'',
						man:{
							age:0						
						},
						n1:'',
						n2:'',
						n3:''
					}
				},
				//计算属性必须放于监听之前紧跟data属性
				computed: {
					result() {
					  return (Number(this.n1) + Number(this.n2)) * Number(this.n3)
					}
				},
				watch:{
					name(newValue, oldValue){
						alert('New Value : ' + newValue + ', Old value : ' + oldValue)
					},
					man:{
						handler(newVal, oldVal){
							if(newVal.age >= 35)
								alert('You are old ...')
						},
						deep:true	//开启深度监听
					}
				}			
			})
		</script>
	</html>
```

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
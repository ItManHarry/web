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
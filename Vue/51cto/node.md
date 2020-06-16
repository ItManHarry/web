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
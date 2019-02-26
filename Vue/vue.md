# Vue

## Vue web URL:https://cn.vuejs.org/

# Vue实例

- 创建实例

```
	var vm = new Vue({
	  // 选项
	})
```

- 数据与方法

	当一个 Vue 实例被创建时，它向Vue的响应式系统中加入了其data对象中能找到的所有的属性。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
	
```
	// 我们的数据对象
	var data = { a: 1 }

	// 该对象被加入到一个 Vue 实例中
	var vm = new Vue({
	  data: data
	})

	// 获得这个实例上的属性
	// 返回源数据中对应的字段
	vm.a == data.a // => true

	// 设置属性也会影响到原始数据
	vm.a = 2
	data.a // => 2

	// ……反之亦然
	data.a = 3
	vm.a // => 3
	
	//当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时 data 中存在的属性才是响应式的。也就是说如果你添加一个新的属性，比如：
	vm.b = 'hi'
	//那么对 b 的改动将不会触发任何视图的更新。如果你知道你会在晚些时候需要一个属性，但是一开始它为空或不存在，那么你仅需要设置一些初始值。比如：
	data: {
	  newTodoText: '',
	  visitCount: 0,
	  hideCompletedTodos: false,
	  todos: [],
	  error: null
	}
	//这里唯一的例外是使用 Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。
	var obj = {
	  foo: 'bar'
	}

	Object.freeze(obj)

	new Vue({
	  el: '#app',
	  data: obj
	})
	//除了数据属性，Vue 实例还暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来。例如：
	var data = { a: 1 }
	var vm = new Vue({
	  el: '#example',
	  data: data
	})

	vm.$data === data // => true
	vm.$el === document.getElementById('example') // => true

	// $watch 是一个实例方法
	vm.$watch('a', function (newValue, oldValue) {
	  // 这个回调将在 `vm.a` 改变后调用
	})
```	

- 实例生命周期钩子
	
	每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

	比如 created 钩子可以用来在一个实例被创建之后执行代码：

```
	new Vue({
	  data: {
		a: 1
	  },
	  created: function () {
		// `this` 指向 vm 实例
		console.log('a is: ' + this.a)
	  }
	})
	// => "a is: 1"
```

- 生命周期图示

![生命周期](https://github.com/ItManHarry/web/blob/master/Vue/lifecycle.png)


# 模板语法

- 文本

	数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
	
```
	<span>Message: {{ msg }}</span>
```
	Mustache 标签将会被替代为对应数据对象上 msg 属性的值。无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。
	通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：

```
	<span v-once>Message: {{ msg }}</span>
```

- 原始HTML
	
	双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令：
	
```
	<p>Using mustaches: {{ rawHtml }}</p>
	<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

	这个 span 的内容将会被替换成为属性值 rawHtml，直接作为 HTML——会忽略解析属性值中的数据绑定。注意，你不能使用 v-html 来复合局部模板，因为 Vue 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。

- 特性

	Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令：	

```
	<div v-bind:id="dynamicId"></div>
```

	在布尔特性的情况下，它们的存在即暗示为 true，v-bind 工作起来略有不同，在这个例子中：
	
```
	<button v-bind:disabled="isButtonDisabled">Button</button>
```

	如果 isButtonDisabled 的值是 null、undefined 或 false，则 disabled 特性甚至不会被包含在渲染出来的 <button> 元素中。
	
- 使用 JavaScript 表达式

	对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持
	
```
	{{ number + 1 }}

	{{ ok ? 'YES' : 'NO' }}

	{{ message.split('').reverse().join('') }}

	<div v-bind:id="'list-' + id"></div>
```

	这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含**单个表达式**，所以下面的例子都**不会**生效
	
```
	<!-- 这是语句，不是表达式 -->
	{{ var a = 1 }}

	<!-- 流控制也不会生效，请使用三元表达式 -->
	{{ if (ok) { return message } }}
```

- 指令

	指令 (Directives) 是带有 v- 前缀的特殊特性。指令特性的值预期是**单个** JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。回顾我们在介绍中看到的例子：
	
```
	<p v-if="seen">现在你看到我了</p>
```

	这里，v-if 指令将根据表达式 seen 的值的真假来插入/移除 <p> 元素。
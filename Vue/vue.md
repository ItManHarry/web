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
	
- 参数

	一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，v-bind 指令可以用于响应式地更新 HTML 特性：
	
```
	<a v-bind:href="url">...</a>
```

	在这里 href 是参数，告知 v-bind 指令将该元素的 href 特性与表达式 url 的值绑定。

	另一个例子是 v-on 指令，它用于监听 DOM 事件：
	
```
	<a v-on:click="doSomething">...</a>	
```

- 动态参数

	从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：
	
```
	<a v-bind:[attributeName]="url"> ... </a>
```
	
	这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的 Vue 实例有一个 data 属性 attributeName，其值为 "href"，那么这个绑定将等价于 v-bind:href。

	同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：

```
	<a v-on:[eventName]="doSomething"> ... </a>	
```

	同样地，当 eventName 的值为 "focus" 时，v-on:[eventName] 将等价于 v-on:focus。
	
	对动态参数的值的约束
	动态参数预期会求出一个字符串，异常情况下值为 null。这个特殊的 null 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。

	对动态参数表达式的约束
	
	动态参数表达式有一些语法约束，因为某些字符，例如空格和引号，放在 HTML 特性名里是无效的。
	
	例如，下面的代码是无效的：
	
```
	<!-- 这会触发一个编译警告 -->
	<a v-bind:['foo' + bar]="value"> ... </a>
```

- 修饰符

	修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
	
```
	<form v-on:submit.prevent="onSubmit">...</form>
```

- 缩写

	v- 前缀作为一种视觉提示，用来识别模板中 Vue 特定的特性。当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，v- 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 Vue 管理所有模板的单页面应用程序 (SPA - single page application) 时，v- 前缀也变得没那么重要了。因此，Vue 为 v-bind 和 v-on 这两个最常用的指令，提供了特定简写：
	
	- v-bind 缩写
	
```
	<!-- 完整语法 -->
	<a v-bind:href="url">...</a>

	<!-- 缩写 -->
	<a :href="url">...</a>
```

	- v-on缩写
	
```
	<!-- 完整语法 -->
	<a v-on:click="doSomething">...</a>

	<!-- 缩写 -->
	<a @click="doSomething">...</a>
```

# 计算属性和侦听器

- 计算属性
	
	模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：
```
	<div id="example">
	  {{ message.split('').reverse().join('') }}
	</div>
```	
	在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转字符串。当你想要在模板中多次引用此处的翻转字符串时，就会更加难以处理。

	所以，对于任何复杂逻辑，你都应当使用计算属性。

	基础例子
```
	<div id="example">
	  <p>Original message: "{{ message }}"</p>
	  <p>Computed reversed message: "{{ reversedMessage }}"</p>
	</div>
	var vm = new Vue({
	  el: '#example',
	  data: {
		message: 'Hello'
	  },
	  computed: {
		// 计算属性的 getter
		reversedMessage: function () {
		  // `this` 指向 vm 实例
		  return this.message.split('').reverse().join('')
		}
	  }
	})
```
	结果：

	Original message: "Hello"

	Computed reversed message: "olleH"

	这里我们声明了一个计算属性 reversedMessage。我们提供的函数将用作属性 vm.reversedMessage 的 getter 函数：
```
	console.log(vm.reversedMessage) // => 'olleH'
	vm.message = 'Goodbye'
	console.log(vm.reversedMessage) // => 'eybdooG'
```	
	你可以打开浏览器的控制台，自行修改例子中的 vm。vm.reversedMessage 的值始终取决于 vm.message 的值。

	你可以像绑定普通属性一样在模板中绑定计算属性。Vue 知道 vm.reversedMessage 依赖于 vm.message，因此当 vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新。而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。
	
- 计算属性缓存 vs 方法
	
	你可能已经注意到我们可以通过在表达式中调用方法来达到同样的效果：
	
```
	<p>Reversed message: "{{ reversedMessage() }}"</p>
	// 在组件中
	methods: {
	  reversedMessage: function () {
		return this.message.split('').reverse().join('')
	  }
	}
```
	我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是**计算属性是基于它们的依赖进行缓存的**。只在相关依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
	
	这也同样意味着下面的计算属性将不再更新，因为 Date.now() 不是响应式依赖：
	
```
	computed: {
	  now: function () {
		return Date.now()
	  }
	}
```

	相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。
	
	我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 A 。如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代。

	
- 计算属性 vs 侦听属性

	Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch——特别是如果你之前使用过 AngularJS。然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调。细想一下这个例子：
	
```
	<div id="demo">{{ fullName }}</div>
	var vm = new Vue({
	  el: '#demo',
	  data: {
		firstName: 'Foo',
		lastName: 'Bar',
		fullName: 'Foo Bar'
	  },
	  watch: {
		firstName: function (val) {
		  this.fullName = val + ' ' + this.lastName
		},
		lastName: function (val) {
		  this.fullName = this.firstName + ' ' + val
		}
	  }
	})
```

	上面代码是命令式且重复的。将它与计算属性的版本进行比较：
	
```
	var vm = new Vue({
	  el: '#demo',
	  data: {
		firstName: 'Foo',
		lastName: 'Bar'
	  },
	  computed: {
		fullName: function () {
		  return this.firstName + ' ' + this.lastName
		}
	  }
	})
```	

- 侦听器

	虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

	例如：
	
```
	<div id="watch-example">
	  <p>
		Ask a yes/no question:
		<input v-model="question">
	  </p>
	  <p>{{ answer }}</p>
	</div>
	<!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
	<!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
	<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
	<script>
	var watchExampleVM = new Vue({
	  el: '#watch-example',
	  data: {
		question: '',
		answer: 'I cannot give you an answer until you ask a question!'
	  },
	  watch: {
		// 如果 `question` 发生改变，这个函数就会运行
		question: function (newQuestion, oldQuestion) {
		  this.answer = 'Waiting for you to stop typing...'
		  this.debouncedGetAnswer()
		}
	  },
	  created: function () {
		// `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
		// 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
		// AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
		// `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
		// 请参考：https://lodash.com/docs#debounce
		this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
	  },
	  methods: {
		getAnswer: function () {
		  if (this.question.indexOf('?') === -1) {
			this.answer = 'Questions usually contain a question mark. ;-)'
			return
		  }
		  this.answer = 'Thinking...'
		  var vm = this
		  axios.get('https://yesno.wtf/api')
			.then(function (response) {
			  vm.answer = _.capitalize(response.data.answer)
			})
			.catch(function (error) {
			  vm.answer = 'Error! Could not reach the API. ' + error
			})
		}
	  }
	})
	</script>
```

	在这个示例中，使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。
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


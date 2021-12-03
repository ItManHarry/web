/**
 * 元组
 * 数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组。
 * 元组中允许存储不同类型的元素，元组可以作为参数传递给函数
 * 创建语法：
 *  var tuple_name = [value1,value2,value3,…value n]
 */
//声明并实例化元组
var my_tuple = [100, 'Jack', 'jack@google.com']
console.log('my_tuple type is : ' + typeof(my_tuple))
var my_tuple2 = []
my_tuple2[0] = 'Harry'
my_tuple2[1] = 38
my_tuple2[3] = 'harry@163.com'
//遍历元组
my_tuple2.forEach(v=>{
    console.log('Element value is : ' + v)
})
//添加元素
my_tuple2.push('I am an IT man')
my_tuple2.forEach(v=>{
    console.log('Element value is : ' + v)
})
//移除元素
my_tuple2.pop()
my_tuple2.forEach(v=>{
    console.log('Element value is : ' + v)
})
//更新元组
my_tuple2[1] = 39
my_tuple2.forEach(v=>{
    console.log('Element value is : ' + v)
})
//解构元组
let vs = ['Harry', 38]
let [my_name, my_age] = vs
console.log('My name is : ' + my_name + ', my age is : ' + my_age)
/*
TypeScript 变量的命名规则：
	1. 变量名称可以包含数字和字母。
	2. 除了下划线 _ 和美元 $ 符号外，不能包含其他特殊字符，包括空格。
	3. 变量名不能以数字开头。
*/

//声明变量的类型及初始值
//var [变量名]:[变量类型] = 值
var age:number = 35
console.log('Age is : ' + age)
//声明变量的类型，但没有初始值，变量值会设置为 undefined
//var [变量名]:[变量类型]
var uname:string
console.log('User name is : ' + uname)
//声明变量并初始值，但不设置类型，该变量可以是任意类型：
//var [变量名] = 值
var title = 'JavaScript'
//声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
//var [变量名]
var book
console.log('Book is : ' + book)
//类型断言（Type Assertion）
/*
	语法格式：
	
	<类型> 值
	
	或：
	
	值 as 类型
*/
var str = '1'
var str2:number = <number> <any> str
console.log('Str2 type is : ' + typeof(str2) +', and value is : ' + str2)
/*
	变量作用域
	变量作用域指定了变量定义的位置。
	程序中变量的可用性由变量作用域决定。
	TypeScript 有以下几种作用域：
		1. 全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
		2. 类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
		3. 局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
*/
var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量
   
   storeNum():number { 
      var local_num = 14;    // 局部变量
	  return local_num
   } 
} 
console.log("全局变量为:"+global_num)  
console.log("静态变量:":Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量:"+obj.num_val)
console.log("局部变量:" + obj.storeNum())
//循环
let array1 = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i < array1.length; i++){
    console.log('Element is : ' + array1[i])
}
for(let e in array1)
    console.log('Element : ' + e)
for(let e of array1)
    console.log('Element of array1 : ' + e)
array1.forEach((v, i, array) => {
    console.log('Index is(forEach) : ' + i)
    console.log('Value is(forEach) : ' + v)
    console.log('Array is(forEach) : ' + array)
})
array1.every((v, i, array) => {
    console.log('Index is(every) : ' + i)
    console.log('Value is(every) : ' + v)
    console.log('Array is(every) : ' + array)
    if(i == 3)
        return false
    else
        return true
})
let cnt = 100
while(cnt >= 50){
    console.log('Count is(while) : ' + cnt)
    cnt--
}
cnt = 20
do{
    console.log('Count is(do while) : ' + cnt)
    cnt++
}while(cnt <= 15)
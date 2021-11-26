//函数
function test(){
    console.log('Do the test...')
} 
test()
function greet():string{
	return 'Hello, I am Harry.'
}
function caller(){
	let greet_str = greet()
	console.log('Greet string is : ' + greet_str)
}
caller()
function add(x:number, y:number){
	return x + y
}
let result = add(10, 20)
console.log(result)
/*
    使用问号"?"设置可选参数
    注：可选参数必须跟在必需参数后面。如果都是可选参数就没关系
*/
function info(firstName:string, lastName?:string){
    if(lastName)
        return firstName + ' ' + lastName
    else
        return firstName
}
let name1 = info('Bob')
console.log('Name 1 is : ' + name1)
let name2 = info('Harry', 'Cheng')
console.log('Name 2 is : ' + name2)
/*
    参数默认值
    设置参数默认值，这样如果不传入该参数，则使用默认值
    注：参数不能同时设为可选和默认
*/
function info2(name:string, age:number=20){
    return 'My name is : ' + name + ', and age is : ' + age
}
let i1 = info2('Jack')
console.log('My information is : ' + i1)
let i2 = info2('Harry', 38)
console.log('My information is : ' + i2)
/*
    剩余参数
    有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入
    函数的最后一个命名参数 restOfName 以 ... 为前缀，它将成为一个由剩余参数组成的数组，索引值从0（包括）到 restOfName.length（不包括）。
*/
function info3(name:string, ...otherInfo:any[]){
    otherInfo.forEach((v, i) => {
        console.log('Other info value is : ' + v)
    })
    return 'Name is : ' + name + '. Other information are : ' + otherInfo
}
let me = info3('Tom', 'JN', 35, true)
console.log('My information : ' + me)
function total(...nums:number[]){
    let sum = 0
    nums.forEach((v) => {
        sum += v
    })
    return sum
}
let t1 = total(1,2,3,4,5)
console.log('Total 1 is : ' + t1)
let t2 = total(10,10,10,10,10)
console.log('Total 2 is : ' + t2)
/*
    匿名函数
*/
let f = function(name:string){
    return name
}
console.log(f('Jack'));
/*
    匿名函数自调用
*/
(function(){
    var x = 'hello'
    console.log(x)
})();
/*
    构造函数
    TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数：
    语法格式如下：
    var res = new Function ([arg1[, arg2[, ...argN]],] functionBody)
    参数说明：
    arg1, arg2, ... argN：参数列表。
    functionBody：一个含有包括函数定义的 JavaScript 语句的字符串。
*/
var mf = new Function('a','b','return a * b')
var x1 = mf(4, 3)
console.log('x1 is : ' + x1)
/*
    递归函数
    递归函数即在函数内调用函数本身
*/
function factorial(num:number):number{
    if(num <= 0)
        return 1
    else
        return (num * factorial(num - 1))    
}
console.log('Facotrial six is : ' + factorial(6))
/*
    Lambda函数
    Lambda 函数也称之为箭头函数。
    箭头函数表达式的语法比函数表达式更短。
    函数只有一行语句：
        ( [param1, parma2,…param n] )=>statement;        
*/
var foo = (x:number)=>{return 10 + x}
console.log('Foo 10 is : ' + foo(10))
var foo2 = (x:number, y:number) => {
    console.log('x is : ' + x + ', y is : ' + y)    
    console.log(x + y)
    return x + y
}
var f2 = foo2(100, 200)
console.log('f2 is : ' + f2)
var func = (x:any) => {
    if(typeof(x) == 'number')
        console.log('x is a number')    
    else if(typeof(x) == 'string')
        console.log('x is a string')
    else
        console.log('x type is not sure')
}
func(12)
func('Jack')
func(false)
//单个参数时()可选
var display = x => {
    console.log('x is : ' +x)
}
display(1)
//无参数可以设置空括号
var disp = ()=>{
    console.log('function without parameters')
}
disp()
/*
   函数重载
    重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
    每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

    参数类型不同：
    function disp(string):void; 
    function disp(number):void;
    参数数量不同：
    function disp(n1:number):void; 
    function disp(x:number,y:number):void;
    参数类型顺序不同：
    function disp(n1:number,s1:string):void; 
    function disp(s:string,n:number):void;
    如果参数类型不同，则参数类型应设置为 any。
    参数数量不同你可以将不同的参数设置为可选。 
*/
function disp1(s1:string):void
function disp1(n1:number,s1:string):void
 
function disp1(x:any,y?:any):void { 
    console.log(x)
    console.log(y)
} 
disp1("abc") 
disp1(1,"xyz")
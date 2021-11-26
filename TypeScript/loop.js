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
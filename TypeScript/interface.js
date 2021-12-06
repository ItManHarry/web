/**
 * TypeScript接口
 * 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法
 * 接口定义：
 * interface interface_name{
 *  ...
 * }
 * 需要注意接口不能转换为 JavaScript。 它只是 TypeScript 的一部分
 */
interface IPerson{
    firestName:string,
    lastName:string,
    info:()=> string,
    sayHi:() => void
}
let customer:IPerson = {
    firestName:"Harry",
    lastName:"Cheng",
    info:() => {
        return 'I am '+customer.firestName + '.' + customer.lastName
    },
    sayHi:() => {
        console.log('Just say hi!!!')
    }
}
let info = customer.info()
console.log('Person information : ' + info)
customer.sayHi()
/**
 * 联合类型和接口
 */
interface RunOptions{
    program:string,
    command:string|string[]|(() => string)
}
let os:RunOptions = {
    program:'test1',
    command:'Hello'
}
console.log('Program is : ' + os.program)
console.log('Command is : ' + typeof os.command + ' - ' + os.command)
os = {
    program:'test2',
    command:['A','B','C','D']
}
console.log('Program is : ' + os.program)
console.log('Command is : ' + typeof os.command + ' - ' + os.command)
os = {
    program:'test2',
    command:() => {
        return 'OK!'
    }
}
console.log('Program is : ' + os.program)
console.log('Command is : ' + typeof os.command + ' - ' + os.command)
/**
 * 接口和数组
 * 接口中我们可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串
 */
interface namelist{
    [index:number]:string
}
let arr:namelist = ['John', '1', 'Bran']
arr.forEach( (v, i) => {
    console.log(' Index is : ' + i + ', value is : ' + v)
})
/*
interface ages { 
   [index:string]:number 
} 
 
var agelist:ages
agelist["John"] = 15  
*/
/**
 * 接口继承
 * 接口继承就是说接口可以通过其他接口来扩展自己
 * Typescript 允许接口继承多个接口
 * 继承使用关键字 extends
 * 单接口继承语法格式：
 *  Child_interface_name extends super_interface_name
 * 多接口继承语法格式：
 *  Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name
 */
interface Person{
    age:number
}
interface Musician extends Person{
    instrument:string
}
let drummer:Musician = {
    age:27,
    instrument:'Drums'
}
console.log('Drummer age : ' + drummer.age)
console.log('Drummer instument : ' + drummer.instrument)
interface Parent1{
    v1:string
}
interface Parent2{
    v2:number
}
interface Child extends Parent1, Parent2{

}
let c:Child = {
    v1:'Jack',
    v2:24
}
console.log('Child property 1 is : ' + c.v1 + ', property 2 : ' + c.v2)
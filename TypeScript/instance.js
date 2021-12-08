/**
 * TypeScript对象
 * 对象是包含一组键值对的实例。 值可以是标量、函数、数组、对象等，如下实例：
 *  var object_name = { 
 *       key1: "value1", // 标量
 *       key2: "value",  
 *       key3: function() {
 *           // 函数
 *       }, 
 *       key4:["content1", "content2"] //集合
 *   }
 */
var sites = {
    site1:'Runoob',
    site2:'Google'
}
console.log(sites.site1)
console.log(sites.site2)
/**
 * TypeScript类型模板
 * Typescript 中的对象必须是特定类型的实例  
 * 类型模板对应的函数不支持return，只能是void函数
*/
sites = {
    site1:'Runoob',
    site2:'Google',
    sayHi:function(){}, 						//类型模板1
    info:function(newVal:string){}, 	//类型模板2
}
sites.sayHi = ():void => {
    console.log('Hi , I am  the instance model ...')
}
sites.sayHi()
sites.info = (newVal:string):void => {
    console.log('New Value is : ' + newVal + ', site 1 is : ' + sites.site1 + ', site 2 is : ' + sites.site2)
}
sites.info('Harry')
var sum = (a:number, b:number):number => {
    return a + b
}
console.log('10 plus 20 is : ' + sum(10, 20))
/**
 * 对象也可以作为一个参数传递给函数
*/
var params = {
    p1:'aaa',
    p2:100
}
var paramVals = (param:{}):void => {
    console.log(param.p1)
    console.log(param.p2)
}
paramVals(params)
/**
 * 鸭子类型（Duck Typing）
 * 鸭子类型（英语：duck typing）是动态类型的一种风格，是多态(polymorphism)的一种形式
 * 在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由"当前方法和属性的集合"决定
 * 在鸭子类型中，关注点在于对象的行为，能作什么；而不是关注对象所属的类型
 * 例如，在不使用鸭子类型的语言中，我们可以编写一个函数，它接受一个类型为"鸭子"的对象，并调用它的"走"和"叫"方法
 * 在使用鸭子类型的语言中，这样的一个函数可以接受一个任意类型的对象，并调用它的"走"和"叫"方法。如果这些需要被调用的方法不存在，那么将引发一个运行时错误
 * 任何拥有这样的正确的"走"和"叫"方法的对象都可被函数接受的这种行为引出了以上表述，这种决定类型的方式因此得名。
 */
interface IPoint{
    x:number
    y:number
}
function addPoints(p1:IPoint, p2:IPoint):IPoint{
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    return {x:x, y:y}
}
var newPoints = addPoints({x:3, y:4}, {x:5, y:1})
console.log(newPoints.x + ' ' + newPoints.y)
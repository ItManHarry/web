/**
 * TypeScript 联合类型
 * 联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值
 * 注意：只能赋值指定的类型，如果赋值其它类型就会报错
 * 创建联合类型的语法格式如下：
 * Type1|Type2|Type3 
 */
var val:string|number
val = 12
console.log('Value is : ' + val)
val = 'abcd'
console.log('Now the value is : ' + val)
/**
 * 作为函数参数使用
 */
function disp(name:string|string[]){
    if(typeof name == 'string')
        console.log('Name is : ' + name)
    else
        name.forEach(v => {
            console.log('Name value is : ' + v)
        })
}
disp('Harry')
disp(['Jack','Tom','Sam','Jane'])
/**
 * 联合类型数组
 */
var arr:number[]|string[]
arr = [1,2,3,4,5,6]
arr.forEach( v => {
    console.log('Value is : ' + v)
})
arr = ['A','B','C','D','E']
arr.forEach(v => {
    console.log('Now the value is : ' + v)
})
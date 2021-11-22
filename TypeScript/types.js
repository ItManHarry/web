// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World"
console.log(anExampleVariable)

const hello : string = 'Hello World!!!'
console.log('String hello is ' + hello)
/*
    类
    Person
 */
class Person{
    name():void{
        console.log('I am a person.')
    }

    en():String{
        return 'Harry'
    } 

    age():number{
        return 35
    }  

    marrid():boolean{
        return true
    }
}

let p = new Person()
p.name()
console.log(p.en())
console.log(p.age())
console.log(p.marrid())

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
//整型、字符串、多行字符串
let age:number = 35
console.log('Age is : ' + age)
let mstring:string = `
    abkjsdlkf
    sdklfjsdlk
    sjklfjsdlf
`
console.log('Multy String is : ' + mstring)
//列表
let arr1:number[] = [1,2]
let arr2:Array<string> = ['aaa','bbb','ccc']
console.log(arr1)
console.log(arr2)
//元组
let x:[string, number, boolean]
x = ['aaa', 2, false]
console.log(x)
x = ['bbb', 39, true]
console.log(x)
//枚举
enum Color{Red, Green, Blue}
let c:Color = Color.Blue
console.log(c)
//void
function hello2():void{
    alert('hello')
}
hello2()
//null
let n = null
console.log(n)
//undefined
let u = undefined
console.log(u)
//any
let ipt:any = 1
console.log('Initial ipt is : ' + ipt)
ipt = 'abcdefg'
console.log('String ipt is : ' + ipt)
ipt = true
console.log('Boolean ipt is : ' + ipt)
let list:any[] = []
list[0] = 100
list[1] = 200
list[2] = false
list[3] = 'OK'
console.log(list)
let v1 : any
console.log(typeof(v1))
v1 = false
console.log(typeof(v1))
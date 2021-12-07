/**
 * TypeScript类
 * TypeScript 是面向对象的 JavaScript
 * 类描述了所创建的对象共同的属性和方法
 * TypeScript 支持面向对象的所有特性，比如 类、接口等
 * TypeScript 类定义方式如下：
 * class class_name{
 *  ...
 * }
 */
class Car{
    engine:string

    constructor(engine:string){
        this.engine = engine
    }

    disp():void{
        console.log('The engine is : ' + this.engine)
    }
}
var car = new Car('XXZY01')
console.log('The engine property is : ' + car.engine)
car.disp()
/**
 * 继承
 * 类继承使用关键字 extends，子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承
 * TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）
 * 语法格式：
 * class child extends parent
 */
class Ship{
    area:number

    constructor(area:number){
        this.area = area
    }
}
class Circle extends Ship{
    disp():void{
        console.log('The circle area is : ' + this.area)
    }
}
var circle = new Circle(230)
circle.disp()
/**
 * 多重继承
 */
class Root{
    str:string
}
class Branch extends Root{}
class Leaf extends Branch{}
var leaf = new Leaf()
leaf.str = 'hello'
console.log('Leaf str is : ' + leaf.str)
/**
 * 方法重写
 */
class ParentPrint{
    doPrint():void{
        console.log('Parent print method...')
    }
}
class ChildPrint extends ParentPrint{
    doPrint():void{
        super.doPrint()
        console.log('Child print method')
    }
}
var cp = new ChildPrint()
cp.doPrint()
/**
 * static关键字
 * static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用
 */
class StaticMember{
    static num:number = 25
}
console.log('Static number is : ' + StaticMember.num)
/**
 * instanceof
 * instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false
 */
class Person{

}
var p = new Person()
console.log('Is p the person instance ? ' + (p instanceof Person ? 'YES' : 'NO'))
/**
 * 访问控制修饰符
 * TypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限。
 * - public（默认） : 公有，可以在任何地方被访问
 * - protected : 受保护，可以被其自身以及其子类和父类访问
 * - private : 私有，只能被其定义所在的类访问
 */
class Encapsulate{
    v1:string = 'public str'
    protected v2:number = 25
    private v3:boolean = true
    disp():string{
        return 'Private variable is : ' + this.v3
    }
}
var en = new Encapsulate()
console.log('Variable 1 is : ' + en.v1)
//console.log('Variable 2 is : ' + en.v2)
class ChildEncapsulate extends Encapsulate{
    disp():string{
        var pstr = super.disp()
        return 'Variable 2 is : ' + this.v2 + ', and viriable 3 is : ' + pstr
    }
}
var ce = new ChildEncapsulate()
console.log(ce.disp())
interface ILoan{
    interest:number,
    good:string,
    disp:() => void,
    info:() => string 
}
class AgriLoan implements ILoan{

    interest:number
    good:string

    constructor(interest:number, good:string){
        this.interest = interest
        this.good = good
    }

    disp():void{
        console.log('Good is : ' + this.good + ', and interest is : ' + this.interest)
    }

    info():string{
        return 'Good is : ' + this.good + ', and interest is : ' + this.interest
    }
}
var loan = new AgriLoan(2.45, 'Computer')
loan.disp()
console.log(loan.info())
/*
	Number
	TypeScript 与 JavaScript 类似，支持 Number 对象。
	Number 对象是原始数值的包装对象。
	语法：
		var num = new Number(value);
	注意： 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)。
	属性：
	1. MAX_VALUE：
	可表示的最大的数，MAX_VALUE 属性值接近于 1.79E+308。大于 MAX_VALUE 的值代表 "Infinity"。
	2. MIN_VALUE：
	可表示的最小的数，即最接近 0 的正数 (实际上不会变成 0)。最大的负数是 -MIN_VALUE，MIN_VALUE 的值约为 5e-324。小于 MIN_VALUE ("underflow values") 的值将会转换为 0。
	3. NaN：
	非数字值（Not-A-Number）。
	4. NEGATIVE_INFINITY：
	负无穷大，溢出时返回该值。该值小于 MIN_VALUE。
	5. POSITIVE_INFINITY：
	正无穷大，溢出时返回该值。该值大于 MAX_VALUE。
	6. prototype：
	Number 对象的静态属性。使您有能力向对象添加属性和方法。
	7. constructor
	返回对创建此对象的 Number 函数的引用。
*/
console.log('最大值：'+Number.MAX_VALUE)
console.log('最小值：'+Number.MIN_VALUE)
console.log('负无穷大：'+Number.NEGATIVE_INFINITY)
console.log('正无穷大：'+Number.POSITIVE_INFINITY)
console.log('NaN : ' + typeof(Number.NaN))
var month = 0
if(month <=0 || month > 12){
    month = Number.NaN
    console.log('Month is : ' + month)
}else{
    console.log('The month input is right!!!')
}
console.log(month)
if(Number.isNaN(month)){
    console.log('The month is not correct.')
}else{
    console.log('The month is correct')
}
//prototype实例
function Employee(id:number, name:string){
    this.id = id
    this.name = name
}
var emp = new Employee(123, 'Jack')
console.log('Employee ID : ' + emp.id)
console.log('Employee Name : ' + emp.name)
Employee.prototype.email = 'abc@cd.com'
console.log('Employee email : ' + emp.email)
var emp2 = new Employee(456, 'Harry')
console.log('Employee2 ID : ' + emp2.id)
console.log('Employee2 Name : ' + emp2.name)
console.log('Employee2  email : ' + emp2.email)
/*
    Number对象方法
    toExponential()
    把对象转换为指针计数法
    toFixed()
    把数字转换为字符串，并对小数点指定位数
    toLocalString()
    把数字转换为字符串，使用本地数字格式顺序
    toPrecision()
    把数字格式化为指定的长度(四舍五入)
    toString()
    把数字转换为字符串，使用指定的基数。数字的基数是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10
    valueOf()
    返回一个 Number 对象的原始数字值    
*/
var num1 = 1225.30
var val = num1.toExponential()
console.log('Number is : ' + num1 + ', and exponential value is : ' + val)
var num2 = 177.836
console.log('To fixed : ' + num2.toFixed())         //默认整数，同时四舍五入
console.log('To fixed 2 : ' + num2.toFixed(2))      //保留两位小数,不会四舍五入
console.log('To field 6 : ' + num2.toFixed(6))
var num3 = 123.354
console.log('To local string : ' + num3.toLocaleString())
var num4 = 7.143456
console.log('Defualt precision : ' + num4.toPrecision())
console.log('Precision 1 : ' + num4.toPrecision(1))
console.log('Precision 2 : ' + num4.toPrecision(2))
var num5 = new Number(10)
console.log(num5.toString())
console.log(num5.toString(2))
console.log(num5.toString(8))
console.log(num5.valueOf())
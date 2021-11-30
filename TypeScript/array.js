/**
 * Array(数组)
 * 数组对象是使用单独的变量名来存储一系列的值
 * TypeScript 声明数组的语法格式如下所示：
 *  var array_name[:datatype];        //声明 
 *  array_name = [val1,val2,valn..]   //初始化
 * 或者直接在声明时初始化：
 *  var array_name[:data type] = [val1,val2…valn]
 * 注：如果数组声明时未设置类型，则会被认为是 any 类型，在初始化时根据第一个元素的类型来推断数组的类型
 */
var stores:string[]
stores = ['JinDong', 'Taobao', 'PinDuoDuo']
console.log('Store 1 : ' + stores[0])
console.log('Store 2 : ' + stores[1])
console.log('Store 3 : ' + stores[2])
var nums:number[] = [1,2,3,4,5,6]
nums.forEach(v => {
    console.log('Element is : ' + v)
})
/**
 * Array对象
 * Array 对象的构造函数接受以下两种值
 *  - 表示数组大小的数值
 *  - 初始化的数组列表，元素使用逗号分隔值
 */
var num_array:number[] = new Array(4)
for(var i = 0; i < num_array.length; i++){
    num_array[i] = i *2
}
num_array.forEach(v => {
    console.log('Value of the element : ' + v)
})
var str_array:string[] = new Array('a','b','c','d','e','f','g')
str_array.forEach(v => {
    console.log('Element value is : ' + v)
})
/**
 * 数组解构
 */
var arr_number:number[] = [10.5, 20.6]
var [x, y] = arr_number
console.log('x is : ' + x)
console.log('y is : ' + y)
/**
 * 数组迭代
 */
var nums_array:number[] = [100, 200, 300, 400, 500]
for(var n in nums_array){
    console.log('Number is : ' + n)
}
for(var i of nums_array){
    console.log('Number is : ' + i)
}
/**
 * 多维数组
 * 一个数组的元素可以是另外一个数组，这样就构成了多维数组（Multi-dimensional Array）
 * 最简单的多维数组是二维数组，定义方式如下：
 * var arr_name:datatype[][]=[ [val1,val2,val3],[v1,v2,v3] ]
 */
var multi_array:number[][] = [[1,2,3],[10,20,30],[100,200,300],[1000,2000,3000]]
console.log('Multi array length is : ' + multi_array.length)
multi_array.forEach(v => {
    console.log('Element is : ' + v)
    v.forEach(iv => {
        console.log('Inner element is : ' + iv)
    })
})
/**
 * 数组在函数中的使用
 * 1. 作为参数传递给函数
 * 2. 作为函数的返回值
 */
var params:string[] = ['Google','Runoob','Taobao','Facebook']
function disp(arr_params:string[]){
    arr_params.forEach(v => {
        console.log('Parameter : ' + v)
    })
}
disp(params)
function getValues():string[]{
    return new Array('A','B','C','D','E')
}
var values = getValues()
values.forEach(v => {
    console.log('Value is : ' + v)
})
/**
 * 数组方法
 * concat():连接两个或更多的数组，并返回结果
 * every():检测数值元素的每个元素是否都符合条件
 * filter():检测数值元素，并返回符合条件所有元素的数组
 * forEach():数组每个元素都执行一次回调函数
 * indexOf():搜索数组中的元素，并返回它所在的位置。如果搜索不到，返回值 -1，代表没有此项
 * join():把数组的所有元素放入一个字符串
 * lastIndexOf():返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索
 * map():通过指定函数处理数组的每个元素，并返回处理后的数组
 * pop():删除数组的最后一个元素并返回删除的元素
 * push():向数组的末尾添加一个或更多元素，并返回新的长度
 * reduce():将数组元素计算为一个值（从左到右）
 * reduceRight():将数组元素计算为一个值（从右到左）
 * reverse():反转数组的元素顺序
 * shift():删除并返回数组的第一个元素
 * slice():选取数组的的一部分，并返回一个新数组
 * some():检测数组元素中是否有元素符合指定条件
 * sort():对数组的元素进行排序
 * splice():从数组中添加或删除元素
 * toString():把数组转换为字符串，并返回结果
 * unshift():向数组的开头添加一个或更多元素，并返回新的长度
 */
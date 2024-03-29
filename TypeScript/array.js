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
 * every():检测数值元素的每个元素是否都符合条件,返回true/false
 * filter():检测数值元素，并返回符合条件所有元素的数组
 * forEach():数组每个元素都执行一次回调函数
 * indexOf():搜索数组中的元素，并返回它所在的位置。如果搜索不到，返回值 -1，代表没有此项
 * join():把数组的所有元素放入一个字符串
 * lastIndexOf():返回一个指定的元素最后出现的位置，在一个数组中的指定位置从后向前搜索
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
var array_1 = ['a','b','c','d','e','f','g']
var array_2 = [1,2,3,4,5,6]
var concat_array = array_1.concat(array_2)
console.log('Concat array is : ' + concat_array)
concat_array.forEach(v => {
    console.log('Element type is : ' + typeof(v) + ' and value is : ' + v)
})
function isBiggerThanTen(element, index, array){
    return element >= 10
}
var check_array1:number[] = new Array(10, 20, 5, 30, 100)
var check_reuslt1 = check_array1.every(isBiggerThanTen)
console.log('Check result 1 : ' + check_reuslt1)
var check_array2:number[] = new Array(10, 20, 50, 30, 100)
var check_reuslt2 = check_array2.every(isBiggerThanTen)
console.log('Check result 2 : ' + check_reuslt2)
var ok_array = check_array1.filter(isBiggerThanTen)
console.log('OK element array : ' + ok_array)
ok_array.forEach(v => {
    console.log('OK element is : ' + v)
})
var e_index_3 = array_2.indexOf(3)
var e_index_9 = array_2.indexOf(9)
console.log('Index of 3 : ' + e_index_3 + ', index of 9 : ' + e_index_9)
console.log('Array 2 join : ' + array_2.join())
var e_last_index_3 = array_2.lastIndexOf(3)
var e_last_index_9 = array_2.lastIndexOf(9)
console.log('Last index of 3 : ' + e_last_index_3 + ', last index of 9 : ' + e_last_index_9)
var sqrts = [1,4,9,16]
var roots = sqrts.map(Math.sqrt)
console.log('Roots are : ' + roots)
var new_results = sqrts.map((v)=>{
    return v -= 1
})
console.log('New result is : ' + new_results)
console.log('Before pop the array is : ' + sqrts)
var poped = sqrts.pop()
console.log('Poped element is : ' + poped)
console.log('After pop the array is : ' + sqrts)
var new_length = sqrts.push(20)
console.log('After pushed the array length is : ' + new_length + ', and the array is : ' + sqrts)
var reduce_left = [1,2,3,4,5,6].reduce((x, y)=>{
    return x + y
})
console.log('Reduced left value is : ' + reduce_left)
var reduce_right = [10,20,30,40,50,60].reduceRight((x, y)=>{
    return x + y
})
console.log('Reduced right value is : ' + reduce_right)
var reversed_array = [0,1,2,3,4].reverse()
console.log('Reversed array is : ' + reversed_array)
var first_element = [10,2.3,5,6].shift()
console.log('First element is : ' + first_element)
var o_a = ['a','b','c','d','e','f']
var n_a1 = o_a.slice(1,3)
var n_a2 = o_a.slice(3,5)
console.log('Old array is : ' + o_a)
console.log('New array 1 : ' + n_a1)
console.log('New array 2 : ' + n_a2)
var big_than_5 = [1,2,3,4].some((v) => {
    return v > 5
})
console.log('Array has element bigger than 5 ? ' + (big_than_5 ? 'YES' : 'NO'))
o_a = ['v','c','a','d','b','f']
var s_a = o_a.sort()
//sort改变原数组，无需使用新的变量接收
console.log('Before sorted : ' + o_a)
console.log('After sorted : ' + s_a)
o_a = ['orange','mango','banana','sugar','apple']
var splice_e = o_a.splice(2, 0 , 'water')
console.log('After splice the array is : ' + o_a)
console.log('Splice element is : ' + splice_e)
console.log('To string : ' + o_a.toString())
var splice_e2 = o_a.splice(3, 1)
console.log('After splice for the seconde time : ' + o_a)
var unshifted_length = o_a.unshift('pear')
console.log('After unshifted array length is : ' + unshifted_length + ', and the array is : ' + o_a)
unshifted_length = o_a.unshift('a','b','c','d')
console.log('After unshifted 2 array length is : ' + unshifted_length + ', and the array is : ' + o_a)
/*
    String 对象用于处理文本（字符串）
    语法
    var txt = new String("string");
    或者更简单方式：
    var txt = "string";
    属性
    constructor:对创建该对象的函数的引用
    length:返回字符串长度
    prototype:允许您向对象添加属性和方法
*/
var str = new String('This is a string')
console.log('str.constructor is : ' + str.constructor)
console.log('str.length is : ' + str.length)
/**
 * String方法
 * charAt():返回在指定位置的字符
 * charCodeAt():返回在指定的位置的字符的 Unicode 编码
 * concat():连接两个或更多字符串，并返回新的字符串
 * indexOf():返回某个指定的字符串值在字符串中首次出现的位置,如果查找不到返回-1
 * lastIndexOf():从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置,如果查找不到返回-1
 * localCompare():用本地特定的顺序来比较两个字符串
 * match():查找找到一个或多个正则表达式的匹配
 * replace():替换与正则表达式匹配的子串
 * search():检索与正则表达式相匹配的值,搜索不到返回-1
 * slice():提取字符串的片断，并在新的字符串中返回被提取的部分
 * split():把字符串分割为子字符串数组
 * substr():从起始索引号提取字符串中指定数目的字符(已不建议使用：Deprecated)
 * substring():提取字符串中两个指定的索引号之间的字符
 * toLocaleLowerCase():根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
 * toLocaleUpperCase():据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
 * toLowerCase():把字符串转换为小写
 * toString():返回字符串
 * toUpperCase():把字符串转换为大写
 * valueOf():返回指定字符串对象的原始值
 */
var s = new String('RUNOOBU')
console.log('First char of s is : ' + s.charAt(0))
console.log('First char code of s is : ' + s.charCodeAt(0))
for(var i = 0; i < s.length; i++){
    console.log('Char is : ' + s.charAt(i) + ', and char code is : ' + s.charCodeAt(i))
}
var s2 = "ABCDEFG"
var s3 = s.concat(s2)
console.log('Concat string is : ' + s3)
console.log('Index of OO is : ' + s.indexOf('OO'))
console.log('Index of OO2 is : ' + s.indexOf('OO2'))
console.log('Last index of U is : ' + s.lastIndexOf('U'))
console.log('Last index of U2 is : ' + s.lastIndexOf('U2'))
var cs1 = 'This is beautiful string'
var cs2 = 'This is beautiful string'
console.log('Loacl compare result is : ' + cs1.localeCompare(cs2) + ' equals : ' +  (cs1 == cs2))
var ms = 'The rain in SPAIN stays mainly in the plain'
console.log(ms.match(/ain/g))
var re = /(\w+)\s(\w+)/
var ostr = 'zara ali'
var nstr = ostr.replace(re, '$2, $1')
console.log('New string is : ' + nstr)
var nstr2 = ostr.replace('ali', 'aaa')
console.log('New string 2 is : ' + nstr2)
console.log(ostr.search('aaa'))
if(ostr.search('aaa') == -1)
    console.log('Does not contain aaa')
else   
    console.log('Contains aaa')
var ss = ostr.slice(0, 2)
var sub1 = ostr.substr(0, 2)
var sub2 = ostr.substring(0, 2)
console.log('ss is : ' + ss)
console.log('sub1 is : ' + sub1)
console.log('sub2 is : ' + sub2)
var ps = 'AbCdEfG'
var ls1 = ps.toLocaleLowerCase()
var ls2 = ps.toLowerCase()
console.log('Locale lower case : ' + ls1)
console.log('Lower case : ' + ls2)
var us1 = ps.toLocaleUpperCase()
var us2 = ps.toUpperCase()
console.log('Locale upper case : ' + us1)
console.log('Upper case : ' + us2)
console.log('Value of ps : ' + ps.valueOf())
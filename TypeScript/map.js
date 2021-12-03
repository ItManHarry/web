/**
 * Map对象
 * Map 对象保存键值对，并且能够记住键的原始插入顺序。
 * 任何值(对象或者原始值) 都可以作为一个键或一个值。
 * 创建Map
 * TypeScript 使用 Map 类型和 new 关键字来创建 Map：
 *  let my_map = new Map()
 * 初始化Map，可以使用数组传入键值对
 * let my_map = new Map([
 *  ['a', 1],
 *  ['b', 2],
 *  ['c', 3]
 * ])
 */
let my_map = new Map([
    ['a', 100],
    ['b', 200],
    ['c', 300]
])
console.log('My map is : ' + my_map)
/**
 * Map相关函数与属性
 * map.clear() – 移除 Map 对象的所有键/值对 。
 * map.set() – 设置键值对，返回该 Map 对象。
 * map.get() – 返回键对应的值，如果不存在，则返回 undefined。
 * map.has() – 返回一个布尔值，用于判断 Map 中是否包含键对应的值。
 * map.delete() – 删除 Map 中的元素，删除成功返回 true，失败返回 false。
 * map.size – 返回 Map 对象键/值对的数量。
 * map.keys() - 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 。
 * map.values() – 返回一个新的Iterator对象，包含了Map对象中每个元素的值 。
 * map..entries() - 返回一个新的Iterator对象，包含了Map对象中每个元素对象 
 */
let m = new Map()
//set值
m.set('a', 1)
m.set('b', 2)
m.set('c', 3)
m.set('d', 4)
//get值
console.log('Get a value key is a value is : ' + m.get('a'))
console.log('Get a value key is b value is : ' + m.get('b'))
console.log('Get a value key is c value is : ' + m.get('c'))
console.log('Get a value key is d value is : ' + m.get('d'))
//判断是否包含某个键对应的值
console.log('Has a element : ' + m.has('a'))
console.log('Has e element : ' + m.has('e'))
//返回Map对象的数量
console.log('Map size is : ' + m.size)
//删除key
let d = m.delete('d')
if(d)
    console.log('Deleted ...')
else
    console.log('Not deleted ...')
console.log('After delete the d element , the map size is : ' + m.size + ', and the map is : ' + m)
//清空map
m.clear()
console.log('Now the map size is : ' + m.size)
//遍历map
m.set('a', 100)
m.set('b', 200)
m.set('c', 300)
m.set('d', 400)
//遍历key
for(let key of m.keys())
    console.log('Key is : ' + key)
//遍历value
for(let value of m.values())
    console.log('Value is : ' + value)
//遍历entity
for(let entity of m.entries())
    console.log('Type of entity is : ' + typeof(entity) + ', key : ' + entity[0] + ', value : ' + entity[1])
//使用对象解析
for(let [k, v] of m)
    console.log('Key : ' + k + ', value : ' + v)
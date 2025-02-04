---
title: 数组 对象 字符串
order: 0
group:
  title: 基础语法
  order: 0
---
# 数组
## 遍历数组的方法
- `for`：这是最传统的循环语句，性能较好，但还可以通过使用临时变量缓存数组长度来优化。
- `forEach`：数组自带的遍历方法，性能比普通for循环弱，常用于遍历数组元素。
- `for...in`：用于遍历对象的属性，包括继承的属性，但性能较低。
- `for...of`：ES6引入的方法，用于遍历可迭代对象，如数组，但不能遍历对象。
- `map`：返回一个新数组，其中包含通过提供函数处理每个元素后的新值。forEach 会修改原来的数组。
- `every`：如果数组中的每个元素都满足测试函数，则返回true。
- `some`：如果数组中至少有一个元素满足测试函数，则返回true。
- `reduce`：对数组中的每个元素执行一个由你提供的reducer函数，将其结果汇总为单个返回值。
- `filter`：返回一个新数组，包含通过提供函数的测试的所有元素。
  
`forEach` 对数组的每个元素执行某些操作，但不关心返回值时使用。它常用于执行副作用，如日志记录、事件处理等。数据转换，链式调用用 map 方法。

forEach 在每次迭代时，forEach 需要调用回调函数可能涉及闭包。这意味着每次迭代都会发生额外的函数调用开销，包括创建函数上下文、传递参数等，for 循环没有。 for 可以精准控制循环的行为，forEach 需要抛出异常间接实现。

for of 是ES6新增的遍历方式，for in 循环主要是为了遍历对象而生，不适用于遍历数组；for of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象。

## 增删改查
注意是否修改原数组





# 对象
## 遍历对象的方法
`Object.keys` `Object.values` `Object.entries` `for in` 都可以遍历对象，`for in` 会遍历原型链，即对象自身的所有可枚举属性，包括非数字键和继承的属性。如果只想遍历对象自身的属性，可以使用 hasOwnProperty() 方法进行判断。普通的 JavaScript 对象`{}`默认不支持 `for...of` 迭代。需要使对象可迭代，可通过实现 `Symbol.iterator` 方法来创建自定义的迭代器。
## 对象属性取值
固定属性名用点操作符，变量属性名用方括号操作符。
## 检查对象循环引用
用 WeakMap键的弱引用特性 和 Set 防止无限递归，如处理 JSON 序列化、深拷贝或图遍历时。Map的键可以是任意类型，WeakMap只接受对象作为键，不接受其它类型的值作为键。Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键；WeakMap的键是弱引用，键所指向的对象是可以被垃圾回收，此时键是无效的。Map可以被遍历，WeakMap不能被遍历，因为垃圾回收机制的执行不可预测，而WeakMap内部成员是会取决于垃圾回收机制有没有执行，运行前后成员个数很可能是不一样的。
## Object.defineProperty()
 new 原型链，call，apply，bind 都会用到
## Window 全局对象
被查找变量用，因为函数会在自己的作用域先找，然后是全局作用域找，最后去window对象中找（不过window倒也是在全局里面）。提供浏览器全局范围的变量/函数/对象, 比如alert(), console.log中的console, Object()构造函数, document等。使用var定义的变量，会被默认添加到window上面。
## 包装类型常用方法
Number 包装类: `Number.MAX_VALUE/MIN~` `Number.MAX_SAFE_INTEGER/MIN~` `Number.parseInt` `number.toString(2)` `number..toString()` `pi.toFixed(2)` String 包装类：string.length message[20] message.charAt(20) 可以使用 for 循环遍历
## 内置 Math 对象
Math.PI Math.floor(num) Math.ceil(num) Math.round(num) Math.abs(num) Math.max(num1, num2,...) Math.min(num1, num2,...) Math.random() 

# 字符串
修改只能新建
## 增删改查

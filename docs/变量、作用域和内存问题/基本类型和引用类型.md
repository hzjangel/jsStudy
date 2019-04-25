# 基本类型和引用类型的值

**基本类型值**指的是简单的数据段，而**引用类型值**值那些可能由多个值构成的对象

引用类型的值是保存在内存中的对象。JavaScript不允许直接访问内存中的位置，不能直接操作对象的内存空间。在操作对象时，实际上是在操作对象的引用而不是实际的对象，引用类型的值是按引用访问的。

## 传递参数

ECMAScript中所有函数的参数都是按值传递的

代码说明

```javascript
function setName(obj) {
	obj.name = "Nicholase";
	obj = new Object();
	obj.name = "Greg";
}

var person = new Object();
setName(person);
console.log(person);

//输出结果：person.name为Nicholase，而不是Greg
```

如果参数传递是按引用传递的，那么person.name的值将回事Greg，而不是Nicholase，但是真正的结果是Nicholase，座椅参数传递是按值传递的，在函数obj = new Object()的时候，这个变量引用的就是一个局部对象了，这个局部对象会在函数执行完毕后立即被销毁。

## 检测类型

检测基本数据类型的时候使用`typeof`操作符，检测引用类型时使用`instanceof`操作符

```javascript
var a = null;
var b = new Object();
var c = new Person(); //自己定义一个Person对象
console.log(typeof a); //Object
console.log(typeof b); //Object
console.log(c instanceof Person);

```


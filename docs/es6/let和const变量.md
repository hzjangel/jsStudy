# let和const变量

## let使用

- 先定义后使用,如果不先定义在使用的话,会存在直接报错

```javascript
console.log(x);
let x = 4;
//Uncaught ReferenceError: Cannot access 'x' before initialization
```

- 在使用`let`定义的作用域当中,这个变量是无法使用的,即使在父级作用域存在仍然无法使用

```javascript
let x = 4;
if (true) {
    console.log(x);
    let x = 4;
}
//Uncaught ReferenceError: Cannot access 'x' before initialization
/*
虽然在if的外面定义了x变量,但是在if条件语句的这个块级作用域当中x变量还是处于未定义状态,所以不能够使用,在if的外面使用var定义也仍然不能使用
*/
```

- 使用`let`声明的变量不能够重复声明

```javascript
let x = 3;
let x = 4;
/*
let x = 3;
var x = 4;
//==============
var x = 3;
let x = 4;
也是一样不能够的
*/
//Uncaught SyntaxError: Identifier 'x' has already been declared
```

## 块级作用域

因为在使用`var`定义变量的时候,会将定义的变量作为一个全局变量(如果在函数中,就是这个函数的全局作用域),这样会带来很多麻烦,比如内层变量可能覆盖外层变量,无意中定义全局变量

- 内层块级作用域不会影响外层的块级作用域

```javascript
{
    {
        {
            let temp = "hello 1";
            console.log(temp);
        }
        let temp = "hello 2";
        console.log(temp);
    }
    let temp = "hello";
    console.log(temp);
}
```

- 最好不要在块级作用域定义函数

例子一:

```javascript
function fun() {
    console.log('外面的fun()...');
}
{
    {
        {
            function fun() {
                console.log('里面的fun()...');
            }
            fun();
        }
    }
}
fun();
```

例子二:

```javascript
function fun() {
    console.log('外面的fun()...');
}
{
    {
        {
            if (false) {
                function fun() {
                    console.log('里面的fun()...');
                }
            }
            fun();
        }
    }
}
fun();
```

例子三:

```javascript
function fun() {
    console.log('外面的fun()...');
}

(function () {
   if (false) {
       function fun() {
           console.log('里面的fun()...');
       }
   }
   fun();
}());
```

## const使用

`const`和`let`许多地方是一样的,有区别的地方在于`const`定义的变量是不可更改的(变量指向的地址不可更改,地址里面的内容是可以更改的,除非将对象冻结)

```javascript
const a = 1;
a = 2;
//Uncaught TypeError: Assignment to constant variable

const obj = {};
//指向一个对象,更改对象里面的值,并不会报错
obj.name = "hzj";
obj.age = 22;
//让obj指向一个新的对象,将会报错
obj = {};
```

将对象冻结后将不能够更改里面的值,在添加属性的时候不起作用

```javascript
let obj = Object.freeze({});
obj.name = "hzj";
obj.age = 22;
console.log(obj);
```

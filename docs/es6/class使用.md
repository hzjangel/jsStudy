# class使用

书籍地址: [ECMAScript 6 入门](http://es6.ruanyifeng.com/)

class在es6中就是一个语法糖,只是与es5定义类时候的写法不一样,功能还是一样的

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayAge() {
        console.log(this.age);
    }
}

Person.prototype.sayName = function () {
    console.log(this.name);
};
```

里面的`name`和`age`属性在`Person`上,`sayAge`和`sayName`方法在`Person.prototype`上

## this的使用

使用`class`定义的类的内部有`this`,他将默认指向类的实例

使用其他的方式定义一个类,并将里面的方法取出来可以单独使用

```javascript
var myName = 'Windows name';
let obj = {
    myName: "obj name",
    say: function () {
        console.log(this.myName);
    }
};
obj.say();
//使用赋值解构的方式取出say
let { say } = obj;
say();
```

但是使用`class`定义的类,将里面的方法取出来无法单独使用

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this);
        console.log(this.name);
    }
}
var name = "Windows name";
let person = new Person('hzj', 19);
let { sayName } = person;
sayName();
```

调用sayName方法的时候,发现`this`是`undefined`,所以无法使用`this.name`

### 解决方法

- **最简单的方法: 使用bind绑定this**

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.sayName = this.sayName.bind(this);
    }

    sayName() {
        console.log(this);
        console.log(this.name);
    }
}
```

## set和get使用

定义的`set`和`get`方法会改变某个属性的存值行为和取值行为

```javascript
class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        console.log('调用了get name方法');
        return this._name;
    }

    set name(name) {
        console.log('调用了set name方法');
        this._name = name;
    }
}

let person = new Person("hzj", 22);
person.name = 'xm';
console.log(person.name);
console.log(person._name);
```

::: tip
`_name`并不是私有的,可以直接取值和设置值,只是在命名上进行区别
:::

## 静态方法

使用`static`定义的方法不能在类的实例对象上使用,可以通过`类.方法名()`使用

`static`定义的方法可以被子类继承,可以通过`子类名.方法名()`调用或者通过`supper().方法名()`调用

```javascript
class Foo {
    constructor(name, age) {
    }

    static hello() {
        console.log('hello world');
    }
}

let foo = new Foo();

Foo.hello();

class Child extends Foo {
    static useHello() {
        super.hello();
    }
}

Child.hello();

Child.useHello();
```

::: tip
即使是子类的实例对象,也不能够使用父类的静态方法

```javascript
class Child extends Foo {
    useHello() {
        super.hello();
    }
}

let child = new Child();
child.useHello(); //TypeError: (intermediate value).hello is not a function
```

:::

## new.target

用来判断是否使用`new`关键字创建的对象

- 限制对象必须通过`new`使用

```javascript
function Person(name, age) {
    if (new.target === undefined) {
        throw new Error('必须使用new关键字使用');
    } else {
        this.name = name;
        this.age = age;
    }
}

Person('hzj', 22);
let person = new Person('hzj', 22);
```

- 在`class`中可以限定必须通过子类进行实例化,本身不能实例化

```javascript
class Person {
    constructor(name, age) {
        if (new.target === Person) {
            throw new Error('必须使用new关键字生成实例');
        } else {
            this.name = name;
            this.age = age;
        }
    }
}

class Child extends Person {

    constructor(name, age, classes) {
        super(name, age);
        this.classes = classes;
    }
}

let child = new Child('hzj', 22, 1);
let person = new Person('hzj', 22); //Error: 必须使用new关键字生成实例
```

::: tip
`suppr`必须在`this`的前面使用

这是错误的使用方式

```javascript
constructor(name, age, classes) {
    this.classes = classes;
    super(name, age);
}
```

:::

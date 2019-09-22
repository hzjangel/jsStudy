# class的继承

## extends

使用`extends`关键字实现继承

```javascript
class A {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class B extends A {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}
```

::: tip

1. 子类必须在`constructor`中调用`supper`,在`ES5`中,是先创建子类的实例对象`this`,然后再将父类的方法添加到`this`上面.`ES6`是先将父类对象的属性和方法,加到`this`上面(所以必须要先调用`supper`方法),然后在用子类的构造函数修改`this`

2. 在子类中,只有在`supper`调用之后才能够**使用**`this`关键字,在`supper`调用之前输出(`console.log(this)`)也不行,因为使用了`this`

:::

## Object.getPrototypeOf()

`Object.getPrototypeOf()`可一获得该类的直接父类

```javascript
class A {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class B extends A {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}

class C extends B {

}
console.log(Object.getPrototypeOf(B));
console.log(Object.getPrototypeOf(B) === A);
console.log(Object.getPrototypeOf(C));
```

## super关键字

### 作为函数调用

作为函数调用的时候,代表父类的构造函数,但是返回的是子类的实例,即`super`内部的`this`指的是`B`的实例,因此`super()`相当于`A.prototype.constructor.call(this)`

```javascript
class A {
    constructor(x, y) {
        console.log(new.target);
        this.x = x;
        this.y = y;
    }
}

class B extends A {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}

let a = new A(1, 2);
let b = new B(3, 4, 5);
```

### 作为对象使用

#### 普通方法

在普通方法中,`super`指向父类的原型对象,即相当于`A.prototype`

::: tip
在普通方法中,`super`指向父类的原型对象,所以父类实例上的方法和属性无法通过`super`进行使用
:::

```javascript
class A {
    constructor() {
        this.x = 1;
    }

}

A.prototype.y = 2;

class B extends A {
    constructor() {
        super();
    }

    getX() {
        //x是A的实例对象上的属性,无法获取到
        return super.x;
    }

    getY() {
        //y是A的原型对象上的属性,可以获取到
        return super.y;
    }
}
let b = new B();
console.log(b); //B { x: 1 }
console.log(b.getX()); //undefined
console.log(b.getY()); //2
```

::: tip
比较有趣的是,虽然父类的实例对象上的方法和属性无法通过`super`获取到,但是可以通过`super`设置父类实例对象上的方法和属性,在子类普通方法中通过`super`调用父类的方法时,方法内部的`this`指向当前的子类实例
:::

```javascript
class A {
    constructor() {
        this.x = 1;
    }
}

class B extends A {
    constructor() {
        super();
        console.log(this.x); //1
        super.x = 4;
        console.log(super.x); //undefined
        console.log(this.x); //4
    }
}
let b = new B();
```

::: warning
使用`super`进行读时,`super`等同于`A.prototype`,并且内部的`this`指向当前子类实例,赋值时`super`等同于`this`
:::

#### 静态方法

在静态方法中使用`super`的时候,`super`相当于父类(`A`),而不是父类的显示原型属性(`A.prototype`),`super`调用父类的方法时,方法内部的`this`指向当前的子类,而不是子类的实例

```javascript
class A {
    constructor() {
        this.x = 1;
    }

    static getX() {
        console.log(this.x);
        return this.x;
    }
}

class B extends A{
    constructor() {
        super();
        this.x = 2;
    }

    static print() {
        super.getX();
    }
}
B.x = 3;

B.print(); //3
```

::: warning
使用`super`进行读取时,`super`等同于`A`,并且内部的`this`指向当前**子类**(不是子类实例),赋值时等同与`this`
:::

```javascript
class A {
    constructor() {
        this.x = 1;
    }

    static getX() {
        console.log(this.x);
        return this.x;
    }
}

class B extends A{
    constructor() {
        super();
        this.x = 2;
    }

    static print() {
        super.getX();
    }

    static setY() {
        super.y = 4;
        console.log(B.y); //4
        this.y = 666;
        console.log(B.y); //666
        console.log(super.y); //undefined
    }
}
B.x = 3;

B.print(); //3
B.setY();
```

# Array类型

## Array类型的声明

1. 使用new操作符声明一个Array数组

```javascript
let arr1 = new Array();
arr1[0] = "hzjanger";
console.log(arr1.length); //1

let arr2 = new Array(20);
console.log(arr2.length); //20

let arr3 = new Array("hzjanger");
console.log(arr3.length); //1

//可以省略new，省略new是使用new的结果是一样的
let arr4 = Array(20);
console.log(arr4.length); //20
```

2. 使用数组字面量表示法

```javascript
let arr1 = [1, 2, 3];
console.log(arr1.length); //3

let arr2 = [1, , 2, 3];
console.log(arr2);  //[1, empty, 2, 3]
console.log(arr2.length); //4

let arr3 = [, , , ,];
console.log(arr3); //[empty, empty, empty, empty]
console.log(arr3.length); //4

```

## length的使用

数组的项数保存在其length属性中，这个属性始终会返回0或更大的值，并且length不当可以读，而且可以通过设置length属性，可以从数组的末尾移除项或向数组添加项

```javascript
let arr = [1, 2, 3, 4, 5];
arr.length = 2;
console.log(arr); //[1, 2]

let arr1 = [1, 2, 3, 4, 5];
arr1.length = 7;
console.log(arr1);  //[1, 2, 3, 4, 5, empty, empty]
console.log(arr1[6]); //undefined
```

数组中length的最大值为4 294 967 295，即数组最大可以包含4 294 967 295个项，不能超过这个上限
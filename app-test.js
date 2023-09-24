
// function first () {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }
//
// function second() {
//     console.log(2);
// }
//
// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
//
// function done () {
//     console.log('Я прошел этот урок!');
// }
//
// learnJS('JavaScript', done);

// const options = {
//     name: 'Maksim',
//     firstName: 'Zhdanov',
//     width: 1024,
//     height: 1024,
//     colors: {
//         background: 'red',
//         border: 'black'
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// };
//
// options.makeTest();
//
// const {border, background} = options.colors;
// console.log(border, background);
//
// console.log(Object.keys(options).length); //кол-во значений в объекте

// console.log(options.name);
//
// delete options.name;
//
// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// } //перебор объектов внутри объектов
//
//
// const arr = [56, 8, 26, 9, 5]
// arr.sort(compareNum);
// console.log(arr);
//
// function compareNum(a, b) {
//     return a - b;
// }
// arr.pop(); удалить из конца
// arr.push(10); добавить значение в массив

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// arr[99] = 0;
// console.log(arr.length)

// const str = prompt('', '');
// const products = str.split('', '');
// console.log(products.join(';'));

// let a = 5,
//     b = a;
//
// b = b + 5;
//
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
//
// // const copy = obj; //ссылку
// // copy.a = 10;
// //
// // console.log(copy);
// // console.log(obj);
//
// function copy(mainObj) {
//     let objCopy = {};
//
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//
//     return objCopy;
// }
//
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
//
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// // console.log(newNumbers)
// // console.log(numbers)
//
// const add = {
//     d: 17,
//     e: 20
// };
//
// const clone = Object.assign(numbers, add);
//
// clone.d = 20;
// //
// // console.log(add);
// // console.log(clone);
//
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
//
// newArray[1] = 'sdsadsadaasd';
// //
// // console.log(newArray);
// // console.log(oldArray);
//
// const video = ['youtobe', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejurnal', 'blogger'],
//       internet = [...video, ...blogs, 'vl', 'fafce']
//
// console.log(internet);
//
// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// const num = [2, 5, 7];
//
// log(...num);
//
// const array = ['a', 'h', 'gfg'];
//
// const nreArray = [...array];
//
// const q = {
//     one: 1,
//     two: 2
// };
//
// const newObj = {...q};
//
// let str = 'some';
// let str_obj = new String(str);
//
// console.log(typeof(str));
// console.log(typeof(str_obj));

// console.dir([1,2,3])
// const soldier = {
//     health: 400,
//     armor: 100,
//     setHello () {
//         console.log('Woof');
//     }
//
// };
// const john = Object.create(soldier);
//
// // john.__proto__ = soldier; //не актуально
// Object.setPrototypeOf(john, soldier);
//
// console.log(john.setHello());

//toString
//1
// console.log(typeof(String(null))); //устарел
// console.log(typeof(String(4))); //устарел
//2
// console.log(typeof(5 + ''));
//
// const num = 5;
//
// console.log('https://vk.com/catalog/' + num);
//
// const fontSize = 26 + 'px';

//toNumber
//1
// console.log(typeof(Number(null))); //устарел
// console.log(typeof(Number('4'))); //устарел
// //2
// console.log(typeof(+'5'));
// //3
// console.log(typeof(parseInt('15px', 10)));
//
// let answer = +prompt('Hi', ''); //только числа

//ToBool
//0, '', null, undefined, NaN; //false
//1
// let switcher = null;
//
// switcher = 1;
//
// if (switcher) {
//     console.log('Working...');
// }
//2
// console.log(typeof(Boolean('4')));
//3
// console.log(typeof(!!'4444'));

// let number = 5;
//
// function logNumber() {
//     // let number = 4;
//     console.log(number);
// }
//
// number = 6;
//
// logNumber();
//
// number = 60;
//
// logNumber();

// function createCounter() {
//     let counter = 0;
//
//     const myFunction = function() {
//         counter = counter + 1; // замыкает вместе с ссылкой каунтер и плюсует при каждом вызове
//         return counter;
//     }
//
//     return myFunction;
// }
//dsfsfsffsdfsdffsd
// const increment = createCounter();
// const c1 = increment(); // 1
// const c2 = increment(); // 2
// const c3 = increment(); // 3
//
// console.log(c1, c2, c3);
// И запинается на лжи
// Или запинается на правде


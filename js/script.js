'use strict';

const box = document.getElementById('box'); //только один
const btns = document.getElementsByTagName('button'); //все или выбранные в псевдомассив
const wrapper = document.querySelector('.wrapper');
const circles = document.getElementsByClassName('circle'); //все или выбранные в псевдомассив
const hearts = document.querySelectorAll('.heart'); //селекторы
const oneHeart = document.querySelector('.heart'); //находит первый метод и достёт его

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
   item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); //див только в js
// const text = document.createTextNode('text'); //текст только в js

div.classList.add('black');

wrapper.append(div); //добавили через дом дерево элемент в конец
// wrapper.prepend(div); //добавили через дом дерево элемент в начало

// hearts[0].before(div);
// hearts[0].after(div);
// circles[0].remove(); //убрать элемент

// hearts[0].replaceWith(circles[0]); //заменить элемент

div.innerHTML = '<h1>Hello World</h1>'; //html структурно добавленный элемент (безопасность)
// div.textContent = 'Hello'; // только текст

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); //вставили html в конец кода
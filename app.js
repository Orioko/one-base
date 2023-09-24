let numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

  while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
}

function rememberMyFilms () {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
        b = prompt('На сколько оцените его?', '').trim();

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done')
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLvl () {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB >= 30) {
    console.log('Вы киноман') ;
  } else {
    console.log('Ошибка');
  }
}

// detectPersonalLvl();

function showMyDB (hidden) {
  if (!hidden) {
    console.log (personalMovieDB);
  }
}

function writeYourGenres () {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();
console.log(personalMovieDB);

//
// if (4) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }
//
// const num = 50;

// if (num > 49) {
//     console.log('Error')
// } else if (num > 100) {
//     console.log('Много')
// } else {
//     console.log('Ok!')
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// switch (num) {
//     case 49:
//         console.log('Неверено');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 60:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }
//
// const hamburger = 5;
// const fries = null;
//
// if (hamburger && fries) {
//     console.log('Я сыт')
// }

//
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 1;
//
// if (hamburger === 3 && cola === 52 || fries === 3 && nuggets) {
//     console.log('Все сыты')
// } else {
//     console.log('Мы уходим')
// }
//
// console.log(hamburger === 3 && cola && fries)

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'fdsf');

// if (hamburger || cola || fries) {
//     console.log('Все сыты')
// } else {
//     console.log('Мы уходим')
// }
//
// console.log(hamburger || cola || fries)
//
// let num = 50;

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
//
// }
//
// let result = '';
// const length = 8;
//
// for (let i = 1; i < length; i++) {
//
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//
//     result += '\n';
// }
//
// console.log(result);
// let num = 20;
//
// function showFirstMessage (text) {
//     console.log(text);
//     let num = 100;
//     console.log(num);
// }
//
// showFirstMessage('Maksim');
// console.log(calc(2, 5));
//
// function calc(a, b) {
//     return (a + b);
// }
//
// const calc2 = (a, b) => { return a + b }

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }
//
// function promotion(result) {
//     console.log(result * discount);
// }
//
// promotion(convert(500, usdCurr));
//
// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('done');
// }
//
// test();

//
// const min = (a, b, c) => {
//     if (a < b && a < c) {
//         return a;
//     } else {
//         if (b < a && b < c) {
//         return b;
//         } else {
//             return c;
//     }
//     }
//             }

// console.log(min(16, 5, 3))


//

// }
//
// spinWords("Welcome My Maksim");



// const stringArray = Array.from(string)
// stringArray.prototype.reverse();
// const arrayString = stringArray.prototype.join();
// console.log(arrayString)
// return arrayString;
//
// function showFirstMessage() {
//     console.log('Hi bro');
// }
//
// showFirstMessage();

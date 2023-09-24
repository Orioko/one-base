
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

const options = {
    name: 'Maksim',
    firstName: 'Zhdanov',
    width: 1024,
    height: 1024,
    colors: {
        background: 'red',
        border: 'black'
    }
};

console.log(options.name);

delete options.name;

console.log(options);
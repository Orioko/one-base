
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const questionOne = prompt('Один из последний просмотренных фильмов?'),
      questionTwo = prompt('На сколько оцените его?'),
      questionTree = prompt('Один из последний просмотренных фильмов?'),
      questionThrf = prompt('На сколько оцените его?');

personalMovieDB.movies[questionOne] = questionTwo;
personalMovieDB.movies[questionTree] = questionThrf;

console.log(personalMovieDB);


let movies = {
  lastFilm: questionTwo, 
  moviesShot: questionOne
}

console.log(movies);


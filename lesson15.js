let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

//for это цикл! Не путать с функцией!!!
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '')
if (a != null && b != null && a != '' && b != '' && a.length < 50){
    personalMovieDB.movies [a] = b
    console.log('done')
} else {
    console.log('erorr')
    i--
}
}

if (personalMovieDB.count < 10 )
    console.log('Просмотрено довольно мало фильмов')
else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30 ){
    console.log('Вы классический зритель')
} else if (personalMovieDB.count < 30) {
    console.log('Вы киноман')
} else {
    console.log('Произошла ошибка')
}

console.log(personalMovieDB)


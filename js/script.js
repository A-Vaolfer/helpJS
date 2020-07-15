"use strict";
let numberOfFilms = prompt("Cколько фильмов вы уже посомтрели?", "1");

let personalMovieDB;

personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actor: {

    },
    genres: [],
    privat: false

};
let loginer = prompt("Один из последних просмотренных фильмов", "Канадец");
let ocenka = prompt("Во сколько балов оцениваете фильм?", "10");

personalMovieDB.movies = {
    login: loginer,
    lalal: ocenka
};

console.log(personalMovieDB.movies);
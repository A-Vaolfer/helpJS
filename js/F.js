// Начало

// Говорим файлу что мы работаем в современном режиме, некоторые фишки не работают
"use strict";
// Обявление переменной

// let namber = 5; // Может менятся 
// namber = 10 // || теперь переменная namber = 10.
// const leftBorderWidth = 1; // Константа, менять НЕЛЬЗЯ
// const rightBorderWidth = 23; // 2 слово писать с большой буквы ( называть осмысленно )
// console.log(namber, leftBorderWidth); // вывод переменной в консоль

// Типы данных 
// let Namber = 5.1; // Число
// let string = "string"; // Страка 
// let boolean = true; // Логический тип данных. 2 значения да или нет ( true or false )
// console.log(String * 5); // Nan 
// console.log(-4 / 0); // Nan - ошибка JS
{ // это скобки просто чтоб выделить 
    // null // пусто
    // undefiend // нету
} // это скобки просто чтоб выделить 

// let obj;
// obj = {
//     name: "Alex",
//     age: 5,
//     fame: true,

// }; // Это все обект
// console.log(obj.name);
// https://drive.google.com/file/d/1B8iEjwnWyWasNPhGmGFy43dyQ-5griVN/view - code style
// https://drive.google.com/file/d/13TdbVsWl7r_GX6TZJcd60HrtvISkMZ7m/view - Типы данных
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Общение с пользователем 
// alert('Hello'); // Выводит текс во встроенное всплывающее окно в браузере
// let result = confirm('Вы тут ?'); // Тоже что и алерт только у пользователя есть 2 варианта ответа, (да \ нет)
// console.log(result);
// let answer = prompt("Вам есть 18?", "Yes"); // Пользователь сам вводит ответ 
// // ( в переменно answer всегда тип данных строка.)
// console.log(typeof(answer)); // typeof показывает тип данных
// let type = +prompt("Кокой тип данных мы получаем от пользователя", "Строка?"); // Да всегда строка НОО если 
// //постивить +  то скрип сам будет решать что это строка или нет
//////////////////////////////////////////////////////////////////////////////////////////////
// const answers = [];

// answers[0] = prompt("Как ваше имя?", "Ivan"); // засовуем данные в массив
// answers[1] = prompt("Как ваше фамилия?", "Ivanov");
// answers[2] = prompt("Как ваше сколько лет?", "25");

// document.write(answers); // Старая фигнял. Выводит в браузере информацию
/////////////////////////////////////////////////////////////////////////////////////
// let nameuser = prompt('Введите ваше имя', "Ivan"); // Спрашиваем имя 
// alert(`Hello, ${nameuser}`); // Выводим имя + привет
// console.log('Hello ' + '' + 'obj'); // Соединение строк
// console.log(4 + ' ' + 'obj'); // число + строка = страка
// console.log(4 + ' ' + +'obj'); // Второй + превращат страку в число. В этом случаи выводит  Nan т.к 
//'obj' не чисно  (4 NaN)
// console.log(4 + +'5'); // Так все хорошо
//console.log(`hello, ${obj}`); // НЕ РАБОАТЕТ т.к ${тут только название переменной}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// в место того чтоб прописовать много раз let можно писать значения через запятую
// let lox = 1,
//     pitux = 2;

// lox++; // и нкримент добаляет +1
// pitux--; // декремент убалявет - 1 
// ++lox; // в начале прибовляет а потом выводит ( consol.log)
// --pitux; // в начале выводит а потом отнимает ( consol.log)
// console.log(5 % 2); // Процент от деления

// console.log('UOT PUT' + '' + lox); 
// console.log('UOT PUT' + '' + pitux);

// console.log(4 * 2 == '8'); // == сравнение
// console.log(4 * 2 === 8); // === сравнение без приравнивания типа
// const isChecked = true,
//     isClose = false;
// console.log(isChecked && isClose); // Оперотор и.Возваращает truе только если все подопечные true
// console.log(isChecked || isClose); // Оператор или. Возваращет true если хоть 1 true
// console.log(isChecked || !isClose); // !Знак отрицания, меняет значение на противоположное.
// console.log(4 * 4 !== 9); // !== и !=== Это означает не равно.
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table 
//- Таблица операторов
// Условия 
//4 == 9 ? // Если 4 = 9 то console.log("Ok!") : // если нет то console.log("Error");
// 4 == 9 ? console.log('OK!') : console.log('He-He', 'lox'); // Через тернарнЫй оператор 3 аргумента
// if (4 == 9) {
//     console.log('OK!')
// } else {
//     console.log('He-He', 'loX');
// } // по простуму if - если () - условия 1 строчка что если да else - что если нет. 
//else if () что есть - еще ода проверка
// let num = 10;

// switch (num) { // = Модефикация IF
//     case 9: // Только строгое сравнение
//         console.log("nNOOOOOT");
//         break; // Конец 1 проверки
//     case 10:
//         console.log("YEEA");
//         break;
//     default: // Если все не подошло то выполняется это.
//         console.log("not today");
//         break; 
// } // React >redux без swutch никак
// https://drive.google.com/file/d/1oM1HzpbJTwBi5pdgeHjS3j2FW_FqKy1u/view // Условия и {циклы}
// Циклы
let num = 50;
// while // Ключивое слово (num < 55) // условие {
//     console.log(num); // Что делается пока условие не выполнится
//     num++;    // Что делается пока условие не выполнится
// }
// while (num < 55) {
//     console.log(num);
//     num++;    
// }

// do { // В начале делаем 
//     console.log(num); 
//     num++;
// }
// while (num < 55); // потом проверяе.

// for (let i = 1;// Переменная I - итератор i < 9; // Условие i++ // Что делаеть пока условие не сработает) {
//     console.log(num);
//     num++;
// }
// 57 потому что цикл оринтируется не на num а на  i 

// for (let i = 1; i < 9; i++) {
//     console.log(num);
//     num++;
// }


// for (let i = 1; i < 9; i++) {
//     if (i === 6) {
//         // break; // Прирывает цикл когда выполено условие
//         //continue; // Уберает значение из словия с цикла не прирывая его
//     }
//     console.log(i);
// }
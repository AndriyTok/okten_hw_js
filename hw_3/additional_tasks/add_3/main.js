// 1. Створити пустий масив та :
const arr = []
//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        arr.push(i)
    }
}
console.log(arr);
//     b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        arr.push(i)
    }
}
arr.sort((a, b) => a - b)
console.log(arr);
arr.length = 0;
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
console.log(arr);
for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 1000));
}
console.log(arr);
arr.length = 0;
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * (732 - 8) + 8));
}
console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2; i < arr.length; i += 3) {
    console.log(arr[i])
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let new_arr = []
for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
        new_arr.push(arr[i]);
    }
}
console.log(new_arr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] % 2 === 0) {
        console.log(arr[i])
    }

}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
const numbers = [100, 250, 50, 168, 120, 345, 188]

function average_sum(array) {
    let sum = 0
    for (const number of numbers) {
        sum += number
    }
    return sum/array.length
}
console.log(average_sum(numbers))

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

random_mas = []
for (let i = 0; i < 10; i++) {
    const random_element = Math.floor(Math.random() * 1000)
    random_mas.push(random_element)
}
console.log(random_mas);

multiplied_random_mas = []
for (let i = 0; i < random_mas.length; i++) {
    let multiplied_element = random_mas[i] * 5
    multiplied_random_mas.push(multiplied_element)
}
console.log(multiplied_random_mas);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
let usersWithId = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false }
];

let citiesWithId = [
    { user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' }
];

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i];

    for (let j = 0; j < citiesWithId.length; j++) {
        if (user.id === citiesWithId[j].user_id) {
            user.address = citiesWithId[j]; // Додаємо адресу користувачу
            break; // Зупиняємо внутрішній цикл, бо вже знайшли відповідне місто
        }
    }

    usersWithCities.push(user);
}

console.log(usersWithCities);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = ['a', 'b', 'c']
let str = ''
for (let letter of abc) {
    str = str + letter
}
console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let while_str = ''
let a = 0
while (a < abc.length) {
    while_str = while_str + abc[a]
    a++
}
console.log(while_str);
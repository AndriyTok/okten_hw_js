// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle_square(x, y) {
    return x * y;
}

console.log(rectangle_square(10, 2))

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle_square(r) {
    return Math.PI * r ** 2
}

console.log(circle_square(9));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder_square(h, r) {
    return 2 * Math.PI * r * h
}

console.log(cylinder_square(9, 7));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function read_arr(arr) {
    for (const item of arr) {
        console.log(item)
    }
}

read_arr([1, 2, 3, 4, 5, 6])

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function paragraph_write(str) {
    document.write(`
        <p>${str}</p>
    `)
}

paragraph_write('lorem ipsum dolor sit amet')

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати
// через аргумент всім однаковий

function li_write(text) {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `)
}

li_write('lorem ipsum dolor sit amet')

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його
// через document.write
function li_write_with_num(text, num) {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

li_write_with_num('Some text', 5)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та
// виводить його через document.write
function ul_creator(arr) {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

const arr = [1, 4, true, false, 'string_element1', 'string_element2']
ul_creator(arr)

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.' +
// ' Для кожного об'єкту окремий блок.
function div_creator(arr) {
    for (const arrElement of arr) {
        document.write(`<div>`)
        document.write(`<p>ID: ${arrElement.id}</p>`)
        document.write(`<p>Name: ${arrElement.name}</p>`)
        document.write(`<p>Age: ${arrElement.age}</p>`)
        document.write(`</div>`)
    }
}

const users = [
    {id: 1, name: "Андрій", age: 25},
    {id: 2, name: "Марія", age: 22},
    {id: 3, name: "Олександр", age: 30},
    {id: 4, name: "Ірина", age: 28},
    {id: 5, name: "Володимир", age: 35}
];

div_creator(users)

//#pghbnSB
// - створити функцію яка повертає найменьше число з масиву

//created random arr
let random_array = []
for (let i = 0; i < 10; i++) {
    random_array.push(Math.floor(Math.random() * 100))
}
console.log(random_array);

function min_arr(array) {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
    }

    console.log(min_arr(random_array))

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13

function sum(arr){
    let sum = 0
    for (const item of arr) {
        sum += item
    }
    return sum
}

console.log(sum([1, 2, 3, 4, 5]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2){ //pos = position
    for (let i = 0; i < arr.length; i++) {
        let x = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = x
    }
    return arr
}
console.log(swap([1,2,3,4,5],0,4))

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const item of currencyValues){
        if (exchangeCurrency === item.currency){
            return sumUAH / item.value
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
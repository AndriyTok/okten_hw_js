// #WpkK0ZH1
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
const numbers = [1,2,3,4,5]
console.log(numbers)
const strings = ['string1', 'string2', 'string3', 'string4', 'string5']
console.log(strings);
const diff_arr = [1, 2, 'string', true, false]
console.log(diff_arr);
console.log(`--------------------`)

// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const arr = []
arr[0] = 1
arr[1] = true
arr[2] = 'string_value'
arr[3] = false
console.log(arr);
console.log(`--------------------`)

//
// #qLQLJSeN7i
// - є масив
const mas = [2,17,13,6,22,31,45,66,100,-18]
// 1. перебрати його циклом while
// let i = 0
// while (i++){
//     console.log(mas[i])
// }
let i = mas.length;
while (i--){
    console.log(mas[i])
}
//     2. перебрати його циклом for
for (let element of mas){
    console.log(element)
}
//     3. перебрати циклом while та вивести числа тільки з непарним індексом
// let j = 0
// while (j<mas.length){
//     if (j%2 !== 0){
//         console.log(mas[j])
//     }
//     j++
// }
let m = mas.length
while (m--){
    if (m%2 !== 0){
        console.log(mas[m])
    }
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let k = 0; k < mas.length; k++) {
//     if (k%2 !== 0){
//         console.log(mas[k])
//     }
// }
for (let n = mas.length; n >=0; n--){
    if (n%2 !== 0){
        console.log(mas[n])
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let j = 0
while (j<mas.length){
    if (j%2 === 0){
        console.log(mas[j])
    }
    j++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let k = 0; k < mas.length; k++) {
    if (k%2 === 0){
        console.log(mas[k])
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let k = 0; k < mas.length; k++) {
//     if (mas[k]%3 === 0){
//         mas[k] = 'okten'
//     }
// }
// console.log(mas);
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) -> (вище)
console.log(`--------------------`)

// #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// булеві елементи
let arr_2 = ['string', 1, true, false, 'string2', 'string3', 5, 6, 9, 10]
for (const element of arr_2){
    if (typeof(element) == "boolean"){
        console.log(element)
    }
}
console.log(`--------------------`)

// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести
// тільки числові елементи
for (const element of arr_2){
    if (typeof(element) == "number"){
        console.log(element);
    }
}
// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести
// тільки рядкові елементи
for (const element of arr_2){
    if (typeof(element) == "string"){
        console.log(element);
    }
}
console.log(`--------------------`)


// #s24slNyz7
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 200; i+=2){
    console.log(i)
    document.write(`<p>${i}</p>`)
}
document.write(`<p>-------------------------------------------</p>`)
// #zananT5FR1
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++){
    if (i%2 === 0){
        console.log(i)
        document.write(`<p>${i}</p>`)
    }
}
document.write(`<p>-------------------------------------------</p>`)

// #Tfrwls7FM
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++){
    if (i%2 !== 0){
        console.log(i)
        document.write(`<p>${i}</p>`)
    }
}
document.write(`<p>-------------------------------------------</p>`)
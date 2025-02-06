// ------------------------Логічні розгалуження----------------------

// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте скрипт при a, що дорівнює 1, 0, -3

// let x = parseInt(prompt('Input your number:' ))
let x = 12
if (x !== 0) {
    console.log('True!')
}
else {
    console.log('False!')
}
console.log('--------------------------------------')

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = Number(prompt('Input your time: '))
let time = 12

if (0 < time && time <= 15) {
    console.log('It is a first quarter!')
}
else if (15 < time && time <= 30) {
    console.log('It is a second quarter!')
}
else if (30 < time && time <= 45) {
    console.log('It is a third quarter!')
}
else if (45 < time && time <= 60) {
    console.log('It is a fourth quarter!')
}
else{
    console.log('Enter correct time of an hour!');
}
console.log('--------------------------------------')

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = Number(prompt('Input your day: (in number)'))
let day = 12

if (0 < day && day <= 10){
    console.log('It is a first decade')
}
else if (10 < day && day <= 20){
    console.log('It is a second decade')
}
else if (20 < day && day <= 31){
    console.log('It is a third decade')
}
else{
    console.log('Enter correct day!')
}
console.log('--------------------------------------')

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let scheduled_day = Number(prompt('Input the day of the week:'))
let scheduled_day = 5

switch (scheduled_day) {
    case 1: {
        console.log('Monday: to do the main task')
        break
    }
    case 2: {
        console.log('Tuesday: to do the add task')
        break
    }
    case 3: {
        console.log('Wednesday: to join meeting')
        break
    }
    case 4: {
        console.log('Thursday: to make a plan')
        break
    }
    case 5: {
        console.log('Friday: to call the boss')
        break
    }
    case 6: {
        console.log('Saturday: to read the book')
        break
    }
    case 7: {
        console.log('Sunday: to go to church')
        break
    }
}
console.log('--------------------------------------')

// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let num1 = 10
let num2 = 20

if (num1 > num2){
    console.log(`${num1} is bigger!`)
}
else if (num2 > num1){
    console.log(`${num2} is bigger`)
}
else{
    console.log('Numbers are equal!')
}
console.log('--------------------------------------')

// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//     (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

//using variable y because x was used before
let y = 0
if (y) {
    console.log(y);
}
else{
    y= 'default'
    console.log(y)
}
console.log('--------------------------------------')

// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша
// за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super!')
}
else if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super!')
}
else if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super!')
}
else if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super!')
}
else if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super!')
}
else if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super!')
}


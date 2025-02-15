// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const strings = ['hello world', 'lorem ipsum', 'javascript is cool']
strings.forEach(value => console.log(value.length))

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const upper_strings = strings.map(value => value.toUpperCase())
console.log(upper_strings);

// #ClDsAm7xba7
// - Перевести до нижнього регістру наступні стрінгові значення

const strings_2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']

const lower_strings = strings_2.map(value => value.toLowerCase())
console.log(lower_strings);

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// const str = ' dirty string   '
// console.log(str.trim())

// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

const str = 'Ревуть воли як ясла повні';
const str_to_array = (string) => string.split(' ')
const arr = str_to_array(str)
console.log(arr);

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
const new_str_array = array.map(value => value.toString())
console.log(new_str_array);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меньшого, або
// навпаки в залежності від значення аргументу direction.

const nums = [11, 21, 3];

function sortNums (array,direction) {
    if (direction !== 'asc' && direction !== 'desc'){
        console.log('Please, choose correct direction! (asc/desc')
    }

    const sortedArray = array.sort((a,b) => direction === 'asc' ? a -b : b - a)

    console.log(sortedArray)
    return sortedArray
}

sortNums(nums,'asc') // [3,11,21]
sortNums(nums,'desc') // [21,11,3]

// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const sorted_courses =
    [...coursesAndDurationArray].sort((a,b) => {
        return b.monthDuration - a.monthDuration
    })
console.log(sorted_courses)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const filtered_courses = coursesAndDurationArray.filter(value=> value.monthDuration >= 5)
console.log(filtered_courses);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const mapped_courses = coursesAndDurationArray.map(
    (value, index) => {return {id: index+1, ...value}}
)
console.log(mapped_courses);
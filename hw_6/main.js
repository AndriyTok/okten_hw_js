// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const strings = ['hello world', 'lorem ipsum', 'javascript is cool']
strings.forEach(element => console.log(element.length))

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

// підглянув з розбору
// const str = ' dirty string   '
// console.log(str.trim())

// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

const str = 'Ревуть воли як ясла повні';
const str_to_array = (string) => {
    if (string) {
        return string.split(' ')
    }
    else{
        return ''
    }

}
const arr = str_to_array(str)
console.log(arr);

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
const new_str_array = array.map(value => value.toString())
//з консультації:
// const strings = numbers.map(number => number + '');

console.log(new_str_array);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меньшого, або
// навпаки в залежності від значення аргументу direction.

const nums = [11, 21, 3];

function sortNums(array, direction) {
    if (direction !== 'asc' && direction !== 'desc') {
        console.log('Please, choose correct direction! (asc/desc')
    }

    const sortedArray = array.sort((a, b) => direction === 'asc' ? a - b : b - a)

    //from consultation
    // function sortNums(arrayOfNums, direction) {
    //     const sort = arrayOfNums.sort((a, b) => a - b);
    //     if (direction === 'asc') {
    //         return sort;
    //     }
    //     if (direction === 'desc') {
    //         return sort.reverse();
    //
    //     }
    //}

    console.log(sortedArray)
    return sortedArray
}

sortNums(nums, 'asc') // [3,11,21]
sortNums(nums, 'desc') // [21,11,3]

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
    [...coursesAndDurationArray].sort((a, b) => {
        return b.monthDuration - a.monthDuration
    })
console.log(sorted_courses)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const filtered_courses = coursesAndDurationArray.filter(value => value.monthDuration >= 5)
console.log(filtered_courses);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const mapped_courses = coursesAndDurationArray.map(
    (value, index) => {
        return {id: index + 1, ...value}
    }
)
console.log(mapped_courses)

// from_consultation

// const map1 = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => ({...value, id: index + 1}));

// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)

const deck = []

const suits = ['spade', 'diamond', 'heart', 'clubs']
const values = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king']

suits.forEach(suit => {
    values.forEach(value => {
        deck.push({
            cardSuit: suit,
            value: value,
            color: suit === 'diamond' || suit === 'heart' ? 'red' : 'black',
        })
    })
})

// - знайти піковий туз

const ace_of_spades = deck.find(value => value.cardSuit === 'spade' && value.value === 'ace' && value.color === 'black')
console.log(ace_of_spades)

// - всі шістки

const cards_6 = deck.filter(value => value.value === 6)
console.log(cards_6);

// - всі червоні карти

const red_cards = deck.filter(value => value.color === 'red')
console.log(red_cards);

// - всі буби

const diamond_cards = deck.filter(value => value.cardSuit === 'diamond')
console.log(diamond_cards);

// - всі трефи від 9 та більше
const club_cards = deck.filter(card => card.cardSuit === 'clubs' && (card.value >= 9 ||
    ['ace', 'jack', 'queen', 'king'].includes(card.value)))
console.log(club_cards);

//from_consultation
// console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

const suit_object = deck.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push({card_value: card.value, card_color: card.color})
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push({card_value: card.value, card_color: card.color})
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push({card_value: card.value, card_color: card.color})
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push({card_value: card.value, card_color: card.color})
    }
    return accumulator
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: [],
})
console.log(suit_object)

// #4LJn7zBx
// взяти з arrays.js масив coursesArray

const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в яких в modules є sass

const sass_objects = coursesArray.filter(course => course.modules.includes('sass'))
console.log(sass_objects)

// --написати пошук всіх об'єктів, в яких в modules є docker

const docker_objects = coursesArray.filter(course => course.modules.includes('docker'))
console.log(docker_objects)

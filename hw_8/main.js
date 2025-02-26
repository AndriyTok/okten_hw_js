// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function deepcopy (obj){
    const copy = JSON.stringify(obj)
    for (let key in copy){
        key = copy?.key
    }
    return JSON.parse(copy)
}

const user = {
    name: 'vasyl',
    surname: 'boyko',
    age:15,
    status: undefined,
}


console.log(deepcopy(user));

// #iz6emEsP2BA
// - є масив
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

const new_courses_array = coursesAndDurationArray.map(({title,monthDuration}, index) =>
    ({id: index, title, monthDuration})
)
console.log(new_courses_array);
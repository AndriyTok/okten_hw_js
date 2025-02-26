// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function deepcopy(obj){
    if (obj){
        const functions = []
        for (let key in obj){
            if (typeof(obj[key]) === 'function') {
                const function_clone = obj[key].bind({})
                functions.push({function_clone, key})
            }
        }
        const clone = JSON.parse(JSON.stringify(obj))
        for (const func of functions){
            clone[func.key] = func.function_clone
        }
        for (let key in clone) {
            if (clone[key] === null || clone[key] === undefined) {
                delete clone[key];
            }
        }

        return clone

    }

}

const user = {
    name: 'vasyl',
    surname: 'boyko',
    age:15,
    status: undefined,
    greeting() {console.log(`Hello, ${user.name}`)},
}


const new_user = deepcopy(user)
console.log(new_user);
new_user.greeting()
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
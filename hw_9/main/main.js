// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const div = document.createElement('div');
div.innerText = 'A div!!!!';
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.backgroundColor = 'gray';
div.style.fontSize = '1.6em';
div.style.fontColor = 'blue'

const div_2 = div.cloneNode(true); //cloneNode() is used to clone DOM-elements, argument true
document.body.append(div, div_2);              //tells us that we should also copy the content of an element

// #OPLI89c9G
// - Є масив:
const string_mas = ['Main', 'Products', 'About us', 'Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const ul = document.createElement('ul');
for (const item of string_mas) {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let courses_div = document.createElement('div');

//using .foreach() method
// coursesAndDurationArray.forEach((course, index) => {
//     const course_p = document.createElement('p');
//     course_p.innerText = `Course ${index+1}; Title: ${course.title}; Month_duration: ${course.monthDuration}`;
//     courses_div.appendChild(course_p);
// })

//using for of
for (const [index,course] of coursesAndDurationArray.entries()) {
    const course_p = document.createElement('p');
    course_p.innerText = `Course ${index + 1}; Title: ${course.title}; Month_duration: ${course.monthDuration}`;
    courses_div.appendChild(course_p);
}
document.body.appendChild(courses_div);     //.entries returns an iterator with indexes and array items

// #Kx1xgoKy8
// - Є масив (як у попередньому завданні)

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з
// title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

const container = document.createElement('div')
container.classList.add('container');

for (const course of coursesAndDurationArray) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.style.backgroundColor = '#66ffff';
    item.style.margin = '10px';

    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerText = course.title;

    const description = document.createElement('p');
    description.classList.add('description');
    description.innerText = 'MonthDuration: ' + course.monthDuration;

    item.append(heading, description);
    container.appendChild(item);
}
document.body.appendChild(container);
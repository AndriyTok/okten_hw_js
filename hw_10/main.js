document.addEventListener("DOMContentLoaded", function () {

// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".

    const p_id = document.getElementById("text");
    const button1 = document.getElementById('b1');

    button1.addEventListener("click", function (ev) {
        if (p_id.style.visibility === "hidden") {
            p_id.style.visibility = "visible";
        } else {
            p_id.style.visibility = "hidden";
        }
    });

// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
    const form_1 = document.getElementById('f1');
    const input_1 = document.querySelector('input[name="your_age"]');
    const info_div = document.createElement("div");

    form_1.addEventListener("submit", function (ev) {
        ev.preventDefault();
        if (input_1.value === "") {
            info_div.innerText = 'Please, enter your age!';
        } else {
            if (parseInt(input_1.value) < 18) {
                info_div.innerText = 'Your age is less than 18';
            } else if (parseInt(input_1.value) >= 18) {
                info_div.innerText = 'Your age is more than 18 or equal 18!';
            } else {
                info_div.innerText = 'Please, enter correct age!';
            }

        }
        form_1.insertAdjacentElement('afterend', info_div)
    })

// #ymAmN2xJ
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим
// об'єктом
    const form_2 = document.getElementById('f2');
    const object_div = document.createElement("div");

    form_2.addEventListener("submit", function (ev) {
        ev.preventDefault();

        const form_data = new FormData(form_2);
        const data = {};

        form_data.forEach((value, key) => {
            data[key] = value;
        })

        object_div.innerText = `Name: ${data['name']}
                                Surname: ${data['surname']}
                                Age: ${data['age']}`;

        form_2.insertAdjacentElement('afterend', object_div)
    })

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде
// додавати до неї +1

    const number_div = document.getElementById('number');
    let number = parseInt(localStorage.getItem('number')) || 0;
    number++;
    number_div.innerText = JSON.stringify(number);
    localStorage.setItem('number', JSON.stringify(number));

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається
// інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при
// відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в
// консоль, а малювати в DOM

    const date = new Date().toLocaleString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    const attend_dates = JSON.parse(localStorage.getItem('attend_dates')) || [];


    attend_dates.push(date)
    localStorage.setItem('attend_dates', JSON.stringify(attend_dates));


// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво,
// без натискань додаткових кнопок

    const weight_input = document.querySelector('input[name="weight"]');
    const formatted_weight_p = document.getElementById('formatted_weight');

    weight_input.addEventListener('input', function () {
        const formatted_weight =
            formatted_weight_p.innerText = `Weight in lb: ${parseFloat(weight_input.value) * 2.20462}`;
    })

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

    localStorage.setItem('test_arr', JSON.stringify([]))

    function addToLocalStorage(arrayName, objToAdd) {
        if (!localStorage.getItem(arrayName)) {
            console.log(`There is no such an array in localSrorage!`)
        } else {
            const array = JSON.parse(localStorage.getItem(arrayName));
            array.push(objToAdd);
            localStorage.setItem(arrayName, JSON.stringify(array));
        }
    }

    addToLocalStorage('test_arr', {name: 'Andrii', surname: 'Tokovyy'})

// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
    const row_count = document.querySelector('input[name="row_count"]')
    const column_count = document.querySelector('input[name="column_count"]')
    const content = document.querySelector('input[name="content"]')
    const table = document.createElement('table');
    const create_button = document.getElementById('create_button');

    create_button.addEventListener('click', function () {

        for (let i = 0; i <= parseInt(row_count.value); i++) {
            const tr = document.createElement('tr');
            for (let i = 0; i <= parseInt(column_count.value); i++) {
                const td = document.createElement('td');
                td.innerText = content.value;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        document.body.appendChild(table);
    })
});




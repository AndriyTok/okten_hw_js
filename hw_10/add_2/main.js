// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

//creating objects to be listed
const objects = []
for (let i = 0; i < 100; i++) {
    const obj = {id: i + 1, name: `Object${i + 1}`};
    objects.push(obj);
}

//getting HTML-elements from the index.html
const div = document.getElementsByTagName('div')[0];
const prev_button = document.getElementById('prev')
const next_button = document.getElementById('next')

//creating a variables and function to list proper elements
let current_position = parseInt(localStorage.getItem('current_position')) || 1;
const items_per_iteration = 10;

//a function to list correct 10 elements from mas
function display_elements() {
    let start_index = (current_position - 1) * items_per_iteration;
    let end_index = start_index + items_per_iteration
    if (current_position >= 1) {
        const listed_objects = objects.slice(start_index, end_index)
        div.innerHTML = ""
        const ul = document.createElement("ul");
        for (const listedObject of listed_objects) {
            const li = document.createElement("li");
            li.innerText = 'ID: ' + listedObject.id + ' Name: ' + listedObject.name;
            ul.appendChild(li);
        }
        div.appendChild(ul);
    }
}

display_elements()

//event for the 'prev' button
prev_button.addEventListener('click', function (){
    if (current_position > 1){
        current_position--
        localStorage.setItem('current_position', JSON.stringify(current_position));
        display_elements()
    }

});

//event for the 'next' button
next_button.addEventListener('click', function (){
    if (current_position < (objects.length / items_per_iteration)) {
        current_position++
        localStorage.setItem('current_position', JSON.stringify(current_position ));
        display_elements()
    }
});
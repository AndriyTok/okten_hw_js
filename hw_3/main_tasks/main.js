// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    const div = `<div>Lorem ipsum dolor sit amet.</div>`
    document.write(div)
}
document.write(`--------------------------------------------------------------`)

// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div><b>Paragraph ${i+1}:</b> Lorem ipsum dolor sit amet.</div>`)
}
document.write(`--------------------------------------------------------------`)

// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0
while(i<20){
    document.write(`<h1>lorem</h1>`)
    i++
}
document.write(`--------------------------------------------------------------`)

// #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0
while(j<20){
    document.write(`<h1>{i+1}lorem</h1>`)
    j++
}
document.write(`--------------------------------------------------------------`)

// vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
document.write(`<ul>`)
for (let item of listOfItems) {
    let li = `<li>${item}</li>`
    document.write(li)
}
document.write(`</ul>`)
document.write(`--------------------------------------------------------------`)

// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'data:image/jpeg;base64,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'
    },
];
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
for (let product of products){
    let template = `
        <div class="product-card">
        <h3 class="product-title">${product.title}. <i>Price - ${product.price}UAH</i></h3>
        <img src="${product.image}" alt="" class="product-image">
        </div>`
    document.write(template)
}
document.write(`--------------------------------------------------------------`)

//#4WrHwFTEop0
// є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

console.log(`Users with 'True' status:`)
for (let user of users){
    // if (user.status ===  true){ //змінив після перегляду розбору дз
    if (user.status){
        console.log(user.name)
    }
}
console.log("Users with 'False' status:")
for (let user of users){
    // if (user.status === false){ //змінив після перегляду розбору дз
    if (!user.status){
        console.log(user.name)
    }
}
console.log("Users who are older than 30 y.o.:")
for (let user of users){
    if (user.age > 30){
        console.log(user.name)
    }
}
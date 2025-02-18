// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

const user_1 = new User(1, 'Vasya', 'Petrov', 'petrov@gmail.com', +380951234531)
const user_2 = new User(2, 'Petya', 'Vasyliv', 'vasyliv@gmail.com', +3800965785469)
const user_3 = new User(3, 'Zhorik', 'Veselov', 'veselov@gmail.com', +380998745612)
const user_4 = new User(4, 'Andrii', 'Nadiiv', 'andriknad@gmail.com', +38045761212)
const user_5 = new User(5, 'Mykola', 'Veres', 'versm@gmail.com', +38097458621)
const user_6 = new User(6, 'Dmytro', 'Kuzia', 'kuzia@gmail.com', +380936264783)
const user_7 = new User(7, 'Vladyslav', 'Vladyslaviv', 'vladik01@gmail.com', +3807432145)
const user_8 = new User(8, 'Diana', 'Konova', 'konova@gmail.com', +3807451236)
const user_9 = new User(9, 'Anna', 'Anniuk', 'anna@gmail.com', +380999666554)
const user_10 = new User(10, 'Liza', 'Vasylkiv', 'liza@gmail.com', +38071456321)

const users = []
users.push(user_1, user_2, user_3, user_4, user_5, user_6, user_7, user_8, user_9, user_10)
console.log(users);

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

filtered_users = users.filter(user => user.id % 2 === 0)
console.log(filtered_users);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sorted_users = [...users].sort((user_1, user_2) => user_1.id - user_2.id)
console.log(sorted_users);

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі
// списком товарів). Створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = order
}

//asked GPT's advice to shorten the construction used for my previous users array
const client_data = [
    {
        id: 1,
        name: 'Vasya',
        surname: 'Petrov',
        email: 'petrov@gmail.com',
        phone: +380951234531,
        order: ['phone', 'tablet', 'book']
    },
    {
        id: 2,
        name: 'Petya',
        surname: 'Vasyliv',
        email: 'vasyliv@gmail.com',
        phone: +380965785469,
        order: ['laptop', 'mouse']
    },
    {
        id: 3,
        name: 'Zhorik',
        surname: 'Veselov',
        email: 'veselov@gmail.com',
        phone: +380998745612,
        order: ['monitor', 'keyboard']
    },
    {
        id: 4,
        name: 'Andrii',
        surname: 'Nadiiv',
        email: 'andriknad@gmail.com',
        phone: +38045761212,
        order: ['headphones', 'webcam']
    },
    {
        id: 5,
        name: 'Mykola',
        surname: 'Veres',
        email: 'versm@gmail.com',
        phone: +38097458621,
        order: ['tablet', 'stylus']
    },
    {
        id: 6,
        name: 'Dmytro',
        surname: 'Kuzia',
        email: 'kuzia@gmail.com',
        phone: +380936264783,
        order: ['phone', 'case', 'charger']
    },
    {
        id: 7,
        name: 'Vladyslav',
        surname: 'Vladyslaviv',
        email: 'vladik01@gmail.com',
        phone: +3807432145,
        order: ['smartwatch', 'wireless earbuds']
    },
    {
        id: 8,
        name: 'Diana',
        surname: 'Konova',
        email: 'konova@gmail.com',
        phone: +3807451236,
        order: ['gaming mouse', 'mouse pad']
    },
    {
        id: 9,
        name: 'Anna',
        surname: 'Anniuk',
        email: 'anna@gmail.com',
        phone: +380999666554,
        order: ['graphics tablet', 'pen']
    },
    {id: 10, name: 'Liza', surname: 'Vasylkiv', email: 'liza@gmail.com', phone: +38071456321, order: ['TV', 'soundbar']}
];

//using object destructuring in the .map method to sign values from the client_data to the new clients mas using
// new Client constructor
const clients = client_data.map(({id, name, surname, email, phone, order}) =>
    new Client(id, name, surname, email, phone, order))
console.log(clients);

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sorted_clients = [...clients].sort((client_1, client_2) =>
    client_1.order.length - client_2.order.length)

console.log(sorted_clients);


// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car(model, producer, year, max_speed, engine){
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.max_speed = max_speed
//     this.engine = engine
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function() {
//         console.log(`Їдемо зі швидкістю ${this.max_speed}км на годину`)
//     }
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = function () {
//         console.log(`
//             model: ${this.model}
//             producer: ${this.producer}
//             year: ${this.year}
//             max_speed: ${this.max_speed}
//             engine: ${this.engine}
//         `)
//     }
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.max_speed = this.max_speed + newSpeed
//         return this.max_speed
//     }
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = function (newValue) {
//         this.year = newValue
//         return this.year
//     }
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver = function (driver) {
//         this.driver = driver
//         return this.driver
//     }
//
// }


// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
class Car {
    constructor(model, producer, year, max_speed, engine) {
        this.model = model
        this.producer = producer
        this.year = year
        this.max_speed = max_speed
        this.engine = engine
    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`Їдемо зі швидкістю ${this.max_speed}км на годину`)
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        console.log(`
            model: ${this.model}
            producer: ${this.producer}
            year: ${this.year}
            max_speed: ${this.max_speed}
            engine: ${this.engine}
        `)
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.max_speed = this.max_speed + newSpeed
        return this.max_speed
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.year = newValue
        return this.year
    }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver) {
        this.driver = driver
        return this.driver
    }
}

//demonstration of the result:
const car_1 = new Car('M5', 'BMW', 2018, 260, 4.4)

car_1.info()
car_1.drive()
console.log(car_1.increaseMaxSpeed(20))
console.log(car_1.changeYear(2020));
console.log(car_1.addDriver({name: 'Andrii', age: 20}));
console.table(car_1)


// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name
        this.age = age
        this.foot_size = foot_size
    }
}

const cinderellas_data = [
    {name: 'Liza', age: 20, foot_size: 35},
    {name: 'Violetta', age: 22, foot_size: 41},
    {name: 'Victoria', age: 23, foot_size: 39},
    {name: 'Amanda', age: 19, foot_size: 31},
    {name: 'Linda', age: 26, foot_size: 32},
    {name: 'Rose', age: 25, foot_size: 33},
    {name: 'Kateryna', age: 25, foot_size: 31},
    {name: 'Valentyna', age: 28, foot_size: 36},
    {name: 'Sofiia', age: 21, foot_size: 37.5},
    {name: 'Tetiana', age: 17, foot_size: 32.4},
]

const cinderellas = cinderellas_data.map(({name, age, foot_size}) => new Cinderella(name, age, foot_size))
console.table(cinderellas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, found_shoe) {
        this.name = name;
        this.age = age;
        this.found_shoe = found_shoe;
    }
}

const prince = new Prince('Andrii', 20, 32.4)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// for (const cinderella of cinderellas) {
//     if (prince.found_shoe === cinderella.foot_size) {
//         console.log(`${prince.name} will be with ${cinderella.name}`)
//     }
// }

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const found_cinderella = cinderellas.filter(
    cinderella => prince.found_shoe === cinderella.foot_size)
console.log(found_cinderella);

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myforEach = function(array, callback){
    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i];
        //to_be_finished
    }
}
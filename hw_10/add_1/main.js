// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого
// є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

document.addEventListener('DOMContentLoaded', function () {
    const number_div = document.getElementsByTagName('div')[0]

    const last_time = JSON.parse(localStorage.getItem('last_time')) || 0;
    const current_time = Date.now()

    if (current_time - last_time >= 10000) {

        localStorage.setItem('last_time', JSON.stringify(current_time));

        let number = parseInt(localStorage.getItem('number')) || 100;
        number = number + 10;
        number_div.innerHTML = `${JSON.stringify(number)}грн`;
        localStorage.setItem('number', JSON.stringify(number));

    }
    else{
        let number = parseInt(localStorage.getItem('number')) || 100;
        number_div.innerHTML = `${JSON.stringify(number)}грн`;
        localStorage.setItem('number', JSON.stringify(number));
    }
})



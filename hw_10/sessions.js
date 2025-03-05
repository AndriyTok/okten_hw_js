document.addEventListener('DOMContentLoaded', function(){
    const attend_dates = JSON.parse(localStorage.getItem('attend_dates'));
    const info_div = document.createElement('div')
    for (let attend_date of attend_dates) {
        const info = document.createElement('p');
        info.innerText = `Visited on ${attend_date}`;
        info_div.appendChild(info);
    }
    document.body.appendChild(info_div);
    const clear_button = document.getElementById('clear')
    clear_button.addEventListener('click', function(){
        localStorage.clear()
        info_div.innerText = '';
    })
})
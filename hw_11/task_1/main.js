// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

const container = document.getElementById('container')

fetch('https://dummyjson.com/carts')
    .then((result) => result.json())
    .then(result => {
        console.log(result.carts);
        result.carts.forEach(cart => {
            const cart_div = document.createElement('div');
            cart_div.classList.add('cart');
            cart_div.innerHTML = `<p>Cart: ${cart.id}</p>`;

            const ul = document.createElement('ul');
            cart_div.appendChild(ul);

            Object.entries(cart)
                .filter(([key]) => key !== 'id')
                .map(([key, value]) => {
                    if (key !== 'products') {
                        const li = document.createElement('li');
                        li.innerText = `${key}: ${value}`;
                        ul.appendChild(li);
                    }
                    else{
                        const li = document.createElement('li');
                        li.innerText = `products`
                        const product_ul_list = document.createElement('ul');


                        Object.entries(value).map(([key, values]) => {
                            const product_li = document.createElement('li');
                            product_li.innerText = `product ${parseInt(key)+1}`;
                            product_ul_list.appendChild(product_li);
                            const product_ul = document.createElement('ul');
                            for ([key, value] of Object.entries(values)) {
                                if (key === 'thumbnail'){
                                   const product_detail_li = document.createElement('li')
                                   product_detail_li.innerHTML = `<label>photo:</label>
                                    <br><img src='${value}' alt='some_alt'>`
                                   product_ul.appendChild(product_detail_li);
                                }
                                else{
                                const product_detail_li = document.createElement('li')
                                product_detail_li.innerText = `${key}: ${value}`;
                                product_ul.appendChild(product_detail_li);
                                }
                            }
                            product_li.appendChild(product_ul);
                            product_ul_list.appendChild(product_li);
                        })
                        li.appendChild(product_ul_list);
                        ul.appendChild(li);
                    }
                })
            container.appendChild(cart_div);

        })
    })



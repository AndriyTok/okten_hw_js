// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під
// час відображення.

const container = document.getElementById('container')

fetch('https://dummyjson.com/recipes')
    .then((result) => result.json())
    .then(result => {
        console.log(result.recipes);

        result.recipes.map(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `<h3>${recipe.name}</h3>`;

            const ul = document.createElement('ul');
            recipeDiv.appendChild(ul);

            Object.entries(recipe).forEach(([key, value]) => {
                if (key === 'name') return;

                const li = document.createElement('li');

                if (Array.isArray(value)) {
                    li.innerText = `${key}:`;
                    const nestedUl = document.createElement('ul');

                    value.map(item => {
                        const nestedLi = document.createElement('li');
                        nestedLi.innerText = item;
                        nestedUl.appendChild(nestedLi);
                    });

                    li.appendChild(nestedUl);
                } else {
                    li.innerText = `${key}: ${value}`;
                }

                ul.appendChild(li);
            });

            container.appendChild(recipeDiv);
        });
    });

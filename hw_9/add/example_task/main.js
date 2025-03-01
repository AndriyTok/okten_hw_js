// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    const course_div = document.createElement('div');
    course_div.classList.add('course_div');
    const title_div = document.createElement('div');
    title_div.classList.add('title_div');
    title_div.innerHTML = `<h1>${course.title}</h1>`
    const duration_div = document.createElement('div');
    duration_div.classList.add('duration_div');
    const monthDuration_div = document.createElement('div');
    monthDuration_div.classList.add('monthDuration_div');
    monthDuration_div.innerHTML = `<p>Month duration: ${course.monthDuration}</p>`
    const hourDuration_div = document.createElement('div');
    hourDuration_div.classList.add('hourDuration_div');
    hourDuration_div.innerHTML = `<p>Hour duration: ${course.hourDuration}</p>`
    duration_div.append(monthDuration_div, hourDuration_div);
    const modules_div = document.createElement('div');
    modules_div.classList.add('modules_div');
    const modules_ul = document.createElement('ul');
    modules_ul.classList.add('modules_ul');
    for (const module of course.modules) {
        const module_li = document.createElement('li');
        module_li.innerText = module;
        modules_ul.appendChild(module_li);
    }
    modules_div.appendChild(modules_ul);
    course_div.append(title_div, duration_div, modules_div);
    document.body.appendChild(course_div);
}


//  створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.
//  створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.
const texts = [
    'Це короткий текст.',
    'Це текст середньої довжини. Він трохи довший.',
    'Це найдовший текст, який ми маємо для тесту висоти блоків.'
];

const blocks = texts.map(text => {
    const block = document.createElement('div');
    block.classList.add('block');
    block.innerText = text;
    document.body.appendChild(block);
    return block;
});

const maxHeight = Math.max(...blocks.map(block => block.offsetHeight));

blocks.forEach(block => {
    block.style.height = `${maxHeight}px`;
});

const style = document.createElement('style');
style.textContent = `
    .block {
        width: 300px;
        margin: 10px;
        padding: 20px;
        border: 2px solid black;
        font-family: Arial, sans-serif;
    }
    body {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`;
document.head.appendChild(style);

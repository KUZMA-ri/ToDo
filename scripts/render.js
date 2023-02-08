import { result } from '../app.js';
import { createElement } from "./createElement.js";

export function render(arrTodo) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    arrTodo.forEach((el) => {
        const shellTodo = createElement('div', 'shellTodo');
        shellTodo.id = el.id;
        const performedBtn = createElement('button', 'btn todoBtnReady');
        const textTodo = createElement('p', 'todoText col-9', el.text);
        const closeBtn = createElement('button', 'btn todoBtnDelete btnActive', '🞩');

        if(el.isChecked) {
            performedBtn.innerText = '✓';
            shellTodo.style.backgroundColor = 'grey';
            textTodo.style.textDecoration = 'line-through';
        };
        
        const dataText = createElement('span', 'dataText', el.date);
        shellTodo.append(performedBtn, textTodo, closeBtn, dataText);
        container.append(shellTodo);
    });
    result()
};
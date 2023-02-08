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
            performedBtn.style.backgroundColor = '#fff78b';
            performedBtn.style.boxShadow = 'rgba(0, 0, 0, 0.5) 0px 3px 8px';
            shellTodo.style.backgroundColor = 'lightgrey';
            textTodo.style.textDecoration = 'line-through';
        };
        
        const dataText = createElement('span', 'dataText', el.date);
        shellTodo.append(performedBtn, textTodo, dataText, closeBtn);
        container.append(shellTodo);
    });
    result()
};
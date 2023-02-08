import { getDate } from './scripts/date.js';
import { createElement, createInput } from './scripts/createElement.js';
import { render } from './scripts/render.js';
import { getName, setName } from './scripts/localStorage.js';

const root = document.getElementById('root');
const container = createElement('div', 'container');
const formTodo = createElement('form', 'todo');
const todoTitle = createElement('div', 'todoTitle');
const deleteAllBtn = createElement('button', 'btn col-3 btn-lg', 'Delete All');
const nameTodo = createInput('input', 'nameTodo col-6', 'text', 'Enter todo');
const addBtn = createElement('button', 'btn col-3 btn-lg', 'Add');
const search = createElement('div', 'searchTodo');
const res = createElement('p', 'col-3 res', 'All: 0 Completed: 0');
const showAllBtn = createElement('button', 'btn col-3 btn-md', 'Show All');
const showCompleteBtn = createElement('button', 'btn col-3 btn-md', 'Show Completed');
const searchInput = createInput('input', 'search col-3', 'text', 'Search...');


root.append(formTodo);
formTodo.append(todoTitle, search, container);
todoTitle.append(deleteAllBtn, nameTodo, addBtn);
search.append(res, showAllBtn, showCompleteBtn, searchInput);


let todos = getName();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(nameTodo.value !== '') {
        todos.push({
            id: Math.random(),
            date: getDate(),
            text: nameTodo.value,
            isChecked: false,
        }),
        nameTodo.value = '';
        setName(todos);
        render(todos);
    }
    else {
        nameTodo.style.borderColor = 'red';
    }
});

nameTodo.addEventListener('keydown', (e) => {
    if(nameTodo.value !== '' && e.code === 'Enter') {
        e.preventDefault();
        todos.push({
            id: Math.random(),
            date: getDate(),
            text: nameTodo.value,
            isChecked: false,
        }),
        nameTodo.value = '';
        setName(todos);
        render(todos);
    } else if (nameTodo.value === '' && e.code === 'Enter') {
        e.preventDefault();
        nameTodo.style.borderColor = 'red';
    }
});

deleteAllBtn.addEventListener('click', (e) => {
    e.preventDefault();
    todos.length = 0;
    setName(todos);
    render(todos);
});

container.addEventListener('click', ({target, tagName}) => {
    if((tagName = 'DIV') && target.classList.contains('shellTodo')) {
        let todo = todos.find((el) => el.id === +target.id);
        let indexTodo = todos.indexOf(todo);
        todos[indexTodo].isChecked = todos[indexTodo].isChecked === false ? true : false;
    }

    if((tagName = 'BUTTON') && target.textContent === '🞩') {
        let divTodo = target.closest('.shellTodo');
        let todo = todos.find((el) => el.id === +divTodo.id);
        let indexTodo = todos.indexOf(todo);
        todos.splice(indexTodo, 1);
    }

    if((tagName = 'BUTTON') && target.classList.contains('todoBtnReady')) {
        let divTodo = target.closest('.shellTodo');
        let todo = todos.find((el) => el.id === +divTodo.id);
        let indexTodo = todos.indexOf(todo);
        todos[indexTodo].isChecked = todos[indexTodo].isChecked === false ? true : false;
    }

    if((tagName = 'P') && target.classList.contains('todoText')) {
        let divTodo = target.closest('.shellTodo');
        let todo = todos.find((el) => el.id === +divTodo.id);
        let indexTodo = todos.indexOf(todo);
        todos[indexTodo].isChecked = todos[indexTodo].isChecked === false ? true : false;
    }
    searchInput.value = '';
    setName(todos);
    render(todos);
});

showCompleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let arr = todos.filter((el) => el.isChecked === true);
    render(arr);
});

searchInput.addEventListener('input', () => {
    let searchArray = todos.filter((el) => {
        return el.text.toLowerCase().includes(searchInput.value.toLowerCase());
    })
    render(searchArray);
});

searchInput.addEventListener('mouseout', (e) => {
    e.preventDefault();
    searchInput.value = '';
});

export function result() {
    let count = 0;
    todos.forEach((el) => {
        if(el.isChecked) {
            count++
        }
    });
    res.innerText = `All: ${todos.length}, Completed: ${count}`;
}

render(todos);






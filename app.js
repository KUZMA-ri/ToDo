'use strict';
// ----------------------------------------------------------------------------------------------------------------------------------
import {createElement} from './helpers.js';
import {getDate} from './helpers.js';
// -----------------------------------------------------------------------------------------------------------------------------------

const root = document.getElementById('root');
let container = createElement('div', 'container');                          // container
let nav = createElement('div', 'nav');                                      // nav (delete, enter, add)
let tasks = createElement('div','tasks');                                   // tasks

const btnDelete = createElement('button','nav__btn-delete','Delete All');     // button delete
    btnDelete.addEventListener('click', () => (tasks.innerHTML = ''));                  //__________on 'click' delete all tasks

const btnAdd = createElement('button','nav__btn-add','Add');                  // button Add
    btnAdd.addEventListener('click', (e) => {
        createTask();                                                                    //__________on 'click' create task
    });                             


const inputTasks = createElement('input','nav__input','Enter todo...');       // input (enter tasks)
    inputTasks.addEventListener('keydown', (e) => {                                     
        if(e.keyCode === 13) {                                                      //__________on press 'enter' create task
            createTask();
        }
    });

root.append(container);
container.append(nav, tasks);
nav.append(btnDelete, inputTasks, btnAdd);

// --------------------------------------------------------------------------------------------------

// CREATE TASK
function createTask() {
    const task = createElement('div','tasks__task');                      // task
        task.addEventListener('click', (e) => {                           // on press button "X" close task & on click in checkbox change bg
            if ((e.tagName = 'BUTTON' && e.target.textContent === 'X')) {
                task.remove();
            } else if ((e.tagName = 'INPUT') && (e.target.className === 'task__checkbox')) {
                let target = e.target;
                    if(target.checked){
                        toDo.style.textDecoration = "line-through";
                        toDo.style.color = 'grey';
                        toDo.style.backgroundColor = 'lightGrey';
                    } else {
                        toDo.style.textDecoration = "none";
                        toDo.style.color = 'black';
                        toDo.style.backgroundColor = 'white';                
                }
            }
        }); 
    
    const btnClose = createElement('button','task__btn-close','X');       // button Close (X)
    const fieldOfTask = createElement('div','task__field');               // checkbox + input (container)
    const checkbox = createElement('input','task__checkbox','', 'checkbox','');      // checkbox
    const toDo = createElement('input','task__toDo');
        if(!inputTasks.value) {
            return
        } else if(inputTasks.value != ''){
            toDo.value = inputTasks.value;                      //__________add value from input to tasks     
            inputTasks.value = ''; 
        };

    let date = createElement('time', 'task__date'); 
    date.innerHTML = `${getDate()}`
// --------------------------------------------------------------------------------------------------------
// TODOS
    let todos = getName();
    const newToDo = {
        id: Math.floor(Math.random() * 10000),
        date: getDate(),                
        text: toDo.value,
        isCompleted: false,
    };
    todos.push(newToDo);
    console.log(todos);
// SET
    function setName() {
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    setName();
// GET
    function getName() {
        return JSON.parse(localStorage.getItem('todos')) ?? [];
    };

// DOM load
    document.addEventListener("DOMContentLoaded", () => {
        JSON.parse(localStorage.getItem('todos'));
    });

    tasks.append(task);
    fieldOfTask.append(checkbox,toDo);
    task.append(btnClose, fieldOfTask,date);
};
// --------------------------------------------------------------------------------------------------------------
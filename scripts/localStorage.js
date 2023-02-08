export function setName(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
};

export function getName() {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
};

export function createElement(tag, className, text) {
    let el = document.createElement(tag);
    text ? (el.innerText = text) : null;

    if (className) {
        let arr = className.split(' ');
        for (let elArr of arr) {
            el.classList.add(elArr);
        }
    }
    return el;
}


export function createInput(tag, className, type, placeholder) {
    let el = document.createElement("input");
    type ? (el.type = type) : null;
    if (className) {
        let arr = className.split(' ');
        for (let elArr of arr) {
            el.classList.add(elArr);
        }
    }
    placeholder ? (el.placeholder = placeholder) : null;
    return el;
}
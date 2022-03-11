
const todos = [];
const render = function () {
    const parent_container = document.getElementById('list-container');
    parent_container.innerHTML = '';
    for (let i = 0; i < todos.length; i += 1) {
        const new_li = document.createElement('li');
        new_li.innerText = todos[i];
        parent_container.appendChild(new_li);
        parent_container.style.color = 'red';
        parent_container.style.fontWeight = 'bold';
        parent_container.style.border = '2px solid white';
        new_li.style.border = '2px solid red';
        new_li.style.marginTop = '5px';
        new_li.style.backgroundColor = 'white';
        parent_container.style.fontFamily = 'courier monospace';
    }
}
const add_item = function () {
    const ip = document.getElementById('todo-input');
    const new_todo = ip.value;
    todos.push(new_todo);
    ip.value = "";
    render();
}
const buttn = document.getElementById('add-btn');
buttn.addEventListener('click', add_item);

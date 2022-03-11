
const todos = [];
const render = function (id) {
    //  here are getting reference
    const parent_container = document.getElementById('home-list-item');
    parent_container.innerHTML = '';
    for (let i = 0; i < todos.length; i += 1) {
        const new_li = document.createElement('li');
        new_li.innerText = todos[i];
        parent_container.appendChild(new_li);
        parent_container.style.color = 'blue';
        parent_container.style.fontWeight = 'bold';
        parent_container.style.background = 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(229,236,243,1) 100%)';
        parent_container.style.padding = '6px';
        parent_container.style.margin = '5px 0px 0 5px';
        parent_container.style.border = '4px solid #ea718a';
        parent_container.style.fontFamily = 'courier monospace';
        // for add new_li styling
        new_li.style.border = '2px solid #9180df';
        new_li.style.margin = '5px';
        new_li.style.padding = '6px';
        new_li.style.background = 'linear-gradient(90deg, rgba(196,188,191,1) 15%, rgba(107,113,120,1) 100%)'
    }
}
const add_item = function () {
    const ip = document.getElementById('ip-home-text');
    const new_todo = ip.value;
    todos.push(new_todo);
    ip.value = "";
    render();
}
const buttn = document.getElementById('home-btn');
buttn.addEventListener('click', add_item);

// for close the div or pop
function close_div(id) {
    if( id == 'home'){
        document.getElementById('home').style.display = 'none';
    }else if( id == 'routine') {
        document.getElementById('routine').style.display = 'none';
    }else if(id == 'favorite') {
        document.getElementById('favorite').style.display = 'none';
    }
    else if(id == 'buy') {
        document.getElementById('buy').style.display = 'none';
    }else {
        document.getElementById('work').style.display = 'none';
    }
}
//function for popup menu
function clicked(n) {
    if (n == 'home') {

        document.getElementById('home').style.display = "inline";
        document.getElementById('routine').style.display = "none";
        document.getElementById('favorite').style.display = "none";
        document.getElementById('buy').style.display = "none";
        document.getElementById('work').style.display = "none";
    }
    else if (n == 'routine') {
        document.getElementById('home').style.display = "none";
        document.getElementById('routine').style.display = "inline";
        document.getElementById('favorite').style.display = "none";
        document.getElementById('buy').style.display = "none";
        document.getElementById('work').style.display = "none";
    }
    else if (n == 'favorite') {
        document.getElementById('home').style.display = "none";
        document.getElementById('routine').style.display = "none";
        document.getElementById('favorite').style.display = "initial";
        document.getElementById('buy').style.display = "none";
        document.getElementById('work').style.display = "none";
    }
    else if (n == 'buy') {
        document.getElementById('home').style.display = "none";
        document.getElementById('routine').style.display = "none";
        document.getElementById('favorite').style.display = "none";
        document.getElementById('buy').style.display = "initial";
        document.getElementById('profile').style.display = "none";
    }
    else{
        document.getElementById('home').style.display = "none";
        document.getElementById('routine').style.display = "none";
        document.getElementById('favorite').style.display = "none";
        document.getElementById('buy').style.display = "none";
        document.getElementById('work').style.display = "initial";
    }
}
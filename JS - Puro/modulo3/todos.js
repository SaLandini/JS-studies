var listElemeny = document.querySelector('#app ul');
var inputElemeny = document.querySelector('#app input');
var buttonElemeny = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElemeny.innerHTML = '';

    for(let todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement =document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElemeny.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElemeny.value;

    todos.push(todoText);
    inputElemeny.value = '';
    renderTodos();
    saveToStorage();
}

buttonElemeny.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
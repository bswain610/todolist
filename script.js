// selcect Dom elements

const todoInput = document.getElementById("todo-inpu");
const addBtn = document.getElementById("add-btn");
const todoList = Document.getElementById("todo-List");


// try to load saved todos from localstorage(if any)

const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

function SaveTodos(){
    //save to current todos array to localstorage
    localStorage.setItem("todos", JSON.stringify(todos));
}

// create a dom node for a todo object and append it to the todo list 

function createTodoNode(todo, index){

}

//render the whole todo list from todos array
function render(){
    todoList.innerHTML = '';



//Recreate each item 
todos.foreach((todo, index) =>{
    const node = createTodoNode(node, index);
    todoList.appendChild(node);
});
}
// selcect Dom elements

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");



// try to load saved todos from localstorage(if any)

const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

function SaveTodos(){
    //save to current todos array to localstorage
    localStorage.setItem("todos", JSON.stringify(todos));
}

// create a dom node for a todo object and append it to the todo list 

function createTodoNode(todo, index){
    const li = document.createElement("li");

    // checkbox to toggle completion
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !!todo.completed;
    checkbox.addEventListener("change", ()=>{
        todo.completed = checkbox.checked;

        //TODO: visual feedback :strike through when completed

        SaveTodos();
    })
    // text of the todo
    const textSpan = document.createElement("span");
    textSpan.textContent = todo.text;
    textSpan.style.margin = '0 8px';
    if(todo.completed){
        textSpan.style.textDecoration = "line-through";
         }

        // Add double-click event listener to edit the todo
        textSpan.addEventListener("dblclick", ()=>{
            const newText = prompt("Edit todo:", todo.text);
            if(newText !== null){
                todo.text = newText.trim();
                textSpan.textContent = todo.text;

                SaveTodos();
            }
        })

           
        // Delete Todo Button 
        const delBtn = document.createElement('button');
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", ()=>{
            todos.splice(index, 1);
            render();
            SaveTodos();
        })

      li.appendChild(checkbox);
      li.appendChild(textSpan);
      li.appendChild(delBtn);
      return li;

}

//render the whole todo list from todos array
function render(){
    
    list.innerHTML = '';





//Recreate each item 
todos.foreach((todo, index) =>{
    const node = createTodoNode(node, index);
    todoList.appendChild(node);
});
}


function addTodo(){
    const text = todoInput.value.trim();
    if(!text){
        return;
    }
    //push a new todo object
    todos.push({
        text,
        completed:false
        
    })
    input.value = '';
    render();
    SaveTodos();
}

addBtn.addEventListener("click",addTodo);
render();

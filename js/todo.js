const TODOS_KEY = "todos";

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
//toDo 배열
let toDos = [];

function handleTodoSubmit(event){
    event.preventDefault();
    //todoInput 저장 및 초기화
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    };
    //todo toDos배열에 push
    toDos.push(newTodoObj);
    saveTodos();
    paintTodo(newTodoObj);
}

//todo를 그리는 함수 , 매개변수 obj
function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo);

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(arr => {
        return arr.id !== parseInt(li.id);
    });
    
    saveTodos();
    li.remove();
}

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}



todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    toDos = JSON.parse(savedTodos);
    toDos.forEach(element => {
        paintTodo(element);
    });
}else{

}
const TODOS_KEY = "todos";

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
//toDo 배열
const toDos = [];

function handleTodoSubmit(event){
    event.preventDefault();
    //todoInput 저장 및 초기화
    const newTodo = todoInput.value;
    todoInput.value = "";
    //todo toDos배열에 push
    toDos.push(newTodo);
    saveTodos();
    paintTodo(newTodo);
}

//todo를 그리는 함수
function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteTodo);

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function deleteTodo(event){
    const li = event.target.parentElement;    
    li.remove();
}

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(element => {
        paintTodo(element);
    });
}else{

}
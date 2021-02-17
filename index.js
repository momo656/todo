const todos = [];

const addTodo = () => {
  const todoInput = document.getElementById("todoInput");
  const todoInputValue = todoInput.value;
  if (todoInputValue) {
    todos.push(todoInputValue);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
    showTodos();
  } else {
    alert("todo must not be em pty");
  }
};
const clearAll = () => {
  todos.length = 0;
  localStorage.clear();
  showTodos();
};

const showTodos = () => {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  (JSON.parse(localStorage.getItem("todos")) ?? []).forEach((value) => {
    const div = document.createElement("div");
    const t = document.createTextNode(value);
    div.appendChild(t);
    todoList.appendChild(div);
  });
};
setTimeout(() => showTodos(), 50);

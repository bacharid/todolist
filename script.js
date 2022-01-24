const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

const errorMsg = document.querySelector('.errorMsgContent');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const newTodo = document.createElement('li');
  if (todoInput.value === '') {
    errorMsg.classList.toggle('hidden');
    return;
  } else {
    errorMsg.classList.add('hidden');
    newTodo.innerText = todoInput.value;
  }

  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');

  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');

  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
  todoInput.value = '';
}

function deleteCheck(event) {
  const ele = event.target;
  const todo = ele.parentElement;
  if (ele.classList[0] === 'trash-btn') {
    todo.remove();
  }
  if (ele.classList[0] === 'complete-btn') {
    todo.classList.toggle('done');
  }
}

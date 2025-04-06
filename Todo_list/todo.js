let todoList = [
  {
    item: 'Buy Milk',
    dueDate: '2023-04-10'
  },
  {
    item: 'Go to College',
    dueDate: '2023-04-10'
  }
];

displayItems();

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
toggleDarkMode();

function addTodo() {
  const inputElement = document.querySelector('#todo-input');
  const dateElement = document.querySelector('#todo-date');
  const todoItem = inputElement.value.trim();
  const todoDate = dateElement.value;

  if (todoItem === '' || todoDate === '') {
    alert('Please enter both task and date!');
    return;
  }

  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  const containerElement = document.querySelector('.todo-container');
  containerElement.innerHTML = '';

  todoList.forEach((todo, index) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const taskSpan = document.createElement('span');
    taskSpan.classList.add('todo-text');
    taskSpan.textContent = todo.item;

    const dateSpan = document.createElement('span');
    dateSpan.classList.add('todo-date');
    dateSpan.textContent = todo.dueDate;

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('todo-actions');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn-delete');
    deleteBtn.textContent = '✖';
    deleteBtn.onclick = function () {
      todoList.splice(index, 1);
      displayItems();
    };

    actionsDiv.appendChild(deleteBtn);
    todoItem.appendChild(taskSpan);
    todoItem.appendChild(dateSpan);
    todoItem.appendChild(actionsDiv);

    containerElement.appendChild(todoItem);
  });
}

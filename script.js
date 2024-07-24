document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';

        const todoTextElement = document.createElement('span');
        todoTextElement.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(todoTextElement);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);

        todoInput.value = '';
    }
}

document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const input = document.getElementById('todo-input');
    const newTodoText = input.value.trim();
    
    if (newTodoText !== '') {
        const li = document.createElement('li');
        li.textContent = newTodoText;
        
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
        
        li.appendChild(deleteBtn);
        document.getElementById('todo-list').appendChild(li);
        
        input.value = '';
    }
});

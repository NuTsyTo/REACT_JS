document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addTask').addEventListener('click', addTask);
});

function addTask(){
    const newTask = document.getElementById('newTask').value;
    if (newTask !== ''){
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        taskItem.textContent = newTask;
        taskList.appendChild(taskItem);
        document.getElementById('newTask').value = '';
    }
}
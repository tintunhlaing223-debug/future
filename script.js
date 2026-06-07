const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');
const showBtn = document.getElementById('showBtn');
const todoList = document.getElementById('todoList');

function loadTasks() {
    let saveTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    saveTasks.forEach(taskText => {
        createTaskElement(taskText);
    });
}

function saveTasks() {
    let allTasks = todoList.querySelectorAll('li');
    let taskArray = [];
    allTasks.forEach(li => {
        taskArray.push(li.textContent);
    });
    localStorage.setItem('myTasks',JSON.stringify(taskArray));
}

function createTaskElement(taskText) {
    let li = document.createElement('li');
    li.className = "bg-gray-50 p-3 rounded-xl border border-gray-200 shadow-sm";
    li.textContent = taskText;
    todoList.appendChild(li);
}

addBtn.onclick = function () {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please write something.")
        return;
    }

    createTaskElement(taskText);
    saveTasks();
    taskInput.value = "";
}

deleteBtn.onclick = function () {
    let lastTask = todoList.lastElementChild;
    if (lastTask) {
        todoList.removeChild(lastTask);
        saveTasks();
    } else {
        alert("There have no anything.")
    }
};

showBtn.onclick = function () {
    let allTasks = todoList.querySelectorAll('li');
    if (allTasks.length === 0) {
        alert("There have nothing to show.");
        return;
    }
    let taskListString = "My to do list\n";
    allTasks.forEach((li, index) => {
        taskListString += `${index + 1}.${li.textContent}\n`;
    });
    alert(taskListString);
};

loadTasks();
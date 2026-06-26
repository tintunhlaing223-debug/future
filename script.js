let allTasks = [];
const inputField = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

button.onclick = function(){
    if(inputField.value === ""){
        return;
    }else{
        let taskObject = {
            id:Date.now(),
            text: inputField.value,
            done: false
        };
        allTasks.unshift(taskObject);
        saveTasks();
        renderTasks();
        inputField.value= "";
    }
};

function renderTasks(){
    todoList.innerHTML= "";
    allTasks.forEach(function(taskValue){
    let newLi = document.createElement('li');
    newLi.className= "flex justify-between items-center bg-white p-3 my-2 rounded-lg shadow-md border border-green-500";

    let taskText =document.createElement('span');
    taskText.className = "cursor-pointer text-gray-800 font-medium";
    taskText.textContent= taskValue.text;

    if(taskValue.done===true){
        taskText.classList.add("line-through","text-gray-400");
    }

    taskText.onclick = function(){
        taskValue.done = !taskValue.done;
        saveTasks();
        renderTasks();
    };
    newLi.appendChild(taskText);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "bg-red-500 text-white px-3 py-1 rounded rounded-md hover:bg-red-600 text-sm";

    deleteBtn.onclick= function(){
        allTasks= allTasks.filter(item => item.id !== taskValue.id);
        saveTasks();
        renderTasks();
    };
    newLi.appendChild(deleteBtn);
    todoList.appendChild(newLi);
});
}
function saveTasks(){
    localStorage.setItem('todoItems',JSON.stringify(allTasks));
}

let saveTasksData = JSON.parse(localStorage.getItem('todoItems'));
if(saveTasksData){
    allTasks = saveTasksData;
    renderTasks();
};
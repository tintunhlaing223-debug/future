const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.onclick = function () {
    let taskText = taskInput.value.trim();

    if (taskText == "") {
        alert("Pleace write something to work.");
        return;
    }

    let li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-200 shadow-sm animate-fade-in";

    li.innerHTML = `
    <span class= "text-gray-800 font-medium">${taskText}</span>
    <button class="deleteBtn text-red-500 hover:text-red-700 font-bold bg-red-50 hover:bg-red-100 px-3 py-1 rounded-lg transition duration-200"> Delete </button>
    `;

    li.querySelector('.deleteBtn').onclick = function () {
        li.remove();
    }

    todoList.appendChild(li);

    taskInput.value = "";
}

const myForm = document.getElementById("myForm");

const emaillnput = document.getElementById("userEmail");

myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const currentEmail = emaillnput.value;

    alert(' Traco ' + currentEmail + ' you get message.')
});
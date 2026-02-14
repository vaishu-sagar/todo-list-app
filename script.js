const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click", addTask);

function addTask() {

    if (input.value.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    const taskText = input.value;

    tasks.push(taskText);

    renderTasks();

    input.value = "";
}

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = function () {
            deleteTask(index);
        };

        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

li.addEventListener("click", function () {
    li.classList.toggle("completed");
});

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

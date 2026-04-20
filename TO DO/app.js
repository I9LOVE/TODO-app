


const btn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const cleartasksBtn = document.getElementById("last-deleted-btn");
btn.addEventListener("click", createtask);
function createtask() {
    const taskInput = document.getElementById("todo-input");

    const taskText = taskInput.value.trim();

    if (taskText !== "") {

       const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        const taskList = document.getElementById("pending-tasks");
        const li = document.createElement("li");
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));
        const latestTaskList = document.getElementById("pending-tasks");
        latestTaskList.appendChild(li);
        taskInput.value = "";
    }
}






function clearTasks() {
   const taskList = document.getElementById("pending-tasks");
   taskList.innerHTML = "";
}


function deleteLastTask() {
     const latestTaskList = document.getElementById("pending-tasks");
     latestTaskList.removeChild(latestTaskList.lastChild)
}



btn.addEventListener("click", createtask);
clearBtn.addEventListener("click", clearTasks);
cleartasksBtn.addEventListener("click",deleteLastTask)

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = ""; 
  }
});

function deleteTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

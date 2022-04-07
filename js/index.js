//initialize a new instance of TaskManager

const newTask = new TaskManager();
const newTask2 = new TaskManager();
newTask2.addTask("JS", "Test", "Tierra", 10, status);
// console.log(newTask2);

// Event Listener for task form

const newTaskForm = document.querySelector("#submitBtn");
newTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

const newTaskName = document.querySelector("#");
const newTaskDescription = document.querySelector("#");
const newTaskAssigned = document.querySelector("#");
const newTaskDue = document.querySelector("#");

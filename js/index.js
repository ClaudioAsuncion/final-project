//initialize a new instance of TaskManager

const taskManager = new TaskManager(0);
//new task form
// const newTask2 = new TaskManager();
// newTask2.addTask("JS", "Test", "Tierra", 10, status);
// console.log(newTask2);

// Event Listener for task form

const newTaskForm = document.querySelector("#submitBtn");
newTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // input selecttion
  const newTaskName = document.querySelector("#name");
  const newTaskDescription = document.querySelector("#description");
  const newTaskAssigned = document.querySelector("#assignedto");
  const newTaskDue = document.querySelector("#date");
  const error = document.querySelector("#error");
  //form validation

  // function validFormInput() {}

  // if (!validFormInput()) {
  //   error.innerHTML = "Please Enter Required Inputs";
  // } else {
  //   error.style.display = "none";
  // }
  // const validFormInput = (data) => {
  //   return data !== null && data !== " ";
  // };
  // value of each input
  const taskName = newTaskName.value;
  const description = newTaskDescription.value;
  const assigned = newTaskAssigned.value;
  const dueDate = newTaskDue.value;

  taskManager.addTask(name, description, assignedTo, dueDate);

  //form clearing

  newTaskName.value = "";
  newTaskDescription.value = "";
  newTaskAssigned.value = "";
  newTaskDue.value = "";
});

let taskHtml = createTaskHtml(
  "tierra practice",
  "js practice",
  "Tierra",
  "03/03/2022"
);
console.log(taskHtml);

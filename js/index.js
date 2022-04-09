const taskManager = new TaskManager(0);

const newTaskForm = document.querySelector("#newTaskForm");
//form event listener
newTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTaskName = document.querySelector("#newTaskName");
  const newTaskDescription = document.querySelector("#newTaskDescription");
  const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
  const newTaskDueDate = document.querySelector("#newTaskDueDate");

  /*
        Validation code here
    */

  const name = newTaskName.value;
  const description = newTaskDescription.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;

  taskManager.addTask(name, description, assignedTo, dueDate);

  taskManager.render();

  newTaskName.value = "";
  newTaskDescription.value = "";
  newTaskAssignedTo.value = "";
  newTaskDueDate.value = "";
});

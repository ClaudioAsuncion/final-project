const nameInput = document.querySelector("#name");
// const name = nameInput.value;
const descriptionInput = document.querySelector("#description");
// const description = descriptionInput.value;
const assignedInput = document.querySelector("#assigned");
// const assigned = assignedInput.value;
const dueDateInput = document.querySelector("#due_date");
// const dueDate = dueDateInput.value;
// const status = statusInput.value;
const alert = document.querySelector("#alert");
const newTaskForm = document.getElementById("form");
const taskManager = new TaskManager();
taskManager.load();
taskManager.render();

const validFormFieldInput = () => {
  if (
    !nameInput.value ||
    !descriptionInput.value ||
    !assignedInput.value ||
    !dueDateInput.value
  ) {
    let errorList = [];
    if (!nameInput.value) {
      errorList.push(" name");
    }
    if (!descriptionInput.value) {
      errorList.push(" description");
    }
    if (!assignedInput.value) {
      errorList.push(" assigned to");
    }
    if (!dueDateInput.value) {
      errorList.push(" due date");
    }
    alert.classList.add("invalid-form-alert");
    alert.classList.remove("hide-alert");
    alert.innerHTML = `Something went wrong! Please check the following field(s):${errorList.toString()}`;
    return false;
  } else {
    if (alert.classList.contains("invalid-form-alert")) {
      alert.classList.remove("invalid-form-alert");
      console.log("yay");
    }
    if (!alert.classList.contains("hide-alert")) {
      alert.classList.add("hide-alert");
    }
    console.log(
      `name: ${nameInput.value} description: ${descriptionInput.value} assigned: ${assignedInput.value} due date: ${dueDateInput.value}`
    );
    return true;
  }
};

newTaskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let isFormValidation = validFormFieldInput();

  if (isFormValidation) {
    taskManager.addTask(
      nameInput.value,
      descriptionInput.value,
      assignedInput.value,
      dueDateInput.value
    );
    // console.log(taskManager.tasks);

    taskManager.render();
    nameInput.value = "";
    descriptionInput.value = "";
    assignedInput.value = "";
    dueDateInput.value = "";
  }
});

const taskList = document.querySelector("#taskList");
taskList.addEventListener("click", function (event) {
  const item = event.target;
  if (item.classList.contains("done-button")) {
    const parentTask = item.parentElement.parentElement;
    const taskId = parseInt(parentTask.id);
    const task = taskManager.getTaskById(taskId);
    task.status = "DONE";
    taskManager.save();
    // task9completed
    // taskManager.load();
    taskManager.render();

    // const btn = document.querySelector('.done-button');
    // if()
  }

  if (item.classList.contains("delete-button")) {
    const parentTask = item.parentElement.parentElement;
    const taskId = parseInt(parentTask.id);
    const task = taskManager.getTaskById(taskId);
    taskManager.deleteTask(taskId);
    taskManager.save();
    taskManager.render();
  }
});

// console.log(createTaskHtml('Take out trash','Take out trash in the bedrooms','Mathew','Today','done'))

// console.log(createTaskHtml('Take out trash','Take out trash in the bedrooms','Mathew','Today','done'))

// const taskManager = new TaskManager(0);

// const newTaskForm = document.querySelector("#newTaskForm");
// //form event listener
// newTaskForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const newTaskName = document.querySelector("#newTaskName");
//   const newTaskDescription = document.querySelector("#newTaskDescription");
//   const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
//   const newTaskDueDate = document.querySelector("#newTaskDueDate");

//   /*
//         Validation code here
//         // function validFormInput() {}

// // if (!validFormInput()) {
// //   error.innerHTML = "Please Enter Required Inputs";
// // } else {
// //   error.style.display = "none";
// // }
//     */

//   const name = newTaskName.value;
//   const description = newTaskDescription.value;
//   const assignedTo = newTaskAssignedTo.value;
//   const dueDate = newTaskDueDate.value;

//   taskManager.addTask(name, description, assignedTo, dueDate);

//   taskManager.render();

//   newTaskName.value = "";
//   newTaskDescription.value = "";
//   newTaskAssignedTo.value = "";
//   newTaskDueDate.value = "";
// });

// // const taskManager = new TaskManager(0);

// // const newTaskForm = document.querySelector("#newTaskForm");
// //form event listener

// newTaskForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const newTaskName = document.querySelector("#newTaskName");
//   const newTaskDescription = document.querySelector("#newTaskDescription");
//   const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
//   const newTaskDueDate = document.querySelector("#newTaskDueDate");

//   //validation code

//   const name = newTaskName.value;
//   const description = newTaskDescription.value;
//   const assignedTo = newTaskAssignedTo.value;
//   const dueDate = newTaskDueDate.value;

//   taskManager.addTask(name, description, assignedTo, dueDate);

//   taskManager.render();

//   newTaskName.value = "";
//   newTaskDescription.value = "";
//   newTaskAssignedTo.value = "";
//   newTaskDueDate.value = "";
// });

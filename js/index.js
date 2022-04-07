//initialize a new instance of TaskManager

const newTask = new TaskManager();
const newTask2 = new TaskManager();
newTask2.addTask("JS", "Test", "Tierra", 10, status);
// console.log(newTask2);

// Event Listener for task form

document.getElementById("submitBtn").addEventListener("click", submit);

function submit() {
  alert("its working");
}

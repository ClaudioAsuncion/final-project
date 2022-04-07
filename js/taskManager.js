//taskmanager class

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  addTask(name, description, assignedTo, dueDate, status = "todo") {
    const newTasks = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };
    this.tasks.push(newTasks);
  }
}

// const task1 = {
//   id: 1,
//   name: "Take out the trash",
//   description: "Take out the trash to the front of the house",
//   assignedTo: "Nick",
//   dueDate: "2020-09-20",
//   status: "TODO",
// };

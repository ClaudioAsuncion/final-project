const createTaskHtml = (name, description, assignedto, duedate, status) => {
  `<div class="card-group">
          <div class="card h-100 border-dark">
            <div class="card-header text-white bg-success">${name}</div>
            <div class="card-body">
              <p class="card-text">${description}</p>
              <p class="card-text">${assignedto}</p>
              <p class="card-text">${duedate}</p>
              <span class="badge badge-success">${status}</span>
              <a href="#" class="btn btn-success">Delete</a>
            </div>`;
};
//taskmanager class

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  addTask(name, description, assignedTo, dueDate) {
    const newTasks = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
    };
    this.tasks.push(newTasks);
  }
  // render
  render() {
    //array to store task
    const tasksHtmlList = [];
    for (let i = 0; 0 < this.addTask.length; i++) {
      let currentTask = this.addTask.length;
      let date = new Date(currentTask.dueDate);
      let formattedDate = date.toString();
    }
  }
}

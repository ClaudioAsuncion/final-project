const createTaskHtml = (name, description, assignedTo, duedate, status) => {
  `<div class="card-group">
          <div class="card h-100 border-dark">
            <div class="card-header text-white bg-success">${name}</div>
            <div class="card-body">
              <p class="card-text">${description}</p>
              <p class="card-text">${assignedTo}</p>
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
    for (let i = 0; i < this.tasks.length; i++) {
      let currentTask = this.tasks[i];
      let date = new Date(currentTask.dueDate);
      let formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      let taskHtml = createTaskHtml(
        currentTask.name,
        currentTask.description,
        currentTask.assignedTo,
        formattedDate,
        currentTask.status
      );
    }
    tasksHtmlList.push(tasksHtml);
    taskHtml = tasksHtmlList.join("\n");

    const taskList = document.querySelector("#tasklist");
    taskList.innerHTML = tasksHtml;
  }
}

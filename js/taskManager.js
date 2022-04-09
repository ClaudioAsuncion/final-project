// Create the HTML for a task
const createTaskHtml = (name, description, assignedTo, dueDate, status) => `

   <div class="card-header text-white bg-success">${name}</div>
            <div class="card-body">
              <p class="card-text">${description}</p>
              <p class="card-text">${assignedTo}</p>
              <p class="card-text">${dueDate}</p>
              <p class="card-text">${status}</p>
              
             
`;

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(name, description, assignedTo, dueDate) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
    };

    this.tasks.push(task);
  }

  //render method
  render() {
    //array to store the tasks HTML
    const tasksHtmlList = [];

    // Loop over our tasks and create the html, storing it in the array
    for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
      const task = this.tasks[i];

      // Format the date
      const date = new Date(task.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

      const taskHtml = createTaskHtml(
        task.name,
        task.description,
        task.assignedTo,
        formattedDate,
        task.status
      );

      tasksHtmlList.push(taskHtml);
    }

    const tasksHtml = tasksHtmlList.join("\n");

    // inner html of the tasksList
    const tasksList = document.querySelector("#tasksList");
    tasksList.innerHTML = tasksHtml;
  }
}

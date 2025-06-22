document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  // Store tasks (optional: persist using localStorage)
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  renderTasks();

  // Add a new task
  addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    const task = { text, completed: false };
    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = "";
  });

  // Render task list
  function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task.text;

      if (task.completed) li.classList.add("completed");

      // Toggle completion
      li.addEventListener("click", () => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
      });

      // Add delete button
      const delBtn = document.createElement("button");
      delBtn.textContent = "✕";
      delBtn.title = "Delete";
      delBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent toggling when deleting
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      });

      li.appendChild(delBtn);
      taskList.appendChild(li);
    });
  }

  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
const taskInput = document.getElementById("task"); // Correct ID
const addTaskButton = document.getElementById("btnAdd"); // Correct ID
const taskList = document.getElementById("taskList");

function fetchTasks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Buy groceries", "Walk the dog"]);
        }, 2000);
    });
}

function loadInitialTasks() {
    fetchTasks().then((tasks) => {
        tasks.forEach((task) => {
            createTaskItem(task, false);
        });
    });
}

function createTaskItem(taskName, completed) {
    const taskItem = document.createElement("li");
    const taskContainer = document.createElement("div");
    const deleteButton = document.createElement("button");

    taskContainer.textContent = taskName;
    taskContainer.classList.add("flex-1", "text-left");

    deleteButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  `;
    deleteButton.classList.add(
        "text-red-500",
        "hover:text-red-600",
        "cursor-pointer"
    );
    deleteButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent parent taskItem click event
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskContainer);
    taskItem.appendChild(deleteButton);
    taskItem.classList.add(
        "flex",
        "items-center",
        "p-4",
        "rounded",
        "transition",
        "cursor-pointer",
        "justify-between",
        completed ? "bg-red-500" : "bg-green-500"
    );

    taskItem.addEventListener("click", () => {
        if (!taskItem.classList.contains("bg-red-500")) {
            taskItem.classList.remove("bg-green-500");
            taskItem.classList.add("bg-red-500", "line-through");
        } else {
            taskItem.classList.remove("bg-red-500", "line-through");
            taskItem.classList.add("bg-green-500");
        }
    });

    taskList.appendChild(taskItem);
}

addTaskButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (taskName) {
        createTaskItem(taskName, false);
        taskInput.value = "";
    }
});

loadInitialTasks();

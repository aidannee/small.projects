let todoInput = document.querySelector("#todoInput");
let submitBtn = document.querySelector("#submitBtn");
let todoUl = document.querySelector("#todoUl");
let selectedTaskIndex = -1;
let tasks = [];

function addTask() {
  const task = todoInput.value.trim();
  if (task !== "") {
    if (selectedTaskIndex === -1) {
      tasks.push(task);

      todoInput.value = "";
    } else {
      tasks[selectedTaskIndex] = task;
      selectedTaskIndex = -1;
    }
    render();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);

  render();
}

function render() {
  todoUl.innerHTML = "";

  const dataToHTML = tasks.map((task, index) => {
    return `
            <li class="flex justify-between items-center mb-1 mt-1 py-2 border-b">

            
              <span class="text-gray-800">${task}</span>
              <span>   <button onclick="setSelectedTaskIndex(${index})" class="px-2 py-1 rounded bg-green-500 hover:bg-green-900 text-white">Modify</button>
              <button onclick="deleteTask(${index})" class="px-2 py-1 rounded bg-red-500 hover:bg-red-900 text-white">Delete</button>
           </span>
            </li>
          `;
  });
  console.log(tasks, dataToHTML);
  todoUl.innerHTML = dataToHTML.join("");
  if (selectedTaskIndex >= 0) {
    todoInput.value = tasks[selectedTaskIndex];
    console.log("we are here ", selectedTaskIndex);
  } else {
    todoInput.value = "";
  }
}

function modify(index, newData) {
  tasks[index] = newData;
  render();
}
function setSelectedTaskIndex(index) {
  selectedTaskIndex = index;
  render();
}

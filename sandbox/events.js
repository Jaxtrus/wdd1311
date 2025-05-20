function newTask() {
    const listElement = document.querySelector('#todoList');
    const taskInput = document.querySelector('#todo');
    const task = taskInput.value.trim();
  
    if (task !== '') {
      listElement.innerHTML += `
        <li>
          ${task}
          <div>
            <span data-function="delete">❎</span>
            <span data-function="complete">✅</span>
          </div>
        </li>`;
      taskInput.value = ''; // Clear input after adding
    }
  }
  
  function manageTasks(e) {
    const parent = e.target.closest("li");
    const action = e.target.getAttribute("data-function");
  
    if (action === "delete") {
      parent.remove();
    }
  
    if (action === "complete") {
      parent.classList.toggle("strike");
    }
  }
  
  // Event listeners
  document.querySelector('#submitTask').addEventListener('click', newTask);
  document.querySelector('#todoList').addEventListener('click', manageTasks);
  
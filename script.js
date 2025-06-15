document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load and render tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // Do not save again to Local Storage
        });
    }

    // Save current tasks array to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add a task to the DOM and optionally save it
    function addTask(taskText, save = true) {
        if (!taskText.trim()) {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        removeBtn.onclick = function () {
            taskList.removeChild(li);

            // Remove from Local Storage
            const currentTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = currentTasks.filter(task => task !== taskText);
            saveTasks(updatedTasks);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';

        if (save) {
            const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            tasks.push(taskText);
            saveTasks(tasks);
        }
    }

    // Event listener for button click
    addButton.addEventListener('click', function () {
        addTask(taskInput.value);
    });

    // Event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks on page load
    loadTasks();
});

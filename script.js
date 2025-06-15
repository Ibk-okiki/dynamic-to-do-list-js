// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // Check if input is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Event listener for removing a task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to list item
        li.appendChild(removeBtn);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on "Enter" key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

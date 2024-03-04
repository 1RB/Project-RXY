class Task {
    constructor(name, isCompleted = false) {
        this.name = name;
        this.isCompleted = isCompleted;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(name) {
        const task = new Task(name);
        this.tasks.push(task);
    }

    deleteTask(name) {
        this.tasks = this.tasks.filter(task => task.name !== name);
    }

    completeTask(name) {
        const task = this.tasks.find(task => task.name === name);
        if (task) {
            task.isCompleted = true;
        }
    }

    displayTasks() {
        this.tasks.forEach(task => {
            console.log(`Task: ${task.name}, Completed: ${task.isCompleted}`);
        });
    }
}

// Usage
const taskManager = new TaskManager();
taskManager.addTask('Learn JavaScript');
taskManager.addTask('Learn TypeScript');
taskManager.completeTask('Learn JavaScript');
taskManager.displayTasks();
import TaskDAO from "../dao/TaskDAO.js";

class TaskService {
    constructor() {
        this.taskDAO = new TaskDAO();
    }

    async getAllTasks() {
        try {
            const tasks = await this.taskDAO.getTasks();
            return tasks.slice(0, 10); 
        } catch (error) {
            throw new Error(`Service Error: ${error.message}`);
        }
    }

    async addTask(task) {
        try {
            return await this.taskDAO.addTask(task);
        } catch (error) {
            throw new Error(`Service Error: ${error.message}`);
        }
    }

    async toggleTaskStatus(taskId) {
        try {
            return true;
        } catch (error) {
            throw new Error(`Service Error: ${error.message}`);
        }
    }

    async deleteTask(taskId) {
        try {
            return true;
        } catch (error) {
            throw new Error(`Service Error: ${error.message}`);
        }
    }
}

export default TaskService;

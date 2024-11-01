import TaskService from "../service/TaskService.js";
import ValidationHandler from "../service/handlers/ValidationHandler.js";
import PriorityHandler from "../service/handlers/PriorityHandler.js";

class TaskController {
  constructor() {
    this.taskService = new TaskService();
    this.setupChainOfResponsibility();
  }

  setupChainOfResponsibility() {
    this.validationHandler = new ValidationHandler();
    this.priorityHandler = new PriorityHandler();

    this.validationHandler.setNext(this.priorityHandler);
  }

  async getTasks() {
    try {
      return await this.taskService.getAllTasks();
    } catch (error) {
      throw new Error(`Controller Error: ${error.message}`);
    }
  }

  processNewTask(task) {
    return this.validationHandler.handle(task);
  }
  async toggleTaskStatus(taskId) {
    try {
        await this.taskService.toggleTaskStatus(taskId);
        return true;
    } catch (error) {
        throw new Error(`Controller Error: ${error.message}`);
    }
}

async deleteTask(taskId) {
    try {
        await this.taskService.deleteTask(taskId);
        return true;
    } catch (error) {
        throw new Error(`Controller Error: ${error.message}`);
    }
  }
}

export default TaskController;

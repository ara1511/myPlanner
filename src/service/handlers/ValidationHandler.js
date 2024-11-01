import BaseHandler from "./BaseHandler.js";

class ValidationHandler extends BaseHandler {
  handle(task) {
    if (!task.title || task.title.trim() === "") {
      throw new Error("Task title cannot be empty");
    }
    return super.handle(task);
  }
}

export default ValidationHandler;

import BaseHandler from "./BaseHandler.js";

class PriorityHandler extends BaseHandler {
  handle(task) {
    if (!task.priority) {
      task.priority = "normal";
    }
    return super.handle(task);
  }
}

export default PriorityHandler;

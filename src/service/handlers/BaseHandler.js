class BaseHandler {
  constructor() {
    this.nextHandler = null;
  }

  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(task) {
    if (this.nextHandler) {
      return this.nextHandler.handle(task);
    }
    return task;
  }
}

export default BaseHandler;

import ApiClient from "../service/ApiService";

class TaskDAO {
  constructor() {
    this.apiClient = ApiClient.getInstance();
  }

  async getTasks() {
    try {
      return await this.apiClient.get("/todos");
    } catch (error) {
      throw new Error(`DAO Error: ${error.message}`);
    }
  }
  async addTask(task) {
    try {
      return await this.apiClient.post("/todos", task);
    } catch (error) {
      throw new Error(`DAO Error: ${error.message}`);
    }
  }
  
}

export default TaskDAO;

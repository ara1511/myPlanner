class ProductService {
    static instance = null;
    
    static getInstance() {
      if (!ProductService.instance) {
        ProductService.instance = new ProductService();
      }
      return ProductService.instance;
    }
  
    constructor() {
      this.productDAO = ProductDAO.getInstance();
    }
  
    async getProducts() {
      return await this.productDAO.getProducts();
    }
  
    async getProductById(id) {
      return await this.productDAO.getProductById(id);
    }
  }
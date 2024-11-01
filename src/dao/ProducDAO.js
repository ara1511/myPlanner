class ProductDAO {
    static instance = null;
    
    static getInstance() {
      if (!ProductDAO.instance) {
        ProductDAO.instance = new ProductDAO();
      }
      return ProductDAO.instance;
    }
  
    async getProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        return await response.json();
      } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
      }
    }
  
    async getProductById(id) {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        return await response.json();
      } catch (error) {
        throw new Error('Error fetching product: ' + error.message);
      }
    }
  }
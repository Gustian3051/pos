export class ProductService {
     constructor(productRepository) {
          this.productRepository = productRepository;
     }

     async addProduct(product) {
          return await this.productRepository.addProduct.getAll();
     }

     async getProducts() {
          return await this.productRepository.getProducts.getAll();
     }

     async updateStock(productId, newStock) {
          const product = await this.productRepository.getById(productId);
          product.stock = newStock;
          return await this.productRepository.update(product);
     }

     async deleteProduct(id) {
          return await this.productRepository.deleteProduct.getAll(id);
     }
}
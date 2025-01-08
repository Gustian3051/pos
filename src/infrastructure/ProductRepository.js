export class ProductRepository {
     constructor(db) {
          this.db = db;
     }

     async add(product) {
          return await this.db.insert('products', product);
     }

     async getAll() {
          return await this.db.getAll('products');
     }

     async getById(id) {
          return await this.db.getById('products', id);
     }

     async update(product) {
          return await this.db.update('products', product);
     }
}
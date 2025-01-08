export class SupplierRepository {
     constructor(db) {
          this.db = db;
     }

     async add(supplier) {
          return await this.db.insert('suppliers', supplier);
     }

     async getAll() {
          return await this.db.getAll('suppliers');
     }
}
export class TransactionRepository {
     constructor(db) {
          this.db = db;
     }

     async add(transaction) {
          return await this.db.insert('transactions', transaction);
     }

     async getAll() {
          return await this.db.getAll('transactions');
     }
}
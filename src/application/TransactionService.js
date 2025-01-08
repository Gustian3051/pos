export class TransactionService {
     constructor(transactionRepository) {
          this.transactionRepository = transactionRepository;
     }

     async addTransaction(transaction) {
          return await this.transactionRepository.addTransaction.add(transaction);
     }

     async getTransactions() {
          return await this.transactionRepository.getTransactions.getAll();
     }
}
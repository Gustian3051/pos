export class SupplierService {
     constructor(supplierRepository) {
          this.supplierRepository = supplierRepository;
     }

     async addSupplier(supplier) {
          return await this.supplierRepository.addSupplier.add(supplier);
     }

     async getSuppliers() {
          return await this.supplierRepository.getSuppliers.getAll();
     }

     async deleteSupplier(id) {
          return await this.supplierRepository.deleteSupplier.getAll(id);
     }
}
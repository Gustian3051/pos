import React, { useState, useEffect } from 'react';
import { ProductService } from '../../application/ProductService';
import { ProductRepository } from '../../infrastructure/ProductRepository';
import db from '../../infrastructure/Database';

const ProductManagement = () => {
     const ProductService = new ProductService(new ProductRepository(db));
     const [products, setProducts] = useState([]);

     useEffect(() => {
          const fetchProducts = async () => {
               const result = await ProductService.getProducts();
               setProducts(result);
          };

          fetchProducts();
     }, []);

     return (
          <div>
               <h1>Manajemen Product</h1>
               <ul>
                    {products.map(product => (
                         <li key={product.id}>{product.name} - Stock: {product.stock}</li>
                    ))}
               </ul>
          </div>
     );
};

export default ProductManagement;
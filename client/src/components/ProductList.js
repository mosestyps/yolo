import API_URL from '../config';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('${API_URL}/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>PRODUCTS</h2>
      <div className="row">
       {products.map(product => (
    <Product
        key={product._id}
        id={product._id}
        name={product.name}
        price={product.price}
        photo={product.photo}
    />
))}
        
      </div>
    </div>
  );
};

export default ProductList;

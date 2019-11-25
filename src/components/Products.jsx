import React from 'react';

const Products = ({ products, handelAddToCart }) => {
  return (
    <div className='row'>
      {products.map(product => (
        <div className='col-md-4'>
          <div className='thumbnail text-center'>
            <a href={`#${product.id}`} onClick={handelAddToCart}>
              <img src={`/products/${product.sku}_1.jpg`} alt={product.title} />
              <p>{product.title}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

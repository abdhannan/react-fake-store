import { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/apiClient';
import ProductItems, { Product } from './ProductItems';

const Products = () => {
  const [products, setProducts] = useState<Product[]>();

  const getProducts = async () => {
    try {
      const res = await fetchProducts(8);
      return res;
    } catch (error) {
      console.error('Failed get products data');
    }
  };

  useEffect(function () {
    async function products() {
      const data = await getProducts();
      console.log('Products', data);
      setProducts(data?.data);
    }

    products();
  }, []);

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-4 gap-10'>
        {products === undefined ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <ProductItems key={product.title} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;

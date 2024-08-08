import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/ApiService';
import ProductItems, { Product } from './ProductItems';

type Show = {
  show: number;
};

const Products = ({ show }: Show) => {
  const [products, setProducts] = useState<Product[]>();

  // const getProducts = async () => {
  //   try {
  //     const res = await fetchProducts(show);
  //     return res;
  //   } catch (error) {
  //     console.error('Failed get products data');
  //   }
  // };

  useEffect(
    function () {
      const getProducts = async () => {
        try {
          const res = await fetchProducts(show);
          const data = await res?.data;
          setProducts(data);
        } catch (error) {
          console.error('Failed get products data');
        }
      };

      // products();
      getProducts();
    },
    [show]
  );

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

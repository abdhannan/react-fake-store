import { useEffect, useState } from 'react';
import CategoryItems from './CategoryItems';
import { fetchCategories } from '../utils/ApiService';

interface Categories {
  data: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<never[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(function () {
    async function categories() {
      try {
        setIsLoading(true);
        const data = await fetchCategories();
        // console.log('categories:', data);
        //   const filteredCategories = data.slice(1);
        setCategories(data?.data);
      } catch (error) {
        /** Add additional error cactch if needed */
      }
    }
    categories();
  }, []);

  return (
    <div className='container mx-auto py-10'>
      <div className='grid grid-cols-4 gap-10'>
        {categories === undefined && isLoading ? (
          <p>Loading...</p>
        ) : (
          categories.map((cat) => <CategoryItems key={cat} category={cat} />)
        )}
      </div>
    </div>
  );
};

export default Categories;

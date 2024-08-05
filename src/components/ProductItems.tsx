export interface Product {
  title: string;
  image: string;
  category: string;
  price: number;
}

interface PropsProduct {
  product: Product;
}

const ProductItems = ({ product }: PropsProduct) => {
  return (
    <div className=''>
      <img
        className='max-w-full w-full'
        src={`https://picsum.photos/seed/${product.title}/150/170`}
        alt={product.title}
      />

      <div className='bg-gray-100 px-5 py-5'>
        <h4 className='text-2xl font-semibold'>{product.title}</h4>
        <span className='text-zinc-800'>{product.category}</span>
        <p className='font-medium'>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductItems;

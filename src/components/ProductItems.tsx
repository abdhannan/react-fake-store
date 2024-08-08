import { CiShare2, CiHeart } from 'react-icons/ci';
import { VscGitCompare } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

export interface Product {
  id: number;
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
    <div className='group/item relative'>
      <img
        className='max-w-full w-full'
        src={`https://picsum.photos/seed/${product.title}/150/170`}
        alt={product.title}
      />

      <div className='bg-gray-100 px-5 py-5'>
        <h4 className='text-xl font-semibold'>{product.title}</h4>
        <span className='text-zinc-800'>{product.category}</span>
        <p className='font-medium'>${product.price}</p>
      </div>
      <div className='flex flex-col items-center justify-center group/edit invisible group-hover/item:visible absolute top-0 bottom-0 left-0 right-0 bg-slate-400/70'>
        <Link to={`/product/${product.id}`}>
          <button className='bg-yellow-500 text-white py-3 px-7'>
            Details
          </button>
        </Link>
        <ul className='flex flex-row list-none w-full py-3 text-white'>
          <li className='flex justify-center items-center w-full'>
            <Link to='/'>
              <CiShare2 className='inline' /> Share
            </Link>
          </li>
          <li className='flex justify-center items-center w-full'>
            <Link to={'/'}>
              <VscGitCompare className='inline' /> Compare
            </Link>
          </li>
          <li className='flex justify-center items-center w-full'>
            <Link to={'/'}>
              <CiHeart className='inline' /> Like
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductItems;

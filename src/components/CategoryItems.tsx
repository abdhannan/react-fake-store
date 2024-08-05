interface Category {
  category: string;
}

const CategoryItems = ({ category }: Category) => {
  return (
    <div>
      <img
        className='size-full rounded-lg'
        src={`https://picsum.photos/seed/${category}/200/300`}
        alt={category}
      />
      <h3 className='text-center font-semibold text-xl py-5'>{category}</h3>
    </div>
  );
};

export default CategoryItems;

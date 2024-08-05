import PageLayout from '../layouts/PageLayout';

const NotFound = () => {
  return (
    <PageLayout>
      <div className='w-full h-96 flex flex-col items-center justify-center'>
        <h1 className='text-6xl'>404</h1>
        <h2 className='text-4xl'>NOT FOUND</h2>
      </div>
    </PageLayout>
  );
};

export default NotFound;

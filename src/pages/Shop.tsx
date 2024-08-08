import PageTitle from '../components/common/PageTitle';
import Products from '../components/Products';
import PageLayout from '../layouts/PageLayout';

const Shop = () => {
  return (
    <PageLayout>
      <PageTitle title='Shop' />
      <section className='py-10'>
        <Products show={12} />
      </section>
    </PageLayout>
  );
};

export default Shop;

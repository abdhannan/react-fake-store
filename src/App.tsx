import Categories from './components/Categories';
import Hero from './components/Hero';
import Products from './components/Products';
import SectionTitle from './components/SectionTitle';
import PageLayout from './layouts/PageLayout';

function App() {
  return (
    <PageLayout>
      <Hero />
      <section className='py-12 bg-white'>
        <SectionTitle
          heading='Browse The Range'
          subHeading='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
        <Categories />
      </section>

      <section className='py-12 bg-slate-50'>
        <SectionTitle heading='Our Products' subHeading='' />
        <Products />
      </section>
    </PageLayout>
  );
}

export default App;

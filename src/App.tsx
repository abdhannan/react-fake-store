import Categories from './components/Categories';
import Hero from './components/Hero';
import Products from './components/Products';
import SectionTitle from './components/SectionTitle';
import Header from './layouts/Header';

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;

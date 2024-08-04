import Hero from './components/Hero';
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
      </section>
    </>
  );
}

export default App;

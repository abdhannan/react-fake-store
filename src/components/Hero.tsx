import heroImage from '/hero-image.jpg';
const Hero = () => {
  return (
    <section
      className='bg-cover bg-center'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className='container mx-auto flex items-end justify-center flex-col min-h-[600px]'>
        <div className='w-[643px] bg-amber-100 px-7 py-9'>
          <span className='font-bold'>New Arrival</span>
          <h2 className='text-6xl text-yellow-600 my-3'>
            Discover Our New Collection
          </h2>
          <p className='text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className='bg-yellow-600 text-white px-6 py-4 my-4'>
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

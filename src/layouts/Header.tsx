import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='bg-slate-200 mx-auto'>
      <div className='container mx-auto py-4 flex flex-row justify-between content-center items-center'>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;

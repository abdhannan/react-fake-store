import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-10'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/shop'>Shop</NavLink>
        </li>
        <li>
          <NavLink to='/contact-us'>Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

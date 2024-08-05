import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to='/'>
        <img src='logo.svg' alt=' logo' />
      </Link>
    </div>
  );
};

export default Logo;

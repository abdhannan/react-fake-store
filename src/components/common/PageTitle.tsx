import React from 'react';
import bg from '/bg-page.jpg';
import logo from '/icon.svg';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div
      className='w-full h-auto relative min-h-80 flex flex-col items-center justify-center'
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <img className='size-10 h-auto' src={logo} alt={title} />
      <h1 className='text-5xl'>{title}</h1>
    </div>
  );
};

export default PageTitle;

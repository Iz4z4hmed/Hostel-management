import React from 'react';

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='py-0 mb-8 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src="https://cdn4.vectorstock.com/i/thumb-large/66/58/bed-icon-logo-design-template-vector-35396658.jpg" width="40%" alt='' />
        </Link>
        <strong><span className='text-yellow-500'>PG/Hostel </span> management System</strong>
     
      </div>
    </header>
  );
};

export default Header;

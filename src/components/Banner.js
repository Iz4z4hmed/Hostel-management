import React from 'react';

import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-yellow-500'>Rent</span> Your Dream House With
            Us.
          </h1>
          <p className='max-w-[480px] mb-8'>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src="https://t3.ftcdn.net/jpg/00/01/11/98/360_F_1119894_4DbcPDsfpzeobGQE1YYr1gqxxcnI6c.webp" alt='' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;

import React from 'react';

import { BiBed, BiBath, BiArea, BiRupee } from 'react-icons/bi';

const House = ({ house }) => {
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8 h-80  rounded-tl-[70px]   rounded-br-[70px]' src={house.image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
          {house.type}
        </div>
        <div className='bg-yellow-400 rounded-full text-white px-3 inline-block'>
          {house.country}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{house.address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBed />
          </div>
          <div className='text-base'>{house.bedrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBath />
          </div>
          <div className='text-base'>{house.bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiArea />
          </div>
          <div className='text-base'>{house.surface}</div>
        </div>
      </div>
      <div className='text-xl font-semibold text-yellow-400 mb-4  inline-flex'>
        <BiRupee/>  {house.price}
      </div>
    </div>
  );
};

export default House;

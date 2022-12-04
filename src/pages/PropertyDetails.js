import React from 'react';

// import houseData
import { housesData } from '../data';
//  useParams
import { useParams } from 'react-router-dom';
// import icons
import { BiBed, BiBath, BiArea, BiRupee } from 'react-icons/bi';
// import link
// import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <div className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{property.name}</h2>
          <h3 className='text-lg mb-4'>{property.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
            {property.type}
          </div>
          <div className='bg-yellow-400 rounded-full text-white px-3 inline-block'>
            {property.country}
          </div>
        </div>
        <div className='text-3xl font-semibold text-yellow-400 inline-flex'>
          <BiRupee />  {property.price}
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={property.imageLg} alt='' />
          </div>
          <div className='flex gap-x-6 text-yellow-500 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl' />
              <div className='text-lg font-medium'>{property.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl' />
              <div className='text-lg font-medium'>{property.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl' />
              <div className='text-lg font-medium'>{property.surface}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={property.agent.image} alt=""></img>
            </div>
            <div>
              <div className='font-bold text-lg'>{property.agent.name}</div>
              {/* <Link to='' className='text-yellow-500 text-sm'>
                View listings
              </Link> */}
            </div>
          </div>
         

          <form
            action="https://formspree.io/f/xoqbekry"
            method="POST"
            className='flex flex-col gap-y-4'
          >
            {/* <label> */}
              {/* Your email: */}
              <input type="text"
                name="text"
                className='border border-gray-300 focus:border-yellow-500 rounded w-full px-4 h-14 text-sm outline-none' required
                placeholder='Name*'
              />
               <input type="tel"
                name="text"
                className='border border-gray-300 focus:border-yellow-500 rounded w-full px-4 h-14 text-sm outline-none' required
                placeholder='Enter your Mobile No*'
              />
            {/* </label> */}
            {/* <label> */}
              {/* Your email: */}
              <input type="email" name="email" value='Ahmedizaz270@gmail.com'
                className='border border-gray-300 focus:border-yellow-500 rounded w-full px-4 h-14 text-sm outline-none' required
                placeholder='Email*'
                // defaultValue='Ahmedizaz270@gmail.com'
                autoFocus="autofocus"
              />
            {/* </label> */}
            {/* <label> */}
              {/* Your message: */}
              <textarea name="message"
                className='border border-gray-300 focus:border-yellow-500 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none' required
                placeholder='Message*'
                defaultValue='Hello, I am interested in'
              >
              </textarea>
            {/* </label> */}
            <button type="submit"
              className='bg-yellow-500 hover:bg-yellow-600 text-white rounded p-4 text-sm w-full transition'>Send message</button>
          </form>

          {/* <button className='border border-yellow-500 text-yellow-500 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition'>
                Call
              </button> */}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

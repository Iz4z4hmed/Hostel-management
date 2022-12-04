// import house images
import House1 from './assets/img/houses/hostel2.jpg';
import House2 from './assets/img/houses/hostel1.jpg';
import House3 from './assets/img/houses/hostel3.jpg';
import House4 from './assets/img/houses/hostel4.jpg';
import House5 from './assets/img/houses/hostel5.jpg';
import House6 from './assets/img/houses/hostel6.jpg';
import House7 from './assets/img/houses/hostel7.jpg';
import House8 from './assets/img/houses/house8.png';
// import House9 from './assets/img/houses/house9.png';
// import House10 from './assets/img/houses/house10.png';
// import House11 from './assets/img/houses/house11.png';
// import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/hostel2.jpg';
import House2Lg from './assets/img/houses/hostel1.jpg';
import House3Lg from './assets/img/houses/hostel3.jpg';
import House4Lg from './assets/img/houses/hostel4.jpg';
import House5Lg from './assets/img/houses/hostel5.jpg';
import House6Lg from './assets/img/houses/hostel6.jpg';
import House7Lg from './assets/img/houses/hostel7.jpg';
import House8Lg from './assets/img/houses/house8lg.png';

import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent12 from './assets/img/agents/agent12.png';

import Agent11 from './assets/img/agents/agent11.png';

export const housesData = [
  {
    id: 1,
    type: 'Hostel',
    name: 'Hostel 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    imageLg: House1Lg,
    country: 'Sikar',
    address: 'Near CLC Piprali Road, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '5000',
    agent: {
      image: Agent1,
      name: 'Sunita jhaa',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'Hostel',
    name: 'Hostel 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    imageLg: House2Lg,
    country: 'Sikar',
    address: 'Behind Circuit House jaipur road, NJ 08807',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '5200',
    agent: {
      image: Agent2,
      name: 'Sachin jangir',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'PG',
    name: 'PG 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House3,
    imageLg: House3Lg,
    country: 'Sikar',
    address: 'Ambala Apartment 3floor Piprali Road, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '4800',
    agent: {
      image: Agent3,
      name: 'Ushman Sayyed ',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'Hostel',
    name: 'Hostel 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    country: 'Sikar',
    address: 'Piprali Road near 121 cafe , FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '4500',
    agent: {
      image: Agent4,
      name: 'Shujata singhodia',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'PG',
    name: 'PG 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    imageLg: House5Lg,
    country: 'Sikar',
    address: '28 Lorem ipsum dolor sit amet consectetur , PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '5000',
    agent: {
      image: Agent5,
      name: 'Naresh',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'PG',
    name: 'PG 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    country: 'Sikar',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '4500',
    agent: {
      image: Agent9,
      name: 'Karen tomar',
      phone: '0123 456 78910',
    },
  },
 
  {
    id: 10,
    type: 'Hostel',
    name: 'Hostel 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    country: 'Sikar',
    address: 'Nawalgarh Road Puniyaji ka Baas, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '5200',
    agent: {
      image: Agent12,
      name: 'Hitesh soni',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'PG',
    name: 'PG 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    country: 'Sikar',
    address: '798 Behind city hospital Fatehpur road, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '3000',
    agent: {
      image: Agent11,
      name: 'Sofia Naim',
      phone: '0123 456 78910',
    },
  },
];
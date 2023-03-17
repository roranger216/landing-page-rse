import React from 'react';
import CountUp from 'react-countup';

type Props = {};

const Search = (props: Props) => {
  return (
    <div className='grid grid-cols-2 mt-40 pb-40'>
      <div className='text-white'>
        <div className='pl-0'>
          <h1 className='text-48 leading-58 w-60 font-bold mt-50px'>
            Your Lightning Fast Delivery Partner
          </h1>
          <p className='text-15 leading-23 font-normal mt-30 w-80'>
            Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio
            quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores
            eaque id optio ullam occaecati odio est possimus vel reprehenderit
          </p>
          <div className='bg-white w-60 pr-4 rounded-6 flex items-center mt-30'>
            <input
              type='text'
              placeholder='Zip code or City'
              className='bg-white outline-none w-full text-black py-17 pl-14'
            />
            <button className='bg-[#2756FF] py-12 px-20 text-white rounded-4'>Search</button>
          </div>
        </div>
        <div className='grid grid-cols-4 mt-30 pl-20'>
          <div className='space-y-10 flex flex-col items-start justify-start'>
            <h2 className='text-32 font-semibold'>
              <CountUp end={1234} useEasing={false} />
            </h2>
            <div className='h-4 w-20 bg-[#2756FF]' />
            <p>Clients</p>
          </div>
          <div className='space-y-10 flex flex-col items-start justify-start'>
            <h2 className='text-32 font-semibold'>
              <CountUp end={2351} useEasing={false} />
            </h2>
            <div className='h-4 w-20 bg-[#2756FF]' />
            <p>Customers</p>
          </div>
          <div className='space-y-10 flex flex-col items-start justify-start'>
            <h2 className='text-32 font-semibold'>
              <CountUp end={421} useEasing={false} />
            </h2>
            <div className='h-4 w-20 bg-[#2756FF]' />
            <p>Support</p>
          </div>
          <div className='space-y-10 flex flex-col items-start justify-start'>
            <h2 className='text-32 font-semibold'>
              <CountUp end={971} useEasing={false} />
            </h2>
            <div className='h-4 w-20 bg-[#2756FF]' />
            <p>Workers</p>
          </div>
        </div>
      </div>
      <div className='flex items-end justify-end'>
        <img
          src='https://bootstrapmade.com/demo/templates/Logis/assets/img/hero-img.svg'
          className='z-10 w-87'
          alt=''
        />
      </div>
    </div>
  );
};

export default Search;

import React from 'react';
import CountUp from 'react-countup';

function Search() {
  return (
    <div className='grid grid-cols-2 mt-[40px] pb-[40px]'>
      <div className='text-white'>
        <div className='pl-[0px]'>
          <h1 className='text-[48px] leading-[58px] w-[60%] font-bold mt-[50px]'>
            Your Lightning Fast Delivery Partner
          </h1>
          <p className='text-[15px] leading-[23px] font-normal mt-[30px] w-[80%]'>
            Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam.
            eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel
            reprehenderit
          </p>
          <div className='bg-white w-[60%] pr-[4px] rounded-[6px] flex items-center mt-[30px]'>
            <input type='text' placeholder='Zip code or City' className='bg-white outline-none w-full text-black py-[17px] pl-[14px]' />
            <button className='bg-[#2756FF] py-[12px] px-[20px] text-white rounded-[4px]'>Search</button>
          </div>
        </div>
        <div className='grid grid-cols-4 mt-[30px] pl-[20px]'>
          <div className='space-y-[10px] flex flex-col items-start justify-start'>
            <h2 className='text-[32px] font-semibold'>
              <CountUp end={1234} enableScrollSpy />
            </h2>
            <div className='h-[4px] w-[20px] bg-[#2756FF]'></div>
            <p>Clients</p>
          </div>
          <div className='space-y-[10px] flex flex-col items-start justify-start'>
            <h2 className='text-[32px] font-semibold'>
              <CountUp end={2351} enableScrollSpy />
            </h2>
            <div className='h-[4px] w-[20px] bg-[#2756FF]'></div>
            <p>Customers</p>
          </div>
          <div className='space-y-[10px] flex flex-col items-start justify-start'>
            <h2 className='text-[32px] font-semibold'>
              <CountUp end={421} enableScrollSpy />
            </h2>
            <div className='h-[4px] w-[20px] bg-[#2756FF]'></div>
            <p>Support</p>
          </div>
          <div className='space-y-[10px] flex flex-col items-start justify-start'>
            <h2 className='text-[32px] font-semibold'>
              <CountUp end={971} enableScrollSpy />
            </h2>
            <div className='h-[4px] w-[20px] bg-[#2756FF]'></div>
            <p>Workers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

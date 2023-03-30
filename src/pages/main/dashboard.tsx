import React from 'react';
import Header from './template';
import Calendar from './calendar';

const Dashboard = () => {
  return (
    <div className="Content">
      <nav className='z-10'>
        <Header />
      </nav>

      <div className="mt-16 overflow-hidden ">
        <div className="row w-screen p-8 rounded-lg bg-gray-100 dark:bg-slate-900">
          <div className="flex flex-col justify-center md:ml-60 bg-white dark:bg-slate-800 p-8 rounded-md">

            {/* Content Here */}
            <div className="text-xl text-center font-bold">Dashboard</div>

                
      <div className='grid lg:grid-cols-5 gap-4 p-4'>
              <div className='lg:col-span-2 col-span-1  flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                  <p className='text-2xl font-bold'>$7,846</p>
                  <p className='text-600'>Daily Revenue</p>
                </div> 

                <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
                </p>
              </div>
               
               <div className='lg:col-span-2 col-span-1 flex justify-between w-full border p-4 rounded-lg'>
                  <div className='flex flex-col w-full pb-4'>
                  <p className='text-2xl font-bold'>$1,437,876</p>
                  <p className='text-600'>YTD Revenue</p>
               </div>

              <p className='bg-orange-200 flex justify-center items-center p-2 rounded-lg'>
              <span className='text-green-700 text-lg'>+11%</span>
              </p>
            </div>  
               <div className=' flex justify-between w-full border p-4 rounded-lg'>
                  <div className='flex flex-col w-full pb-4'>
                  <p className='text-2xl font-bold'>11,437</p>
                  <p className='text-600'>Customers</p>
            </div>
               <p className='bg-blue-200 flex justify-center items-center p-2 rounded-lg'>
               <span className='text-green-700 text-lg'>+17%</span>
               </p>

             
      </div>

     
   </div>
   <Calendar />
          </div>
        </div>
      </div>
      
  </div>
  )
}

export default Dashboard;
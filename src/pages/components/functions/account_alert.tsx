import React from 'react'
import { useState, useEffect } from 'react';
export default function AccountAlert() {


     const [showAlert, setShowAlert] = useState(false); //alert
     useEffect(() => {
       // Show the div after 1 second
       setTimeout(() => {
         setShowAlert(false);
       }, 1000);

       // Hide the div after 3 seconds
       setTimeout(() => {
         setShowAlert(true);
       }, 3000);
     }, []);
  return (
    <div>
      {showAlert && (
        <div className=" w-full">
          <h1
            className="text-red-500 max-[480px]:text-lg text-center  
                                          sm:text-xl
                                           md:text-xl 
                                           lg:text-2xl"
          >
            Incorrect Email or Password!
          </h1>
        </div>
      )}
    </div>
  );
}

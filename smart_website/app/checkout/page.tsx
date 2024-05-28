
import React from 'react';

const CheckoutPage = () => {
    return (
    // <><div className='absolute left-9 w-72 h-72 bg-red-400 rounded-full'></div>
    // <div className='absolute left-9 w-72 h-72 bg-yellow-400 rounded-full'></div></>
        <div className=' h-96 flex justify-center items-center'>
            <div className='absolute w-72 h-72 bg-red-400 rounded-full  z-10'></div>
            <div className='absolute right-2rem w-72 h-72 bg-yellow-400 rounded-full z-20'></div>
            {/* <div className='absolute left-9 w-72 h-72 bg-green-400 rounded-full'></div> */}
            {/* <h1  className="font-bold text-4xl text-center">Welcome to  My Checkout Page</h1> */}
        </div>
  

        
    );
};

export default CheckoutPage;
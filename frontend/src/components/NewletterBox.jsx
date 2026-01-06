"use client";
import React from 'react';
function NewsletterBox() {
  const onSubmitHandler = (e) => {  
    e.preventDefault();
    // Yahan aap future me email submit logic add kar sakte hain
  };

  return (
    <div className='text-center px-4 py-8'>
      <p className='text-xl sm:text-2xl font-medium text-gray-800'>
        Subscribe now & get 20% off
      </p>
      <p className='text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta veniam dignissimos inventore ipsa.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-1/2 flex flex-col sm:flex-row items-center gap-3 mx-auto my-6 border rounded-lg overflow-hidden'
      >
        <input
          className='w-full sm:flex-1 outline-none px-3 py-2 text-gray-700 text-sm'
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className='bg-black text-white text-sm sm:text-xs px-6 sm:px-8 py-2 sm:py-3 hover:bg-gray-800 transition-colors duration-200'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsletterBox;

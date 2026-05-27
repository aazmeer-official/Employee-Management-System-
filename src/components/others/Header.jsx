import React, { useState } from 'react';
const Header = () => {
    return ( <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-2xl font-semibold'>Aazmeer ✌️</span></h1>
            <button
            type="submit"
            className="mt-2 rounded-xl bg-red-500 px-4 py-2 font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:bg-red-600 hover:shadow-red-500/30 active:scale-[0.98] px-7"
          >
            Login
          </button>
    </div> );
}
 
export default Header;
import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-screen h-24 text-white flex justify-evenly  items-center pl-4 pr-4 z-1000'>
       <div className="w-[20%] text-[#ffc400] flex text-3xl font-semibold ">
Joy Ma Durga
       </div>
<div className="w-[50%] h-full flex justify-center items-center"></div>
<ul className='flex gap-4 h-max w-max' >
<a href="/">
<li className='hover:cursor-pointer hover:scale-110 duration-100'>Home</li>
  
  </a><a href="#history"><li className='hover:cursor-pointer hover:scale-110 duration-100'>About / History</li></a>
<a href="#Gallery">    <li className='hover:cursor-pointer hover:scale-110 duration-100'>Gallery</li></a>    
<a href="#Contact"><li className='hover:cursor-pointer hover:scale-110 duration-100'>Contact</li></a>
</ul>
<h2 className="w-[20%] flex justify-center items-center">
    Since from 2019
</h2>

    </nav>
  );
}

export default Navbar;

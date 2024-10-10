import React from 'react';
import Imagesrc from '/Users/audwi/Pictures/Durga-Puja.png'
import Image from 'next/image';

const Banner = () => {
  return (
    
    <div className='w-screen h-screen  flex justify-center items-center'> 
    <div className='w-[80%] h-[75vh] z-100 mt-[1px] flex justify-between items-center'> 
      <Image src={Imagesrc} className='h-full w-[35%] rounded-md'></Image> 
    <div className="text-7xl font-bold">
        Joy Ma <br /> Durga
    </div>
    <br /> <br />
</div>
    </div>
  );
}

export default Banner;

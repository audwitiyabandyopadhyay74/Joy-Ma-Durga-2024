"use client"
import React from 'react';
import Image from 'next/image';
import img1 from '../img1.png'
import img2 from '../img2.png'
import img3 from '../img3.png'
// import seemoregif from "../Untitled.gif"
// import seemore from "../Untitled.gif"


const Gallery = () => {
    const imgstyle = "rounded-md h-max"
    //   const handleimgchange = () => {
    //   alert("hi" + navigator.vibrate(200))
    //   // console.log(e)
    // const e = document.getElementById('gif');

    // if (e.getAttribute('src') === seemore) {
    //     // e.getAttribute('src') = img3;
    //   console.log(e.src);
    // } else {
    //   console.log(e.src);
    // }
    // }
  return (
    <div className='w-screen h-screen flex justify-center items-center' id='Gallery'>
              <div className="w-[80%] h-[80%]">
<span className="text-6xl">
    Gallery
</span> <br /> <br /> 
<div className="flex flex-wrap gap-4 w-screen h-max">
    <Image src={img1} className={imgstyle} />
    <Image src={img2} className={imgstyle} />
    <Image src={img3} className={`${imgstyle} scale-50 mt-[-100px]`} />
{/* <Image src={seemore}  className={`${imgstyle} w-[264px] h-[232px] mt-[-150px]`} onMouseOver={handleimgchange} id='gif'/> */}
</div>
        </div>
      
    </div>
  );
}

export default Gallery;

import React from 'react';
import Imagesrc from '/Users/audwi/Pictures/Durga-Puja.png'
import Image from 'next/image';

const History = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center' id='history'>
      <div className="w-[80%] h-[80%]"> 
        <h1 className="text-6xl w-[100%] flex text-center">
        History

        </h1> <br />
Creation by the Trinity: According to Hindu mythology, Goddess Durga was created by the combined energies and divine powers of the trinity of Hindu gods:<Image src={Imagesrc} className='w-[50vh] float-right rounded-md'/>
Brahma (the creator)
Vishnu (the preserver)
Shiva (the destroyer)
The Demon Mahishasura:
A demon named Mahishasura had gained immense power and began wreaking havoc on both the heavens and the earth.
The gods realized that they couldn’t defeat him individually, so they united their energies to create a supremely powerful goddess: Durga.
Armed with various weapons bestowed by different gods, Durga set out to vanquish Mahishasura and restore cosmic order.
The Epic Battle:
The most well-known narrative featuring Goddess Durga is found in the Devi Mahatmya (also known as the Durga Saptashati or Chandi Patha).
Mahishasura had received a boon from Lord Brahma, making him virtually indestructible by any male deity.
The battle between Durga and Mahishasura raged for nine days and nights.
On the tenth day, known as Vijaya Dashami or Dussehra, Goddess Durga emerged victorious, symbolizing the triumph of good over evil.
Durga Puja:
This victory is celebrated with great fervor in the festival of Durga Puja, which takes place annually in various parts of India.
During Durga Puja, beautifully crafted idols of the goddess are worshipped, and elaborate rituals are performed.
      </div>
    </div>
  );
}

export default History;

import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import History from './components/History'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <History/>
      <Gallery/>
<Contact/>
      <Footer/>
    </div>
  );
}


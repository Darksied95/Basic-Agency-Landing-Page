import { useEffect, useRef, useState } from 'react';
import Header from './Component/Header/Header';
import SectionOne from './Component/Main/SectionOne/SectionOne';
import SectionTwo from './Component/Main/SectionTwo/SectionTwo';
import SectionThree from './Component/Main/SectionThree/SectionThree';
import SectionFour from './Component/Main/SectionFour/SectionFour';
import Footer from './Component/Footer/Footer';
import './App.css';

function App() {
  const appRef = useRef()

  return (
    <div ref={appRef}  >
      <Header />
      <main className='relative z-20 bg-white'>
        <SectionOne />
        <SectionTwo />
        <SectionThree appRef={appRef} />
        <SectionFour />
      </main>
      <Footer />
    </div>
  );
}

export default App;

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

  const [showSectionTwoHover, setShowSectionTwoHover] = useState(true);

  console.log(showSectionTwoHover, window.scrollY.toFixed(2));
  useEffect(() => {
    function updateSectionTwo() {
      setShowSectionTwoHover(window.scrollY > 600 ? true : false)
    }
    window.addEventListener('scroll', updateSectionTwo)

    return () => {
      window.removeEventListener('scroll', updateSectionTwo)
    }
  }, [showSectionTwoHover])
  return (
    <div ref={appRef}  >
      <Header />
      <main className='relative z-20 bg-white'>
        <SectionOne />
        <SectionTwo showSectionTwoHover={showSectionTwoHover} />
        <SectionThree appRef={appRef} />
        <SectionFour />
      </main>
      <Footer />
    </div>
  );
}

export default App;

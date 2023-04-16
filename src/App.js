import './App.css';
import Header from './Component/Header/Header';
import SectionFour from './Component/Main/SectionFour/SectionFour';
import SectionOne from './Component/Main/SectionOne/SectionOne';
import SectionThree from './Component/Main/SectionThree/SectionThree';
import SectionTwo from './Component/Main/SectionTwo/SectionTwo';
import Footer from './Component/Footer/Footer';
import { useRef } from 'react';


function App() {
  const appRef = useRef()
  return (
    <div ref={appRef} style={{ transition: "all ease-in 1000ms" }}>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree appRef={appRef} />
      <SectionFour />
      <Footer />
    </div>
  );
}

export default App;

import { useRef, createContext, useState } from 'react';
import Header from './Component/Header/Header';
import SectionOne from './Component/Main/SectionOne/SectionOne';
import SectionTwo from './Component/Main/SectionTwo/SectionTwo';
import SectionThree from './Component/Main/SectionThree/SectionThree';
import SectionFour from './Component/Main/SectionFour/SectionFour';
import Footer from './Component/Footer/Footer';
import './App.css';
import useHover from './Hooks/useHover';

const AppContext = createContext()
function App() {
  const { customMouseMoved: headerCustomMouse, updateCustomMouse: updateHeaderMouse } = useHover()
  const { customMouseMoved: sectionTwoCustomMouse, updateCustomMouse: updateSectionTwoMouse } = useHover()

  return (
    <AppContext.Provider
      value={
        {
          headerCustomMouse,
          updateHeaderMouse,
          sectionTwoCustomMouse,
          updateSectionTwoMouse,
        }
      }>
      <div >
        <Header />
        <main className='relative z-20 bg-white'>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export { AppContext }
export default App;

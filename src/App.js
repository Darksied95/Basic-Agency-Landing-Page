import { createContext } from 'react';
import Header from './Component/Header/Header';
import SectionOne from './Component/Main/SectionOne/SectionOne';
import SectionTwo from './Component/Main/SectionTwo/SectionTwo';
import SectionThree from './Component/Main/SectionThree/SectionThree';
import SectionFour from './Component/Main/SectionFour/SectionFour';
import Footer from './Component/Footer/Footer';
import useHover from './Hooks/useHover';
import './App.css';
import Cover from './Component/Cover/Cover';

export const AppContext = createContext()
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
      <>
        <Cover />
        <Header />
        <main className='relative z-20 bg-white'>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </main>
        <Footer />
      </>
    </AppContext.Provider>
  );
}

export default App;

import React from 'react';
import {Navbar,Home,Services,About,Contact,Footer} from './components/InitializeComponents';

function App() {
  return (
   <>
      <Navbar/>
      <Home />
      <Services/>
      <About/>
      <Contact/>
      <Footer  data-aos="fade-right"/>
   </>
  );
}

export default App;

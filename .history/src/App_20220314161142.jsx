import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { useState, useEffect } from 'react';
import Page1 from './Pages/Page1';


function App() {

  const [principal, setPrincipal]=useState(<Page2 />);

  return (
    <>

    <GlobalStyle />
    </>
  );
}
 
export default App;

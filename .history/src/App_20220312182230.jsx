import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Principal from './Principal';
import { useState, useEffect } from 'react';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';


function App() {

  const [principal, setPrincipal]=useState(<Page2 />);


  return (
    <>
    <Principal principal={principal} />
    <GlobalStyle />
    <Page2 setPrincipal={setPrincipal}/>
    </>
  );
}
 
export default App;

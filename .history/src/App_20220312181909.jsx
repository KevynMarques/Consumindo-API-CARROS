import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Principal from './Principal';
import { useState, useEffect } from 'react';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';


function App() {

  const [principal, setPrincipal]=useState(<Page1 />);


 <Page2 setPrincipal={setPrincipal}/>

  return (
    <>
    <Page2 setPrincipal={setPrincipal}/>
    <GlobalStyle />
    </>
  );
}
 
export default App;

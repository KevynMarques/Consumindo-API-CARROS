import { GlobalStyle } from './GlobalStyle';
import Principal from './Principal';
import { useState, useEffect } from 'react';
import Page1 from './Pages/Page1';

function App() {

  const [principal, setPrincipal]=useState(<Page1);
  return (
    <>
    <Principal setPrincipal={setPrincipal} principal={principal} />
    <GlobalStyle />
    </>
  );
}

export default App;

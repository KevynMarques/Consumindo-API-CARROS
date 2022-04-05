import { GlobalStyle } from './GlobalStyle';
import Principal from './Principal';
import { useState, useEffect } from 'react';
import 

function App() {

  const [principal, setPrincipal]=useState();
  return (
    <>
    <Principal setPrincipal={setPrincipal} principal={principal} />
    <GlobalStyle />
    </>
  );
}

export default App;

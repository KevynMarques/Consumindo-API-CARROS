import { GlobalStyle } from './GlobalStyle';
import Principal from './Principal';
import { useState, useEffect } from 'react';

function App() {

  const [prin, setGeral]=useState(<Sobre />);
  return (
    <>
    <Principal />
    <GlobalStyle />
    </>
  );
}

export default App;

import { GlobalStyle } from './GlobalStyle';
import Principal from './Principal';
import { useState, useEffect } from 'react';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';


function App() {

  const [principal, setPrincipal]=useState(<Page2 />);

  const Voltar = () => {
  return  console.log('testando')
}

  return (
    <>
    <Principal setPrincipal={setPrincipal} principal={principal} />
    <GlobalStyle />
    <Page2  Voltar={Voltar}/>
    </>
  );
}

export default App;

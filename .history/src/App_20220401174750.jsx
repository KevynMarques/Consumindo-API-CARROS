import React, {useContext}from 'react';
import { GlobalStyle } from './GlobalStyle';
import Router from './Routers/router';
import { CustomContextProvider } from './context/custom';


function App() {


  return (
    <> 
    <CustomContextProvider>
    <Router />
    </CustomContextProvider>
    <GlobalStyle />
    </>
  );
}
 
export default App;

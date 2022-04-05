import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { useState, useEffect } from 'react';
import Router from './Routers/router';
import { CustomContextProvider } from './context/custom';


function App() {


  return (
    <> 
    <CustomContextProvider >
    <Router />
    <GlobalStyle />
    </CustomContextProvider>
    </>
  );
}
 
export default App;

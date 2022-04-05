import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { useState, useEffect } from 'react';
import Router from './Routers/router';
import { CustomContext } from './context/custom';


function App() {


  return (
    <>
    <CustomContext.Provider value={{}}>
    <Router />
    <GlobalStyle />
    </CustomContext.Provider>
    </>
  );
}
 
export default App;

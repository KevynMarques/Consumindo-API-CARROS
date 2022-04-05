import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { useState, useEffect } from 'react';
import Page1 from './Pages/Page1';
import router from './Routers/router';


function App() {


  return (
    <>
    <Page1 />
    <GlobalStyle />
    </>
  );
}
 
export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page2


export default () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Page1 />} /> 
      <Route path="/Seleção/Veiculos" element={<Page1 />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";

export default () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Page1 />} /> 
    </Routes>
    </BrowserRouter>


    <BrowserRouter >
    <Routes >
    <Route path="/Seleção" element={<Page2 />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}
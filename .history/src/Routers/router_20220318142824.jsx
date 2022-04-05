import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
Page3
export default () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Page1 />} /> 
      <Route path="/Page2" element={<Page2 />} /> 
      <Route path="/Page3" element={<Page3 />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";

export default () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/Page1" element={<Page1 />} /> 
      <Route path="/Page2" element={<Page2 />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}
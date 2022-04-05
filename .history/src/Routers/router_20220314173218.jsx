import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";

export default () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Page2 />} /> 
      <Route path="/asd" element={<Page1 />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}
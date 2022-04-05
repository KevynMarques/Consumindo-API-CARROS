import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "../Pages/Page1";


export default () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Page1 />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}
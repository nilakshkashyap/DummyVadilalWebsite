import React, { useEffect } from "react";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import WomenHome from "./../pages/Home/WomenHome";
import ProductLanding from "./../pages/Product/Landing";
import NotFound from "../pages/NotFound";

function WomenRoutes() {
  return (
    <Routes>
      <Route index element={<WomenHome />} />
      <Route path="coats-jackets" element={<ProductLanding />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default WomenRoutes;

import React from "react";
import { Route, Routes } from "react-router-dom";
import KidsHome from "../pages/Home/KidsHome/KidsHome";
import ProductLanding from "./../pages/Product/Landing";
import NotFound from "../pages/NotFound";

function KidsRoutes() {
  return (
    <Routes>
      <Route index element={<KidsHome />} />
      <Route path="coats-jackets" element={<ProductLanding />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default KidsRoutes;

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

import Header from "./components/Header/Header";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import MainHome from "./pages/Home/MainHome";
import WomenRoutes from "./routes/WomenRoutes";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product/Product";

function MainLayout() {
  // the size of the window in the beginning
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // listen to the window resize event
  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.innerWidth);
    };
  }, []);

  return (
    <>
    {windowWidth<960 && <MobileHeader />}
    {windowWidth>=960 && <Header />}  

        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/women/*" element={<WomenRoutes />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/product/*" element={<Product />} />

        </Routes>

      <Footer />
    </>
  );
}

export default MainLayout;

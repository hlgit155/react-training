import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainHome from "./pages/Home/MainHome";
import WomenRoutes from "./routes/WomenRoutes";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product/Product";

function MainLayout() {
  return (
    <>
      <Header />

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

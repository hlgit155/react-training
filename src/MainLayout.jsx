import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainHome from "./pages/Home/MainHome";
import WomenHome from "./pages/Home/WomenHome";
import ProductLanding from "./pages/Product/Landing";

function MainLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/women">
          <Route index element={<WomenHome />} />
          <Route path="coats-jackets" element={<ProductLanding />} />
        </Route>
      </Routes>
    </>
  );
}

export default MainLayout;

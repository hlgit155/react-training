import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainHome from "./pages/Home/MainHome";
import WomenRoutes from "./routes/WomenRoutes";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Header />

        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/women/*" element={<WomenRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      <Footer />
    </>
  );
}

export default MainLayout;

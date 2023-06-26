import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainHome from "./components/HomeCompartment/HomeCompartment";
import WomenRoutes from "./routes/WomenRoutes";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <div style={{ paddingLeft: "24px", paddingRight: "24px", maxWidth: "1280px", margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/women/*" element={<WomenRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;

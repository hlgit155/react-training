import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainHome from "./pages/Home/MainHome";
import WomenRoutes from "./routes/WomenRoutes";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import { BodyOuter, BodyWrap } from "./MainLayout.styles";

function MainLayout() {
  return (
    <>
      <Header />
      <BodyOuter>
        <BodyWrap>
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/women/*" element={<WomenRoutes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BodyWrap>
      </BodyOuter>
      <Footer />
    </>
  );
}

export default MainLayout;

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainHome from "./pages/Home/MainHome";
import WomenRoutes from "./routes/WomenRoutes";
import NotFound from "./pages/NotFound";

function MainLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainHome/>} />
        <Route path="/women/*" element={<WomenRoutes/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default MainLayout;

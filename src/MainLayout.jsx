import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./pages/Home/MainContent/MainContent";

function MainLayout() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default MainLayout;

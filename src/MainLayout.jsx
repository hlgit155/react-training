import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MainHome from './pages/Home/MainHome';
import WomenRoutes from './routes/WomenRoutes';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer';

function MainLayout() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/women/*" element={<WomenRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;


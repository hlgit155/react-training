import React from "react";
import { MainWrap, Content } from "./MainContent.styles";
import { Route, Routes } from "react-router-dom";
import MainHome from "../MainHome/MainHome";
import WomenRoutes from "../../../routes/WomenRoutes";
import NotFound from "../../NotFound";

function MainContent() {
  return (
    <MainWrap>
      <Content>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/women/*" element={<WomenRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </MainWrap>
  );
}

export default MainContent;

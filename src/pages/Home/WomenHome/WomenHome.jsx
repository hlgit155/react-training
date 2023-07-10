import React from "react";
import HomeContent from "../../../components/HomeComponents/HomeContent";
import womenPage from "../../../database/women-page.json";


const WomenHome = () => {
  return (
    <>
    <HomeContent homeData={womenPage} />
    </>
    
  );
  
};

export default WomenHome;

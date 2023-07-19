import React from "react";
import HomeContent from "../../../components/HomeComponents/HomeContent";
import womenPage from "../../../database/women-page.json";
import CarouselContent from "../MainHome/CarouselContent";

const WomenHome = () => {
  return (
    <>
      <HomeContent homeData={womenPage} />
      <CarouselContent carouselData={womenPage} />
    </>
    
  );
  
};


export default WomenHome;

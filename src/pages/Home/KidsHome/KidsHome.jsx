import React, { useRef } from "react";

import HomeContent from "../../../components/HomeComponents/HomeContent";
import kidsPage from "../../../database/kids-page.json";
import CarouselContent from "../MainHome/CarouselContent";

const KidsHome = () => {
  return (
    <>
      <HomeContent homeData={kidsPage} />
      <CarouselContent carouselData={kidsPage} />
    </>
  );
};


export default KidsHome;

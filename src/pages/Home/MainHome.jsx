import homeCompartmentData from "../../database/page-images/home-compartment.json";
// import bottomeData from "../../database/main-home/main-home-bottom-text.json";
import HomeCompartment from "../../components/HomeCompartment/HomeCompartment";
import { MainHomeWrap, ShopAllBrands, BottomHeader, BottomeP } from "./MainHome.style";
import Carousel from "../../components/Carousel/Carousel"

function MainHome() {
  return (
    <MainHomeWrap>
      {homeCompartmentData.content.map((row) => {
        console.log("row", row);
        return <HomeCompartment data={row}></HomeCompartment>;
      })}
      <BottomHeader>{homeCompartmentData.bottom.header}</BottomHeader>
      <BottomeP dangerouslySetInnerHTML={{__html: homeCompartmentData.bottom.para}}></BottomeP>

      <Carousel children={homeCompartmentData.carousel[0]}></Carousel>
      <Carousel children={homeCompartmentData.carousel[1]}></Carousel>
      
    </MainHomeWrap>
  );
}

export default MainHome;

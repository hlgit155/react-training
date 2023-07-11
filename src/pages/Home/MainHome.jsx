import homeCompartmentData from "../../database/page-images/home-compartment.json";
// import bottomeData from "../../database/main-home/main-home-bottom-text.json";
import HomeCompartment from "../../components/HomeCompartment/HomeCompartment";
import {
  MainHomeWrap,
  ShopAllBrands,
  Bottom,
  BottomHeader,
  BottomeP,
} from "./MainHome.style";
import Carousel from "../../components/Carousel/Carousel";

function MainHome() {
  return (
    <MainHomeWrap>
      {homeCompartmentData.content.map((row) => {
        console.log("row", row);
        return <HomeCompartment data={row}></HomeCompartment>;
      })}
      <Bottom>
        <BottomHeader>{homeCompartmentData.bottom.header}</BottomHeader>
        <BottomeP
          dangerouslySetInnerHTML={{ __html: homeCompartmentData.bottom.para }}
        ></BottomeP>
      </Bottom>
    </MainHomeWrap>
  );
}

export default MainHome;

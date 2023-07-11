import womenData from "../../database/page-images/women.json";
// import bottomeData from "../../database/main-home/main-home-bottom-text.json";
import HomeCompartment from "../../components/HomeCompartment/HomeCompartment";
import { WomenHomeWrap } from "./WomenHome.style";
import Carousel from "../../components/Carousel/Carousel"

function MainHome() {
  return (
    <WomenHomeWrap>
      {womenData.content.map((row) => {
        console.log("row", row);
        return <HomeCompartment data={row}></HomeCompartment>;
      })}

      <Carousel children={womenData.carousel[0]}></Carousel>
      
    </WomenHomeWrap>
  );
}

export default MainHome;

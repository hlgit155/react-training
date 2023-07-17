import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import HomeContent from "../../../components/HomeComponents/HomeContent";
import womenPage from "../../../database/women-page.json";
import {
  BottomWrap,
  H2,
  HeadingLine,
  HeadingText,
  ImageWraps,
  InnerWrap,
  MainWrap,
  TextContainer,
  Heading,
  Titles,
  Image,
  ButtonContainer,
} from "./WomenHome.styles";

const WomenHome = () => {
  const carouselRef = useRef(null);

  return (
    <>
      <HomeContent homeData={womenPage} />

      {womenPage.bottomcontent.map((titleInfo, titleIdx) => (
        <MainWrap key={titleIdx}>
          {titleInfo.map((item, index) => (
            <InnerWrap key={index}>
              <HeadingLine>
                {item.title && <H2>{item.title}</H2>}
                <ButtonContainer>
                  <HeadingText>View All</HeadingText>
                </ButtonContainer>
              </HeadingLine>

              {item.subcontent[0].length > 3 && (
                <Carousel
                  ref={carouselRef}
                  itemsToShow={3}
                  itemsToScroll={1}
                  renderPagination={() => null} 
                >
                  {item.subcontent[0].map((subItem, subIndex) => (
                    <BottomWrap key={subIndex}>
                      {subItem?.image && (
                        <ImageWraps>
                          <Image src={subItem.image} alt="" />

                          <TextContainer>
                            {subItem?.titles && (
                              <Titles>{subItem.titles}</Titles>
                            )}
                            {subItem?.heading && (
                              <Heading>{subItem.heading}</Heading>
                            )}
                          </TextContainer>
                        </ImageWraps>
                      )}
                    </BottomWrap>
                  ))}
                </Carousel>
              )}
            </InnerWrap>
          ))}
        </MainWrap>
      ))}
    </>
  );
};

export default WomenHome;

// const BottomCarousel = ({ bottomContent }) => {
//   const [carouselIndex, setCarouselIndex] = useState(0);

//   const itemsPerSlide = 3;
//   const totalItems = bottomContent && bottomContent[0]?.subcontent[0]?.length || 0;

//   const totalSlides = Math.ceil(totalItems / itemsPerSlide);

//   const startIndex = carouselIndex * itemsPerSlide;
//   const endIndex = startIndex + itemsPerSlide;

//   const handleNext = () => {
//     setCarouselIndex((prevIndex) =>
//       prevIndex >= totalSlides - 1 ? prevIndex + 1 : prevIndex
//     );
//   };

//   const handlePrev = () => {
//     setCarouselIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
//   };

//   return (
//     <div>
//         {totalItems > itemsPerSlide && (
//         <div>
//           <button onClick={handlePrev}>Previous</button>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//         <Carousel>
//         {bottomContent &&
//           bottomContent[0]?.subcontent[0]?.slice(startIndex, endIndex).map((content, index) => (
//             <Carousel.Item key={index}>
//               {content?.image && <img src={content.image} alt={content.titles} />}
//               {content?.heading && <h3>{content.heading}</h3>}
//             </Carousel.Item>
//           ))}
//       </Carousel>
//       <button onClick={handlePrev}>Previous</button>
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

import React, { useRef, useState } from "react";
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
  PreviousL,
  NextL,
  ControlButton,
  StyledCarousel,
} from "./Carousel.styles";


const CarouselContent = (props) => {
  const carouselRef = useRef(null);
  const carouselData = props.carouselData;
  const { elements } = props.children;
  const length = elements.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  return (
    <>
      {carouselData.bottomcontent.map((titleInfo, titleIdx) => (
        <MainWrap key={titleIdx}>
          {titleInfo.map((item, index) => (
            <InnerWrap key={index}>
              <HeadingLine>
                {item.title && <H2>{item.title}</H2>}
                <ButtonContainer>
                <HeadingText>View All</HeadingText>
                <ControlButton onClick={prev} disabled={currentIndex === 0}>
                    <PreviousL currentIndex={currentIndex} />
                  </ControlButton>
                  <ControlButton
                    onClick={next}
                    disabled={currentIndex === length - 4}
                  >
                    <NextL currentIndex={currentIndex} length={length} />
                  </ControlButton>
                </ButtonContainer>
              </HeadingLine>

              {item.subcontent[0].length > 3 && (
                <StyledCarousel
                  ref={carouselRef}
                  itemsToShow={3}
                  itemsToScroll={1}
                
                >
                  {item.subcontent[0].map((subItem, subIndex) => (
                    <BottomWrap key={subIndex}>
                      {subItem && subItem.image &&(
                        <ImageWraps>
                          <Image src={subItem.image} alt="" />

                          <TextContainer>
                          {subItem && subItem.titles && <Titles>{subItem.titles}</Titles>}

                          {subItem && subItem.heading && <Heading>{subItem.heading}</Heading>}

                          </TextContainer>
                        </ImageWraps>
                      )}
                    </BottomWrap>
                  ))}
                </StyledCarousel>
              )}
            </InnerWrap>
          ))}
        </MainWrap>
      ))}
    </>
  );
};

export default CarouselContent;

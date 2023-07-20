
import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
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
  PreviousL,
  NextL,
} from "./Carousel.styles";

function MyArrow({ type, onClick, isEdge }) {
  const PointerIcon = type === consts.PREV ? PreviousL : NextL
  return (
    <div onClick={onClick} disabled={isEdge}>
      <PointerIcon/>
    </div>
  )
}

const CarouselContent = (props) => {
  const carouselData = props.carouselData;

  const breakPoints = [{ width: 1320, itemsToShow: 3 }];

  return (
    <>
      {carouselData.bottomcontent.map((titleInfo, titleIdx) => (
        <MainWrap key={titleIdx}>
          {titleInfo.map((item, index) => (
            <InnerWrap key={index}>
              <HeadingLine>
                {item.title && <H2>{item.title}</H2>}

                <HeadingText>View All</HeadingText>
              </HeadingLine>

              {item.subcontent[0].length > 3 && (
                <Carousel renderArrow={MyArrow} breakPoints={breakPoints} pagination={false}>
                  {item.subcontent[0].map((subItem, subIndex) => (
                    <BottomWrap key={subIndex}>
                      {subItem && subItem.image && (
                        <ImageWraps>
                          <Image src={subItem.image} alt="" />
                          <TextContainer>
                            {subItem && subItem.titles && (
                              <Titles>{subItem.titles}</Titles>
                            )}
                            {subItem && subItem.heading && (
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

export default CarouselContent;

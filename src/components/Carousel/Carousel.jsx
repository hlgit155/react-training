import React from "react";
import { useState } from "react";
import {
  CarouselContainer,
  WidthContainer,
  CarouselWrapper,
  CarouselContentWrapper,
  CarouselContent,
  StyledControlButton,
  IconLeft,
  IconRight,
  HeaderRow,
  Header,
  Buttons
} from "./Carousel.style";
import ProductCrs from "../ProductCrs/ProductCrs";
import ArticleCrs from "../ArticleCrs/ArticleCrs";

export default function Carousel(props) {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("elements", children.elements.length);
  const length = children.elements.length;

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
    <CarouselContainer>
    <WidthContainer>

      <HeaderRow>
          <Header>{children.header}</Header>
          <Buttons>
            <StyledControlButton onClick={prev} disabled={currentIndex===0}>
              <IconLeft currentIndex={currentIndex}></IconLeft>
            </StyledControlButton>
            <StyledControlButton onClick={next} disabled={currentIndex===length-4}>
              <IconRight currentIndex={currentIndex} length={length}></IconRight>
            </StyledControlButton>
          </Buttons>
        </HeaderRow>

        <CarouselWrapper>
          <CarouselContentWrapper>
            <CarouselContent
              style={{ transform: `translateX(-${currentIndex * 25}%` }}
            >
              {children.elements.map((item) => {
                return children.type === "product" ? (
                  <ProductCrs data={item}></ProductCrs>
                ) : (
                  <ArticleCrs data={item}></ArticleCrs>
                );
              })}
            </CarouselContent>
          </CarouselContentWrapper>
        </CarouselWrapper>

    </WidthContainer>

    </CarouselContainer>
  );
}

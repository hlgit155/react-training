import React from "react";
import { useState, useEffect, useRef } from "react";
import homeCompartmentData from "../../database/page-images/home-compartment.json";
import SizedImageTextBox from "../SizedImageTextBox/SizedImageTextBox";

import {
  HomeCompartmentWrap,
  HomeCompartmentCentered,
  Compartment,
  CompartmentTitle,
  ImageTextGroup,
} from "./HomeCompartment.style";

export default function HomeCompartment() {
  const widthRef = useRef();
  const [imageRowWidth, setImageRowWidth] = useState();

  // This function get and update the width of the image row
  const updateImageRowWidth = () => {
    setImageRowWidth(widthRef.current.clientWidth);
    console.log("width:", imageRowWidth);
  };

  useEffect(() => {
    updateImageRowWidth();
  });

  useEffect(() => {
    window.addEventListener("resize", updateImageRowWidth());
  });

  return (
    <HomeCompartmentWrap>
      <HomeCompartmentCentered>
        {homeCompartmentData.content.map((imageGroup, index) => {
          return (
            <Compartment ref={widthRef}>
              {"title" in imageGroup && (
                <CompartmentTitle>{imageGroup.title}</CompartmentTitle>
              )}
              <ImageTextGroup >
                {imageGroup.group.map((img, idx) => {
                  return (
                    <SizedImageTextBox 
                      src={img.image}
                      width={
                          ((imageRowWidth -
                            24 * (imageGroup["item-per-row"] - 1)) *
                            img.percent) /
                          100
                      }
                      img={img}
                    >
                    </SizedImageTextBox>
                  );
                })}
              </ImageTextGroup>
            </Compartment>
          );
        })}
      </HomeCompartmentCentered>
    </HomeCompartmentWrap>
  );
}

import React from "react";
import homeCompartmentData from "../../database/page-images/home-compartment.json";

import {
  HomeCompartmentWrap,
  HomeCompartmentCentered,
  ImageGroup,
  SectionTitle,
  ImageSection,
} from "./HomeCompartment.style";

export default function HomeCompartment() {
  return (
    <HomeCompartmentWrap>
      <HomeCompartmentCentered>
        {homeCompartmentData.content.map((imageGroup, index) => {
          return imageGroup.type === "text-link" ? (
            <>texttext</>
          ) : (
            <ImageGroup>
              {"title" in imageGroup ? (
                <SectionTitle>{imageGroup.title}</SectionTitle>
              ) : null}
              {/* if imageGroup.length===2 return
              else if === 3 return */}
              <ImageSection>
                {imageGroup.group.map((img, idx) => {
                  return <img src={img.image} width="100%"></img>;
                })}
              </ImageSection>
            </ImageGroup>
          );
        })}
      </HomeCompartmentCentered>
    </HomeCompartmentWrap>
  );
}

import React from "react";
import { useState, useEffect, useRef } from "react";


import {

  CompartmentRow,
  CompartmentTitle,
  Compartment,
  Text,
  CompartmentImage,
  ImageHeader,
  ImageTextGroup,
  ImageDescription,
  CompartmentButton
} from "./HomeCompartment.style";

export default function HomeCompartment(props) {
  const { data } = props;
  // const rowData = props.data
  {
    console.log("rowrow", data);
  }

  return (
    <CompartmentRow>
      {"title" in data && (
        <CompartmentTitle>{data.title}</CompartmentTitle>
      )}
      <ImageTextGroup hrStyled={data.hr}>
        {data.group.map((item) => {
          return (
            <Compartment
              itemsPerRow={data["item-per-row"]}
              text={item?.text}
            >
              {console.log("item", item?.text)}
              {"text" in item && <Text>{item.text}</Text>}
              {"image" in item && <CompartmentImage src={item.image}></CompartmentImage>}
              
              {"imageHeader" in item && item.textPosition === "below" && (
                <ImageHeader>{item.imageHeader}</ImageHeader>
              )}
              {"description" in item && (
                <ImageDescription>{item.description}</ImageDescription>
              )}
            </Compartment>
          );
        })}
      </ImageTextGroup>
      {"button" in data && <CompartmentButton>{data.button}</CompartmentButton>}
      {"hr" in data && <hr style={{marginTop:"30px"}}></hr>}
    </CompartmentRow>
  );
}

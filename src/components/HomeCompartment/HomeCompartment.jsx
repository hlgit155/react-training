import React from "react";
import { useState, useEffect, useRef } from "react";
import homeCompartmentData from "../../database/page-images/home-compartment.json";
import SizedImageTextBox from "../SizedImageTextBox/SizedImageTextBox";

import {

  CompartmentRow,
  CompartmentTitle,
  Compartment,
  Text,
  CompartmentImage,
  ImageHeader,
  ImageTextGroup,
  ImageDescription,
} from "./HomeCompartment.style";

export default function HomeCompartment(props) {
  // const rowData = props.data
  {
    console.log("rowrow", props.data);
  }

  return (
    <CompartmentRow>
      {"title" in props.data && (
        <CompartmentTitle>{props.data.title}</CompartmentTitle>
      )}
      <ImageTextGroup>
        {props.data.group.map((item) => {
          return (
            <Compartment
              itemsPerRow={props.data["item-per-row"]}
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
    </CompartmentRow>
  );
}

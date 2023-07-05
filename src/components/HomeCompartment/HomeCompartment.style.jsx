import styled from "styled-components";
import { CoreBoxWidth } from "../../core/core.styles";


export const CompartmentRow = styled.div`
  width: 100%;
  margin-bottom: 48px;
`;

export const CompartmentTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  font-family: "Proxima Nova","Helvetica Neue",Helvetica,Helvetica,Arial,sans-serif;
`;

const blockGap = "16";

export const ImageTextGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${blockGap}px;
  /* padding: 24px 0; */

`;

export const ImageHeader = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin: 8px 0;
  font-family: "Proxima Nova","Helvetica Neue",Helvetica,Helvetica,Arial,sans-serif;
`;


export const ImageDescription = styled.div`
  font-size: 16px;
  font-family: "Proxima Nova","Helvetica Neue",Helvetica,Helvetica,Arial,sans-serif;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: white;
  text-align: center;
  font-family: "Proxima Nova","Helvetica Neue",Helvetica,Helvetica,Arial,sans-serif;
`;

const blockMargin = "8";

export const Compartment = styled.div`
  width: ${(props) => {
    let widthPercentage = 100 / props.itemsPerRow + "%";
    let marginToReduce = blockMargin * 2;
    let minusGap = Number(blockGap)*(props.itemsPerRow-1)/props.itemsPerRow;
    return `calc(${widthPercentage} - ${minusGap}px)`;
  }};

  /* margin: ${blockMargin}px ${blockMargin}px; */
  background-color: ${ (props) => {
    return props.text ? "#232323" : ""
  }  }
  
`;

export const CompartmentImage = styled.img`
  width:100%;
`;

export const CompartmentButton = styled.div`
  background-color: white;
  font-family: "Proxima Nova","Helvetica Neue",Helvetica,Helvetica,Arial,sans-serif;
  text-align: center;
  font-weight: 600;
  padding: 16px 20px;
  border: 1px solid black;
  border-radius: 2px;
  margin: 40px auto;
  width: 244px;
`;


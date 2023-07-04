import styled from "styled-components";
import { CoreBoxWidth } from "../../core/core.styles";


export const CompartmentRow = styled.div`
  width: 100%;
`;

export const CompartmentTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  font-family: "Proxima Nova","Helvetica Neue",Helvetica,Helvetica,Arial,sans-serif;
`;

export const ImageTextGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 24px 0;
`;

export const ImageHeader = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin: 8px 0;
  font-family: "Proxima Nova","Helvetica Neue",Helvetica,Helvetica,Arial,sans-serif;
`;


export const ImageTextWrap = styled.div`
  display: block;

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
    return `calc(${widthPercentage} - ${marginToReduce}px)`;
  }};
  margin: ${blockMargin}px ${blockMargin}px;
  background-color: ${ (props) => {
    return props.text ? "#232323" : ""
  }  }
  
`;

export const CompartmentImage = styled.img`
  width:100%;
`;


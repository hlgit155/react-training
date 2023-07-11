import styled from "styled-components";
import { CoreBoxWidth, CoreH1, CoreH2, CoreP} from "../../core/core.styles";
import { NavLink } from "react-router-dom";


export const CompartmentRow = styled.div`
  width: 100%;
  margin-bottom: 48px;
`;

export const CompartmentTitle = styled(CoreH1)`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 600;
`;

const blockGap = "16";

export const ImageTextGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: ${blockGap}px;
  row-gap: 24px;

`;

export const ImageHeader = styled(CoreH2)`
  font-weight: 600;
  font-size: 18px;
  margin-top: 8px;
`;


export const ImageDescription = styled(CoreP)`
  font-size: 16px;
`;

export const Text = styled(CoreP)`
  font-size: 16px;
  font-weight: 600;
  color: white;
  text-align: center;
`;

const blockMargin = "8";

export const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  color: black;
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


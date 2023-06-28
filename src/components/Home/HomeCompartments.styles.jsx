import styled from "styled-components";

export const CompartmentRow = styled.section`
  width: 100%;
`;

export const CompartmentWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 48px;
`;

const blockMargin = "8";

export const CompartmentBox = styled.div`
  width: ${(props) => {
    let widthPercentage = 100 / props.numOfBlock + "%";
    let marginToReduce = blockMargin * 2;
    return `calc(${widthPercentage} - ${marginToReduce}px)`;
  }};
  margin: 0 ${blockMargin}px;
`;

export const CompartmentImage = styled.img`
  width: 100%;
`;

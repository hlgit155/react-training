import styled from "styled-components";

export const CompartmentRow = styled.section`
  width: 100%;
`;

export const CompartmentWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 48px;
`;

const blockMargin = "8px";
export const CompartmentImage = styled.img`
  width: ${(props) => 100 / props.numOfBlock + "%"};
  margin: 0 ${blockMargin};
`;

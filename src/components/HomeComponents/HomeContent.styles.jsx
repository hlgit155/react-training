import styled from "styled-components";
const marginBottom = "48px";

export const RowWrap = styled.div`
  display: flex;
  margin-bottom: ${marginBottom};
  flex-direction: column;
  position: relative;
  margin: ${(props) => (props.rowLength === 1 ? "0 8px 8px" : "8px 0px 32px")};
`;

export const MiniRowWrap = styled.div`
  width: 100%;
  display: flex;
`;

const calculateWidth = (rowLength) => {
  return `${1280 / rowLength}px`;
};

export const ImageWrap = styled.div`
  width: ${(props) => calculateWidth(props.rowLength)};
  margin-left: 8px;
  margin-right: 8px;
`;


export const Images = styled.img`
  width: 100%;
`;


export const Description = styled.h2`
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 20px;
  margin: 0 110px 32px;
  line-height: 36px;
`;

export const TextStyle = styled.div`
  background-color: #232323;
  color: white;
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  /* letter-spacing: 0.3px; */
`;


export const Title = styled.h2`
  padding: 8px 8px;
`;

export const FooterStyle = styled.h3`
  margin: 0;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const TextTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  letter-spacing: 1.12px;
`;

export const ParagraphWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 20px;
`;


export const TextContent = styled.div`
  margin: 0 0 20px 0;
  letter-spacing: 0.01875em;
  font-size: 14px;
  line-height: 20px;
`;

export const HR = styled.hr`
  margin-top: 28px;
`;

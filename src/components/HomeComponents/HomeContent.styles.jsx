import styled from "styled-components";
const marginBottom = "48px";

export const RowWrap = styled.div`
  display: flex;
  margin-bottom: ${marginBottom};
  flex-direction: column;
  position: relative;
  margin-top: 0;
  margin-bottom: 48px;
`;

export const MiniRowWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const calculateWidth = (rowLength) => {
  const calculateWidth = `${100 / rowLength}%`;
  return calculateWidth;
};

const marginPixel = 16;

export const ImageWrap = styled.div`
  width: calc(${(props) => calculateWidth(props.rowLength)} - ${marginPixel}px);
  margin: 0 8px;
  margin-bottom: ${marginPixel}px;
`;

export const Images = styled.img`
  width: 100%;
  margin-right: 16px;
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
  margin-top: 0;
  margin-bottom: 20px;
`;

export const FooterStyle = styled.h3`
  margin: 0 0 8px;
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
  /* margin: 0 0 20px 0; */
  letter-spacing: 0.01875em;
  font-size: 14px;
  line-height: 20px;
`;

export const HR = styled.hr`
  margin-top: 28px;
`;

import styled from "styled-components";
const marginBottom = "48px";

const calculateWidth = (rowLength) => {
  return `${1280 / rowLength}`;
};

export const RowWrap = styled.div`
  display: flex;
  margin-bottom: ${marginBottom};
  // justify-content: space-between;
`;

export const Wraps = styled.div`
  flex: 0 0 ${(props) => calculateWidth(props.rowLength)};
  width: 100%;
  position: relative;
  margin: ${(props) => (props.rowLength === 1 ? "0 8px 8px" : "0 8px 16px")};
`;

export const Images = styled.img`
  width: 100%;
`;

export const Description = styled.h2`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 20px;
  margin: 0 0 32px;
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
export const BottomWrap = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  padding: 8px 8px;
`;

export const FooterStyle = styled.h3`
  margin: 0;
  padding-top: 8px;
  padding-bottom: 24px;
`;

export const MiniRowWrap = styled.div`
  flex: 0 0 ${(props) => calculateWidth(props.rowLength)};
  width: 100;
  display: flex;
`;

export const ImageWrap = styled.div`
  margin-left: 8px;
  margin-right: 8px;
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
`;

export const TextWrap = styled.div`
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
// export const SecondRowWrap = styled.div`
//     margin-top: ${magrinTop};
//     margin-bottom: ${marginBottom};
// `;

// export const SecondImages = styled.div`
//     width: calc((100% - 48px) / 3);
//     margin: 0 8px 24px;
//     margin-bottom: 16px;
// `;

// export const Button = styled.button`
//     display: flex;
//     padding: 16px 32px;
//     max-width: calc(50% - 8px);
//     align-items: center;
//     justify-content: center;
// `;

// export const ButtonWrap = styled.div`
//     margin-bottom: ${marginBottom};
//     justify-content: space-between;
// `;

// export const FourthRowWrap = styled.div`
//     margin-bottom: ${marginBottom};
//     margin-top: ${magrinTop};
// `;

// export const FourthImages = styled.div`
//     width: calc((100% - 32px) / 2);
//     margin: 0 8px 24px;
//     margin-bottom: 16px;
// `

// export const FifthRowWrap = styled.div`
//     margin-bottom: ${marginBottom};
// `;

// export const Title = styled.header`
//     margin-bottom: 3px;
// `;

// export const FifthImages = styled.div`

// `;

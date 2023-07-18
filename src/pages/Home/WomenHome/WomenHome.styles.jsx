import styled from "styled-components";

export const MainWrap = styled.div`
  min-width: 1320px;
  margin: 0 calc(640px - 50vw + 0px);
  background-color: #f5f5f5;
`;

export const InnerWrap = styled.div`
  min-width: 768px;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1320px;
  padding-top: 48px;
  padding-bottom: 48px;
`;

export const H2 = styled.h2`
  color: #232323;
  margin: 0;
  font-size: 24px;
  font-family: "proxima nova bold", "helvetica neue", Helvetica, Arial,
    sans-serif;
`;

export const HeadingLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeadingText = styled.div`
  min-width: 768px;
  font-size: 16px;
  display: flex;
  justify-content: end;
  font-weight: bold;
  align-items: center;
  /* margin-right: 96px;
    margin-top: 0; */
`;

export const BottomWrap = styled.div`
  margin-top: 8px;
  display: flex;
`;

export const ImageWraps = styled.div`
  margin: 8px;
  width: 30.71%;
`;

export const TextContainer = styled.div`
  margin-left: 10px;
  margin-right: 16%;
  background-color: #fff;
  padding: 16px 24px;
`;

export const Heading = styled.h3`
  color: #232323;
  margin: 0;
  font-size: 16px;
  min-height: 2.7em;
  font-family: "proxima nova bold", "helvetica neue", Helvetica, Arial,
    sans-serif;
  line-height: 1.5;
  letter-spacing: 0.3px;
`;

export const Titles = styled.h4`
  color: #696969;
  font-size: 12px;
  font-family: "proxima nova bold", "helvetica neue", Helvetica, Arial,
    sans-serif;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 8px;
  letter-spacing: 0.3px;
`;

export const Image = styled.img`
     width: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    margin-left: 10px;
`;

export const CarouselContainer = styled.div`
     display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`;

export const CarouselButton = styled.button`
    background-color: #ebe4e4;
`;
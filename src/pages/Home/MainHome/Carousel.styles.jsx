import styled from "styled-components";
import { ReactComponenet as NextLogo } from "./../../../assets/next.svg";
import { ReactComponent as PreviousLogo } from "./../../../assets/previous.svg";
import { Carousel } from "react-bootstrap";

export const MainWrap = styled.div`
  min-width: 100%;
  margin: 0 calc(640px - 50vw + 0px);
  background-color: #f5f5f5;
  position: relative;
`;

export const NextL = styled(NextLogo)`
  line-height: 15px;
`;

export const PreviousL = styled(PreviousLogo)`
  line-height: 15px;
`;

export const InnerWrap = styled.div`
  margin: 0 auto;
  padding: 48px 20px;
  max-width: 1320px;
  position: relative;
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
  width: 30.71%;
`;

export const ImageWraps = styled.div`
  margin: 8px;
  width: 100%;
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  bottom: -10%;
  left: 0;
  width: 100%;
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

export const StyledCarousel = styled(Carousel)`
  width: 100%;
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

export const ControlButton = styled.button`
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;
`;

// export const CarouselContainer = styled.div`
//      display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 200px;
// `;

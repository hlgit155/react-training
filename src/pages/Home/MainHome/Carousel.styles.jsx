import styled from "styled-components";
import { ReactComponent as NextLogo } from "./../../../assets/next.svg";
import { ReactComponent as PreviousLogo } from "./../../../assets/previous.svg";


export const MainWrap = styled.div`
  min-width: 1320px;
  margin: 0 calc(640px - 50vw + 0px);
  background-color: #f5f5f5;
  position: relative;
`;

export const NextL = styled(NextLogo)`
  position: absolute;
  height: 20px;
  cursor: pointer;
  top: 11%;
  margin-left: -40px;
`;
export const PreviousL = styled(PreviousLogo)`
  position: absolute;
  height: 20px;
  cursor: pointer;
  margin-left: 1190px;
  top: 11%;
`;


export const InnerWrap = styled.div`
  margin: 0 auto;
  padding: 48px 24px;
  max-width: 1320px;
  position: relative;
  height: 500px;
`;

export const H2 = styled.h2`
  color: #232323;
  margin: 0;
  font-size: 24px;
  font-family: "proxima nova bold", "helvetica neue", Helvetica, Arial,
    sans-serif;
  width: 60%;
  padding-left: 20px;
`;

export const HeadingLine = styled.div`
  display: flex;
  flex-direction: row;
  
`;

export const HeadingText = styled.div`
  font-size: 16px;
  display: flex;
  width: 30%;
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
  width: 100%;
  position: relative;
`;

export const TextContainer = styled.div`
  position: absolute;
  bottom: 30%;
  left: 10%;
  background-color: #fff;
  padding: 16px 24px;
  width: 80%;
  height: 25%;

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
  
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
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
  width: 110%;
  height: 60%;
`;


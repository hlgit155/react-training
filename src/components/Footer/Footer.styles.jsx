import styled from "styled-components";
import { CoreBoxWidth } from "../../core/core.styles";

export const OuterWrap = styled.footer`
  background-color: #222;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
`;

export const Wrap = styled(CoreBoxWidth)`
  padding: 2rem 0;
`;

export const FooterWrap = styled.div`
  background-color: #222;
  display: flex;
  max-width: 1280px;
  padding: 2.5rem 0;
  justify-content: space-between;
  position: relative;
  left: 10%;
`;

export const BottomWrap = styled.div`
  position: relative;
  left: 10%;
  width: 85%;
`;

export const FooterWrapItem = styled.div`
  flex-direction: column;
  color: #acacac;
  font-size: 15px;
`;

export const Column = styled.div`
  width: 45%;
`;

export const Section = styled.div`
 
  display: flex;
  flex-direction: row;
`;

export const InnerSection = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: row; */
`;

export const TitleFooter = styled.h4`
  color: white;
`;

export const MenuItem = styled.div`
  padding: 8px;
  font-weight: 180;
  font-family: "Proxima Nova light";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 50%;
`;

export const RightContainer = styled.div`
  width: 40%;
  position: relative;
  left: 10%;
`;

export const Text = styled.div`
  color: #e7e3e3;
  font-weight: 180;
  font-family: "Proxima Nova light";
`;

export const Select = styled.select`
  width: 40%;
  height: 40px;
  font-family: "Proxima nova Bold";
  border: none;
  border-right: 1px solid whitesmoke;
`;

export const Input = styled.input`
  padding: 15px 50px 15px;
  height: 40px;
  width: 70%;
  color: lightgrey;
  border: none;
`;

export const Button = styled.button`
  height: 40px;
  padding: 15 px 6px 15px;
  width: 40%;
  margin-left: 10px;
  border: none;
`;

export const SearchGroup = styled.div`
  display: flex;
  margin: 10px 5px 15px;
`;

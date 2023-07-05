import styled from "styled-components";
import { CoreBoxWidth } from "../../core/core.styles";
import { ReactComponent as IconicLogo } from "../../assets/Footer/iconic.svg";
import { ReactComponent as AppleLogo } from "../../assets/Footer/apple.svg";
import { ReactComponent as GoogleLogo } from "../../assets/Footer/google.svg";

export const OuterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
`;

export const FooterWrap = styled(CoreBoxWidth)`
  display: flex;
  background-color: #222;
  padding: 2.5rem 16px;
  justify-content: space-between;
`;

export const FooterWrapItem = styled.div`
  flex-direction: column;
  width: 100%;
  color: #acacac;
  font-size: 15px;
  padding-left: 8px;
  padding-right: 8px;
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
  padding-left: 8px;
  padding-right: 8px;
`;

export const TitleFooter = styled.h4`
  color: white;
`;

export const MenuItem = styled.div`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;
  margin-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 50%;
`;

export const RightContainer = styled.div`
  width: 40%;
  padding-left: 8px;
  padding-right: 8px;
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

export const BottomSection = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: center;
`;

export const Iconic = styled(IconicLogo)`
  height: 16px;
`;

export const Apple = styled(AppleLogo)`
  height: 40px;
`;

export const Google = styled(GoogleLogo)`
  height: 40px;
`;

export const FooterBottom = styled(CoreBoxWidth)`
  background-color: white;
  display: grid;
  padding: 16px 24px;
`;

export const Wraps = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconicWrap = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: center;
`;

export const AppleGoogleWrap = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: right;
`;

export const GfgLogoimg = styled.img`
  width: 6.5rem;
`;

export const GfgLogoWrap = styled.div`
  width: 33.33%;
`;

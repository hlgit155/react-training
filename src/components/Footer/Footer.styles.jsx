import styled from "styled-components";
import { CoreBoxWidth } from "../../core/core.styles";
// import { ReactComponent as GFGLogo } from "../../assets/footer/gfg-logo.png"
import { ReactComponent as AppStoreLogo } from "../../assets/footer/app-store-badge.svg";
import { ReactComponent as GooglePlayLogo } from "../../assets/footer/google-play-badge.svg";
import { ReactComponent as IconicLogo } from "./../../assets/logo.svg";

export const OuterWrap = styled.footer`
  background-color: black;
  width: 100%;
  font-size: 0.75rem;
`;

export const Wrap = styled(CoreBoxWidth)`
  /* width: 100%;
  max-width: 1280px; */
  margin: 0 auto;
  padding: 2.5rem 24px;
`;

export const FooterWrap = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const FooterColumn = styled.div`
  @media (min-width: 768px) {
    width: 33%;
  }
  @media (max-width: 767px) {
    width: 50%;
  }
`;

export const ColumnHeader = styled.div`
  color: white;
  font-family: Proxima Nova Bold, Sans-Serif;
  font-weight: 600;

  margin: 16px 0 12px;
`;

export const FooterItem = styled.div`
  color: #ffffffb3;
  font-family: Proxima Nova, Sans-Serif;
  margin-bottom: 0.75rem;
`;

export const BottomWrap = styled.div`
  color: white;
  font-family: Proxima Nova, Sans-Serif;
  margin-bottom: 0.75rem;
  padding: 2.5rem 0;
`;

export const BottomHeader = styled.div`
  color: white;
  font-family: Proxima Nova, Sans-Serif;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
`;

export const BottomColumn = styled.div`
 
  @media (min-width: 768px) {
 width: 25%;

  }
  @media (max-width: 767px) {
    
  }
`;

export const BottomColumnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
`;

export const Half = styled.div`
    width: 50%;
  @media (min-width: 768px) {
    display: flex;
  justify-content: stretch;

  }
  @media (max-width: 767px) {

  }

`;

export const BottomItem = styled.div`
  color: #ffffffb3;
  font-family: Proxima Nova, Sans-Serif;
  margin-bottom: 0.75rem;
`;

export const SiteMapBox = styled.div`

  display: flex;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    width: 100%;
    flex-wrap: wrap;
  }

`;
export const SubscriptionBox = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 40%;
  }

`;

export const Message = styled.p`
  color: white;
  margin: 0 0 20px;
`;
export const SearchGroup = styled.div`
  display: flex;
  margin: 0 0 16px;
`;

export const SelectAndInput = styled.div`
  display: flex;
  width: calc(75% - 8px);
`;

export const Select = styled.select`
  width: 30%;
  height: 40px;
  padding: 0 16px;
  border: none;
  border-right: 1px solid #f5f5f5;
  /* background-color: #ffffff; */
`;

export const Input = styled.input`
  width: 70%;
  height: 40px;
  padding: 8px;
  border: none;
`;

export const Button = styled.button`
  height: 40px;
  width: 25%;
  padding: 12px 4px 10px;
  margin-left: 8px;
  border: none;
`;

export const IcIconic = styled(IconicLogo)`
  height: 14px;
`;
export const IcAppStore = styled(AppStoreLogo)`
  height: 34px;
`;
export const IcGooglePlay = styled(GooglePlayLogo)`
  height: 34px;
`;
export const FooterTradeMarkconGroupWrap = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
`;
export const FooterTradeMarkconGroup = styled(CoreBoxWidth)`
  display: grid;
  grid-template-columns: 42% 16% 42%;
  align-items: center;
  padding: 16px 24px;
`;
export const GFGIconWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const IconicWrap = styled.div`
  /* font-size: 14px; */

  display: flex;
  justify-content: center;
`;
export const AppStoreGooglePlayWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

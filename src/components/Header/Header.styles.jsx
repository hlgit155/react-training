import styled from "styled-components";
import { CoreBoxWidth } from "../../core/core.styles";
import { ReactComponent as AssetLogo } from "./../../assets/logo.svg";

export const HeaderWrap = styled.header`
  width: 100%;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: black;
  flex-direction: column;
  
`;

export const ExtraTopbarWrap = styled(HeaderSection)`
  background-color: white !important;
`;

export const ExtraTopbar = styled(CoreBoxWidth)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 0;
  gap: 15px;
`;

export const ExtraTopbarItem = styled.div`
  display: flex;
  color: #acacac;
  font-size: 14px;
`;

export const TopbarRow = styled(CoreBoxWidth)`
  display: grid;
  line-height: 20px;
  grid-template-columns: max-content auto max-content;
`;

export const Logo = styled(AssetLogo)`
  fill: white !important;
  line-height: 24px;
  min-width: 70px;
  width: 160px;
  margin: auto 24px;
`;

export const NavbarRow = styled(CoreBoxWidth)`
  display: flex;
  width: 100%;
  

`;

export const NavbarItem = styled.div`
    color: white;
    text-transform: uppercase;
    font-family: "Proxima Nova", "Helevetica Neue", Helvetica,Helvetica,Arial,sans-serif;
    padding: 14px 24px;
    transition: all .25s;
    cursor: pointer;

    &:hover {
        background-color: rgba(255,255,255,.2);
    }
    &:active {
        border-bottom: 1px solid #eee;
    }
`;

export const SubmenuRow = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  width: 100%;
  min-height: 50vh;
  padding-top: 16px 24px;
  background-color: #fff;
  transition: all .2s;
  z-index: 10;
`;

export const SubmenuContainer = styled(CoreBoxWidth)`
  display: flex;
  width: 100vw;
  align-items: flex-start;
  padding: 24px 16px 0px;
  background-color: #f7f4f4;
`;

export const SubmenuItem = styled(CoreBoxWidth)`
  
`;

export const SubColumn = styled.div`
  padding:24px;
  max-width: 33%;
`;

export const SubHeader = styled.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const ListItem = styled.div`
  padding: 0.5rem 0;
  font-weight: 200;
  font-family: "Proxima Nova light";
`;

export const ImageWrap = styled.div`
  padding: 0.5rem 0;
  object-fit: contain;
  display: flex;
  justify-content: stretch;
`;

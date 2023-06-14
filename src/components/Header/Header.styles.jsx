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
    font-weight: bold;
    text-transform: uppercase;
    // font-family: "Proxima Nova Bold";
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

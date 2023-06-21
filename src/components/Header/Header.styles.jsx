import styled from "styled-components";
import { CoreBoxWidth } from "../../core/core.styles";
import { ReactComponent as MainLogo } from "./../../assets/logo.svg";
import { NavLink } from "react-router-dom";

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

export const NavLinkWrap = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled(MainLogo)`
  fill: white !important;
  line-height: 24px;
  min-width: 70px;
  width: 160px;
  margin: auto 24px;
`;

export const IconRow = styled.div`
  display: flex;
  width: 100%;
`;

export const IconWrap = styled.div`
  display: flex;
  margin-right: 0;
  margin-left: auto;

  & svg {
    fill: white;
    width: 48px;
    height: 48px;
    padding: 12px;
  }

  & > div > :last-child {
    padding-right: 0;
  }
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
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
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
  background-color: grey;
  transition: all 0.2s;
`;

export const SubmenuContainer = styled(CoreBoxWidth)`
  display: flex;
  background-color: lightgrey;
  /* grid-template-columns: repeat(5, 3fr); */
  padding: 0 8px;
`;

export const SubmenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* grid-template-columns: repeat(5, 3fr); */
  padding: 16px;
`;

export const SubmenuItem = styled.div`
  display: flex;
  font-size: 14px;
  padding: 8px 0;
`;

export const SubmenuHeader = styled(SubmenuItem)`
  font-weight: bold;
  margin-top: 12px;
`;

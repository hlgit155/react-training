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
  grid-template-columns: 20% 50% 30%;
`;

export const Logo = styled(AssetLogo)`
  fill: white !important;
  line-height: 24px;
  min-width: 70px;
  width: 160px;
  margin: auto;
`;

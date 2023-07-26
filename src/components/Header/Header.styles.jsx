import styled from "styled-components";
import { CoreBoxWidth } from "../../core/core.styles";
import { ReactComponent as AssetLogo } from "./../../assets/logo.svg";
import { ReactComponent as IcBag } from "../../assets/Header/icon-bag.svg"
import { ReactComponent as IcSearch } from "../../assets/Header/icon-search.svg"
import { ReactComponent as IcUser } from "../../assets/Header/icon-user.svg"
import { ReactComponent as IcWishlist } from "../../assets/Header/icon-wishlist.svg"
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

export const Logo = styled(AssetLogo)`
  fill: white !important;
  line-height: 24px;
  min-width: 70px;
  width: 160px;
  /* margin: auto 24px; */
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

export const SubmenuRow = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  width: 100%;
  min-height: 50vh;
  padding-top: 16px 24px;
  background-color: #fff;
  transition: all .2s;
  box-shadow: 0 1px 100px rgba(35,35,35,.15);
`;

export const SubmenuContainer = styled(CoreBoxWidth)`
  display: flex;
  
  justify-content: stretch; 
  align-items: flex-start;
  /* padding: 24px; */
  background-color: #fff;
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

export const MenuNavLink = styled(NavLink)`
  text-decoration: none;
  color: #4d4d4d;
  :hover {
    cursor: pointer;
  }
`;


export const ListItem = styled.div`
  padding: 0.5rem 0;
  font-weight: 200;
`;

export const ImageWrap = styled.div`
  padding: 0.5rem 0;
  max-width: 30%;
  display: flex;
  justify-content: stretch;
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const SVG = styled.svg`
  fill: white;
  height: 30px;
  width: 30px;
`;

export const IconWrap = styled.div`
  padding: 12px;
`;

export const IconBag = styled(IcBag)`
  fill: white;
  height: 30px;
  width: 30px;
`;
export const IconSearch = styled(IcSearch)`
  fill: white;
  height: 30px;
  width: 30px;
`;
export const IconUser = styled(IcUser)`
  fill: white;
  height: 30px;
  width: 30px;
`;
export const IconWishlist = styled(IcWishlist)`
  fill: white;
  height: 30px;
  width: 30px;
`;

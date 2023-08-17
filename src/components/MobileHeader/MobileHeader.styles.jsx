import styled from "styled-components";
import { CoreBoxWidth } from "../../core/core.styles";
import { ReactComponent as IcHamburgerButton } from "../../assets/MobileHeader/hamburger-button.svg"
import { ReactComponent as AssetLogo } from "../../assets/logo.svg";

import { ReactComponent as IcBag } from "../../assets/Header/icon-bag.svg"
import { ReactComponent as IcSearch } from "../../assets/Header/icon-search.svg"
import { ReactComponent as IcUser } from "../../assets/Header/icon-user.svg"
import { ReactComponent as IcWishlist } from "../../assets/Header/icon-wishlist.svg"
import { NavLink } from "react-router-dom";

export const MobileHeaderWrap = styled.div`
  width: 100%;
`;

export const IconRow = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-between;
`;

export const LeftIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const HamburgerButton = styled(IcHamburgerButton)`
  fill: white !important;
  height: 48px;
  width: 48px;
  padding: 12px;
`;

export const Logo = styled(AssetLogo)`
  fill: white !important;
  line-height: 24px;
  min-width: 70px;
  width: 120px;
  /* margin: auto 24px; */
`;

export const RightIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const IconUser = styled(IcUser)`
  fill: white !important;
  height: 32px;
  width: 32px;
  padding: 8px;
`;

export const IconWishlist = styled(IcWishlist)`
  fill: white !important;
  height: 32px;
  width: 32px;
  padding: 8px;
`;

export const IconBag = styled(IcBag)`
  fill: white !important;
  height: 32px;
  width: 32px;
  padding: 8px;
`;

export const SearchRow = styled.div`
    width: 100%;
  background-color: black;
  padding: 0 10px 10px;
`;

export const Input = styled.input`
display: block;
border: none;
  width: 100%;
  /* padding: 16px 16px 16px 40px; */
  padding-top: 8px;
  padding-left: 40px;
  font-size: 6px;
  text-overflow: ellipsis;
  line-height: 20px;
  ::placeholder {
    font-size: 18px;
  color: #a8a8a8;
}
`;

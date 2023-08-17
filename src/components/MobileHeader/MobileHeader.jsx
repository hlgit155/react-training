import React from "react";
import {
  MobileHeaderWrap,
  IconRow,
  LeftIcons,
  HamburgerButton,
  Logo,
  RightIcons,
  IconUser,
  IconWishlist,
  IconBag,
  SearchRow,
  Input
} from "./MobileHeader.styles";
export default function MobileHeader() {
  return (
    <MobileHeaderWrap>
      <IconRow>
        <LeftIcons>
          <HamburgerButton></HamburgerButton>
          <Logo></Logo>
        </LeftIcons>
        <RightIcons>
          <IconUser />
          <IconWishlist />
          <IconBag />
        </RightIcons>
      </IconRow>
      <SearchRow>
        <Input type="text" placeholder="Search for products, brands, or categories"></Input>
      </SearchRow>
    </MobileHeaderWrap>
  );
}

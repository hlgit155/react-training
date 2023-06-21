import { useState } from "react";
import {
  HeaderWrap,
  HeaderSection,
  ExtraTopbarWrap,
  ExtraTopbar,
  ExtraTopbarItem,
  TopbarRow,
  Logo,
  NavbarRow,
  NavbarItem,
  SubmenuRow,
  SubmenuContainer,
  SubmenuColumn,
  SubmenuHeader,
  SubmenuItem,
  NavLinkWrap,
  IconWrap,
  IconRow,
} from "./Header.styles";
import Topbar from "../Topbar/Topbar";
import mainMenu from "../../database/menu/main-menu.json";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as IconUser } from "./../../assets/header/icon-user.svg";
import { ReactComponent as IconWishList } from "./../../assets/header/icon-wishlist.svg";
import { ReactComponent as IconCheckout } from "./../../assets/header/icon-bag.svg";
import { ReactComponent as IconSearch } from "./../../assets/header/icon-search.svg";

function Header() {
  // const extraTopbarMenu = mainMenu.extratopbar;
  // const topbarMenu = mainMenu.topbar;
  // const navbarMenu = mainMenu.navbar;
  const {
    extratopbar: extraTopbarMenu,
    topbar: topbarMenu,
    navbar: navbarMenu,
  } = mainMenu;

  // load navbar dynamically based on current 'pathname'
  const { pathname } = useLocation();
  const pathArr = pathname.split("/");
  const pageNavbar =
    navbarMenu.find((navbar) => navbar.page === pathArr[1]) ||
    navbarMenu.find((navbar) => navbar.page === "women");

  const [showNav, setShowNav] = useState(false);
  const [submenuIndex, setSubmenuIndex] = useState(0);

  const handleHover = (index) => {
    setShowNav(true);
    setSubmenuIndex(index);
  };

  // console.log(pageNavbar.menu[submenuIndex]);

  return (
    <HeaderWrap>
      <ExtraTopbarWrap>
        <ExtraTopbar>
          {extraTopbarMenu.map((item, idx) => {
            return <ExtraTopbarItem key={idx}>{item.title}</ExtraTopbarItem>;
          })}
        </ExtraTopbar>
      </ExtraTopbarWrap>
      <HeaderSection>
        <TopbarRow>
          <NavLinkWrap to="/">
            <Logo />
          </NavLinkWrap>
          <Topbar mainMenu={topbarMenu} />
          {/* <TopbarOptions /> */}
          <IconRow>
            <IconWrap>
              <IconUser />
              <IconWishList />
              <NavLink to="/checkout">
                <IconCheckout />
              </NavLink>
              <IconSearch />
            </IconWrap>
          </IconRow>
          <div></div>
        </TopbarRow>
        {/* <NavbarRow></NavbarRow> */}
        <NavbarRow>
          {pageNavbar.menu.map((item, index) => {
            return (
              <NavbarItem
                key={index}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => setShowNav(false)}
              >
                {item.title}
              </NavbarItem>
            );
          })}
        </NavbarRow>
      </HeaderSection>
      {showNav && (
        <SubmenuRow
          onMouseEnter={() => setShowNav(true)}
          onMouseLeave={() => setShowNav(false)}
        >
          <SubmenuContainer>
            {pageNavbar.menu[submenuIndex].submenu.map((column, index) => {
              return (
                <SubmenuColumn
                  style={{
                    width: column.some((item) => item?.image) && "200%",
                  }}
                >
                  {column.map((item) => {
                    return item.header ? (
                      <SubmenuHeader>{item.name}</SubmenuHeader>
                    ) : item.image ? (
                      <img src={item.image} alt="img" width="100%" />
                    ) : (
                      <SubmenuItem>{item.name}</SubmenuItem>
                    );
                  })}
                </SubmenuColumn>
              );
            })}
          </SubmenuContainer>
        </SubmenuRow>
      )}
    </HeaderWrap>
  );
}

export default Header;

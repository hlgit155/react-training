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
<<<<<<< HEAD
  Submenu
=======
  SubmenuRow,
  SubmenuContainer,
>>>>>>> Henry
} from "./Header.styles";
import Topbar from "../Topbar/Topbar";
import mainMenu from "../../database/menu/main-menu.json";
import { useLocation } from "react-router-dom";
import { useState } from "react";

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
<<<<<<< HEAD
  const pageNavbar = navbarMenu.find((navbar) => navbar.page === pathArr[1]) || navbarMenu.find((navbar) => navbar.page === 'women');
  const flag = [false,false]


  return (
    <>
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
            <Logo />
            <Topbar mainMenu={topbarMenu} />
            {/* <TopbarOptions /> */}
          </TopbarRow>
          {/* <NavbarRow></NavbarRow> */}
          <NavbarRow>
            {pageNavbar.menu.map((item, index) => {
              return (
                <NavbarItem
                  key={index}
                  // onMouseEnter={() => handleShowNavbar(index)}
                  // onMouseLeave={() => handleUnShowNavbar(index)}
                >
                  {item.title}
                </NavbarItem>
              );
            })}
          </NavbarRow>
        </HeaderSection>
      </HeaderWrap>
      <Submenu>
        {pageNavbar.menu[1].submenu.map((item, index) => {
          return <div key={index}>{item.name}</div>
        })}
      </Submenu>
    </>

=======
  const pageNavbar =
    navbarMenu.find((navbar) => navbar.page === pathArr[1]) ||
    navbarMenu.find((navbar) => navbar.page === "women");

  const [showNav, setShowNav] = useState(false);

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
          <Logo />
          <Topbar mainMenu={topbarMenu} />
          {/* <TopbarOptions /> */}
        </TopbarRow>
        {/* <NavbarRow></NavbarRow> */}
        <NavbarRow>
          {pageNavbar.menu.map((item, index) => {
            return (
              <NavbarItem
                key={index}
                onMouseEnter={() => setShowNav(true)}
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
            {/* <SubmenuItem></SubmenuItem> */}
          </SubmenuContainer>
        </SubmenuRow>
      )}
    </HeaderWrap>
>>>>>>> Henry
  );
}

export default Header;

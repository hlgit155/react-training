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
  SubmenuItem,
  SubColumn,
  SubHeader,
  ListItem

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
  const pageNavbar =
    navbarMenu.find((navbar) => navbar.page === pathArr[1]) ||
    navbarMenu.find((navbar) => navbar.page === "women");
  const [showNav, setShowNav] = useState(true);

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
                onMouseLeave={() => setShowNav(true)}
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
          onMouseLeave={() => setShowNav(true)}
        >
          <SubmenuContainer>
            {/* <SubmenuItem></SubmenuItem> */}
            {pageNavbar.menu[0].submenu.map((item, idx) => {
            {/* return <SubmenuItem key={idx}>{item.name}</SubmenuItem>; */}
            return (
              <SubColumn key={idx}>
              <SubHeader>{item.header}</SubHeader>
              {item.list.map((listItem, index) => {return <ListItem>{listItem.name}</ListItem>})}
              </SubColumn>
              )
          })}
            {pageNavbar.menu[0].images.map((item,index) => {
              return (
                <SubColumn>
                  <SubHeader>{item.header}</SubHeader>
                  <img src={item["image-url"]} width="300"></img>
                </SubColumn>
                
              )
            })}
          </SubmenuContainer>
        </SubmenuRow>
      )}
    </HeaderWrap>
  );
}

export default Header;

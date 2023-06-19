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
  ListItem,
  ImageWrap,
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
  const [showNav, setShowNav] = useState(false);
  const [submenuIndex, setSubmenuIndex] = useState(0);

  const handleHover = (index) => {
    setShowNav(true);
    setSubmenuIndex(index);
  }

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
            {/* <SubmenuItem></SubmenuItem> */}
            {pageNavbar.menu[submenuIndex].submenu.map((item, idx) => {
              {
                /* return <SubmenuItem key={idx}>{item.name}</SubmenuItem>; */
              }
              return (
                <SubColumn key={idx}>
                  {item.map((listItem, index) => {
                    return "header" in listItem ? (
                      <SubHeader>{listItem.name}</SubHeader>
                    ) : "image" in listItem ? (
                      <ImageWrap><img src={listItem.image} width="400"></img></ImageWrap>
                    ) : (
                      <ListItem>{listItem.name}</ListItem>
                    );
                  })}
                </SubColumn>
              );
            })}
            {/* {pageNavbar.menu[0].images.map((item, index) => {
              return (
                <SubColumn>
                  <SubHeader>{item.header}</SubHeader>
                  <ImageWrap>
                    <img src={item["image-url"]}></img>
                  </ImageWrap>
                </SubColumn>
              );
            })} */}
          </SubmenuContainer>
        </SubmenuRow>
      )}
    </HeaderWrap>
  );
}

export default Header;

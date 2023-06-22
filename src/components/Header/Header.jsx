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
  const {
    extratopbar: extraTopbarMenu,
    topbar: topbarMenu,
    navbar: navbarMenu,
  } = mainMenu;
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
          {/* Note: Add icons */}
        </TopbarRow>
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
            {pageNavbar.menu[submenuIndex].submenu.map((item, idx) => {
              return (
                <SubColumn key={idx}>
                  {item.map((listItem, index) => {
                    if ("header" in listItem) {
                      return <SubHeader key={index}>{listItem.name}</SubHeader>;
                    } else if ("image" in listItem) {
                      return (
                        <ListItem key={index}>
                          <ImageWrap>
                            <img
                              src={listItem.image}
                              width="100%"
                              alt={listItem.name}
                            />
                          </ImageWrap>
                        </ListItem>
                      );
                    } else if ("images" in listItem) {
                      return (
                        <div key={index}>
                          {listItem.images.map((imageItem, imageIndex) => (
                            <ListItem key={imageIndex}>
                              <ImageWrap>
                                <img
                                  src={imageItem["image-url"]}
                                  width="100%"
                                  alt={imageItem.header}
                                />
                              </ImageWrap>
                            </ListItem>
                          ))}
                        </div>
                      );
                    } else {
                      return <ListItem key={index}>{listItem.name}</ListItem>;
                    }
                  })}
                </SubColumn>
              );
            })}
          </SubmenuContainer>
        </SubmenuRow>
      )}
    </HeaderWrap>
  );
}

export default Header;

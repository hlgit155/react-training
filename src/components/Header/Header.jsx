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
  Submenu
} from "./Header.styles";
import Topbar from "../Topbar/Topbar";
import mainMenu from "../../database/menu/main-menu.json";
import { useLocation } from "react-router-dom";

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

  );
}

export default Header;

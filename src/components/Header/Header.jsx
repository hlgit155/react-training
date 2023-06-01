import {
  HeaderWrap,
  HeaderSection,
  ExtraTopbarWrap,
  ExtraTopbar,
  ExtraTopbarItem,
  TopbarRow,
  Logo,
} from "./Header.styles";
import Topbar from "../Topbar/Topbar";
import mainMenu from "../../database/menu/main-menu.json";
// import { ReactComponent as Logo } from "./../../assets/logo.svg";

function Header() {
  const extraTopbarMenu = mainMenu.extratopbar;
  const topbarMenu = mainMenu.topbar;

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
      </HeaderSection>
    </HeaderWrap>
  );
}

export default Header;

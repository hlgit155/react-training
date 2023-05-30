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
import menu from "../../database/menu.json";
// import { ReactComponent as Logo } from "./../../assets/logo.svg";

function Header() {
  const topbarMenu = menu.topbar;
  const extraTopbarMenu = menu.extratopbar;

  return (
    <HeaderWrap>
      <ExtraTopbarWrap>
        <ExtraTopbar>
          {extraTopbarMenu.map((item, index) => {
            return <ExtraTopbarItem>{item.title}</ExtraTopbarItem>;
          })}
        </ExtraTopbar>
      </ExtraTopbarWrap>
      <HeaderSection>
        <TopbarRow>
          <Logo />
          <Topbar menu={topbarMenu} />
          {/* <TopbarOptions /> */}
        </TopbarRow>
        {/* <NavbarRow></NavbarRow> */}
      </HeaderSection>
    </HeaderWrap>
  );
}

export default Header;

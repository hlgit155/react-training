import { TopbarWrap, TopbarItem } from "./Topbar.styles";

// function Nav({ menu }) {
function Nav(props) {
  const { menu } = props;
  
  return (
    <TopbarWrap>
      {menu.map((item,index) => {
        return <TopbarItem key={index}>{item.title}</TopbarItem>;
      })}
    </TopbarWrap>
  );
}

export default Nav;

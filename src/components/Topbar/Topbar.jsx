import { TopbarWrap, TopbarItem } from "./Topbar.styles";

// function Topbar({ menu }) {
function Topbar(props) {
  const { mainMenu } = props;
  
  return (
    <TopbarWrap>
      {mainMenu.map((item,index) => {
        return <TopbarItem key={index}>{item.title}</TopbarItem>;
      })}
    </TopbarWrap>
  );
}

export default Topbar;

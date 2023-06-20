import { TopbarWrap, TopbarItem } from "./Topbar.styles";
import { NavLink, useNavigate } from "react-router-dom";

// function Topbar({ mainMenu }) {
function Topbar(props) {
  const navigate = useNavigate();
  const { mainMenu } = props;

  return (
    <TopbarWrap>
      {mainMenu.map((item, index) => {
    
        return (
          <TopbarItem to={item.url}>{item.title}</TopbarItem>
          // using 'div' below
          // <TopbarItem key={index} onClick={() => navigate(item.url)}>{item.title}</TopbarItem>
        );
      })}
    </TopbarWrap>
  );
}

export default Topbar;
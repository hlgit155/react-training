import { TopbarWrap, TopbarItem } from "./Topbar.styles";
import {Routes, Route, useNavigate} from 'react-router-dom';

// function Topbar({ menu }) {
function Topbar(props) {
  const navigate = useNavigate();
  const { mainMenu } = props;
  
  return (
    <TopbarWrap>
      {mainMenu.map((item,index) => {
        return <TopbarItem onClick={() => {const routeLink = item.title; navigate(routeLink)}} key={index}>{item.title}</TopbarItem>;
      })}
    </TopbarWrap>
  );
}

export default Topbar;

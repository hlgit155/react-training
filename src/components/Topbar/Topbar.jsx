import { TopbarWrap, TopbarItem } from "./Topbar.styles";
import {Routes, Route, useNavigate} from 'react-router-dom';

// function Topbar({ menu }) {
function Topbar(props) {
  const navigate = useNavigate();
  const { mainMenu } = props;
  
  return (
    <TopbarWrap>
      {mainMenu.map((item,index) => {
        /*-- FEEDBACK --*/
        // the routeLink should return "item.url" instead of "title", otherewise there will be capital in the url,
        // it's ok to have capital, but there will be issue when there's other special characters or spaces in title,
        // that's why we're using object called "url", data should be changed/inserted in the dataset we created
        // 
        // ** Another method is to create a convertor function to convert the format from the string of title to acceptable format,
        // which is more complicated but oftenly necessary for some situtations
        return <TopbarItem onClick={() => {const routeLink = item.url; navigate(routeLink)}} key={index}>{item.title}</TopbarItem>;
      })}
    </TopbarWrap>
  );
}

export default Topbar;

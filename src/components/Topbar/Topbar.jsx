import { TopbarWrap, TopbarItem } from "./Topbar.styles";
import { NavLink, useNavigate } from "react-router-dom";

// function Topbar({ mainMenu }) {
function Topbar(props) {
  const { mainMenu } = props;
  const navigate = useNavigate();

  return (
    <TopbarWrap>
      {mainMenu.map((item, index) => {
        /*-- FEEDBACK --*/
        // the routeLink should return "item.url" instead of "title", otherewise there will be capital in the url,
        // it's ok to have capital, but there will be issue when there's other special characters or spaces in title,
        // that's why we're using object called "url", data should be changed/inserted in the dataset we created
        //
        // ** Another method is to create a convertor function to convert the format from the string of title to acceptable format,
        // which is more complicated but oftenly necessary for some situtations
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

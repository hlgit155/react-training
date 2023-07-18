import React from 'react';

import { TopbarWrap, TopbarItem } from "./Topbar.styles";




function Topbar(props) {
  
  const { mainMenu } = props;

  return (
    <TopbarWrap>
      {mainMenu.map((item, index) => {
    
        return (
          <TopbarItem to={item.url}>{item.title}</TopbarItem>
        );
      })}
    </TopbarWrap>
  );
}

export default Topbar;
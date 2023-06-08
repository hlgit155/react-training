import React, { useEffect, useState } from 'react'
import { StyledNavbar, NavbarItem, SubMenuWrap, SubList, SubListTitle, WomenContent } from "./Women.styles"

import mainMenu from "../../database/menu/main-menu.json";

export default function Women() {
  const navbarMenu = mainMenu.navbar[0].women;
  const [navbarItemsHover, setNavbarItemsHover] = useState([false,false]);

  function handleShowNavbar(index) {
    // console.log('index',index)
    const newNavbar = navbarItemsHover.map((n, i) => {
      if (i === index) {
        // Change the navbar item to true
        return true;
      } else {
        return false;
      }
    });
    setNavbarItemsHover(newNavbar);
    console.log(newNavbar)
  }

  function handleUnShowNavbar(index) {
    // console.log('index',index)
    const newNavbar = navbarItemsHover.map((n, i) => {
      if (i === index) {
        // Change the navbar item to true
        return false;
      } else {
        return false;
      }
    });
    setNavbarItemsHover(newNavbar);
    console.log(newNavbar)
  }

  // useEffect(() => {
  //   console.log(navbarItemsHover)
  // })



  return (
    <>
      <StyledNavbar >
        {navbarMenu.map((item,index) => {
          return (
            <NavbarItem  
              key={index}
              onMouseEnter={()=>handleShowNavbar(index)}
              onMouseLeave={()=>handleUnShowNavbar(index)}
            >
              {item.title}
            </NavbarItem>
          );
        })}
      </StyledNavbar>
      {navbarItemsHover[0] && 
      /*one sub menu */
      <SubMenuWrap>
        {navbarMenu.map((subMenu) => {
          return (
            <SubList>
              <SubListTitle>{subMenu.title}</SubListTitle>
              {subMenu.submenu.map((item) => {
                return (
                  <div>{item.name}</div>
                )
              })}
            </SubList>
          )
        })}
      </SubMenuWrap>}
      {navbarItemsHover[1] && 
      <div>
        menu222
      </div>}
      <WomenContent>
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        <br></br>
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        <br></br>
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        <br></br>
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        <br></br>
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        <br></br>
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        <br></br>
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        <br></br>
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        <br></br>
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        <br></br>
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        <br></br>
      </WomenContent>
    </>
    
  )
}

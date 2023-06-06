import React, { useEffect, useState } from 'react'
import { StyledNavbar, NavbarItem } from "./Women.styles"

import mainMenu from "../../database/menu/main-menu.json";

export default function Women() {
  const navbarMenu = mainMenu.navbar[0].women;
  const [navbarItemsHover, setNavbarItemsHover] = useState([false,false]);

  function handleShowNavbar(index) {
    const newNavbar = navbarItemsHover.map((n, i) => {
      if (i === index) {
        // Change the navbar item to true
        return true;
      } else {
        return false;
      }
    });
    setNavbarItemsHover(newNavbar);
  }

  function handleUnShowNavbar(index) {
    const newNavbar = navbarItemsHover.map((n, i) => {
      if (i === index) {
        // Change the navbar item to true
        return false;
      } else {
        return false;
      }
    });
    setNavbarItemsHover(newNavbar);
  }

  useEffect(() => {
    console.log(navbarItemsHover)
  })



  return (
    <>
      <StyledNavbar >
        {navbarMenu.map((item,index) => {
          return (
            <NavbarItem  
              key={index}
              onMouseEnter={(index) => handleShowNavbar(index)}
              onMouseLeave={(index) => handleUnShowNavbar(index)}
            >
              {item.title}
            </NavbarItem>
          );
        })}
      </StyledNavbar>
    </>
    
  )
}

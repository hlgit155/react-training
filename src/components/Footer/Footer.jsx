import React from "react";
import { FooterWrap, FooterColumn, ColumnHeader, FooterItem } from "./Footer.styles";
import mainMenu from "../../database/menu/main-menu.json";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const footer = mainMenu.footer;

  return (
    <FooterWrap>
      {footer.map((item, index) => {
        return (
          <FooterColumn>
            <ColumnHeader>{item.header}</ColumnHeader>
            {item.links.map((i, idx) => {
              return <FooterItem>{i.name}</FooterItem>;
            })}
          </FooterColumn>
        );
      })}
    </FooterWrap>
  );
}

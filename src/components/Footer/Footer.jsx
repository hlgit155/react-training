import React from "react";
import {
  FooterWrap,
  Wrap,
  FooterColumn,
  ColumnHeader,
  FooterItem,
  OuterWrap,
  BottomWrap,
  BottomHeader,
  BottomItem,
  LeftBox,
  RightBox,
  Title,
  Message,
  SearchGroup,
  Select,
  Input,
  Button,
  BottomColumn,
  BottomColumnWrap
} from "./Footer.styles";
import mainMenu from "../../database/menu/main-menu.json";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const footer = mainMenu.footer;
  const { pathname } = useLocation();
  const currentSecondPath = pathname.split("/")[1];

  return (
    <OuterWrap>
      <Wrap>
        <FooterWrap>
          <LeftBox>
            {footer.top.map((item, index) => {
              return (
                <FooterColumn>
                  <ColumnHeader>{item.header}</ColumnHeader>
                  {item.links.map((i, idx) => {
                    return <FooterItem>{i.name}</FooterItem>;
                  })}
                </FooterColumn>
              );
            })}
          </LeftBox>

          <RightBox>
          <ColumnHeader>STAY IN TOUCH</ColumnHeader>
            <Message>Sign up to THE ICONIC News for your $20 voucher.*</Message>
            <SearchGroup>
              <Select name="gender" id="gender-select">
                <option value="women">Women</option>
                <option value="men">Men</option>
              </Select>
              
              <Input type="text" defaultValue="Enter your email address"></Input>
              <Button>Submit</Button>
            </SearchGroup>
            <Message>* $20 voucher for new sign ups only.</Message>
          </RightBox>
        </FooterWrap>
        <hr />
        <BottomWrap>
          <BottomHeader>
            {"OUR TOP SEARCHES - " + currentSecondPath}
          </BottomHeader>
          <BottomColumnWrap>
            {footer["bottom-top-searches"][currentSecondPath].map(
              (item, index) => {
                /* return <BottomItem>{item.name}</BottomItem>; */
                return (<BottomColumn>
                  {item.map((itm,idx) => {
                    return <BottomItem>{itm.name}</BottomItem>
                  })}
                </BottomColumn>)
              }
            )}
          </BottomColumnWrap>


        </BottomWrap>
      </Wrap>
    </OuterWrap>
  );
}

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
  SiteMapBox,
  SubscriptionBox,
  Title,
  Message,
  SearchGroup,
  SelectAndInput,
  Select,
  Input,
  Button,
  BottomColumn,
  BottomColumnWrap,
  Half,
  IcIconic,
  IcAppStore,
  IcGooglePlay,
  FooterTradeMarkconGroupWrap,
  FooterTradeMarkconGroup,
  GFGIconWrap,
  IconicWrap,
  AppStoreGooglePlayWrap,
} from "./Footer.styles";
import mainMenu from "../../database/menu/main-menu.json";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const footer = mainMenu.footer;
  const { pathname } = useLocation();
  const pathArr = pathname.split("/");
  console.log("pathArr", pathArr);
  // const currentSecondPath = pathname.split("/")[1];

  return (
    <OuterWrap>
      <Wrap>
        <FooterWrap>
          <SubscriptionBox>
            <ColumnHeader>STAY IN TOUCH</ColumnHeader>
            <Message>Sign up to THE ICONIC News for your $20 voucher.*</Message>
            <SearchGroup>
              <SelectAndInput>
                <Select name="gender" id="gender-select">
                  <option value="women">Women</option>
                  <option value="men">Men</option>
                </Select>

                <Input
                  type="text"
                  defaultValue="Enter your email address"
                ></Input>
              </SelectAndInput>

              <Button>Submit</Button>
            </SearchGroup>
            <Message>* $20 voucher for new sign ups only.</Message>
          </SubscriptionBox>

          <SiteMapBox>
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
          </SiteMapBox>
        </FooterWrap>
        <hr />
        <BottomWrap>
          <BottomHeader>
            {/* { pathArr[1] ==="" ? "OUR TOP SEARCHES" : "OUR TOP SEARCHES - " + pathArr[1] } */}
            OUR TOP SEARCHES - WOMEN
          </BottomHeader>
          <BottomColumnWrap>
            {/* { pathArr[1] ==="" ? footer["bottom-top-searches"]["women"].map(
              (item, index) => {
                return (<BottomColumn>
                  {item.map((itm,idx) => {
                    return <BottomItem>{itm.name}</BottomItem>
                  })}
                </BottomColumn>)
              }
            )  : footer["bottom-top-searches"][pathArr[1]].map(
              (item, index) => {
                return (<BottomColumn>
                  {item.map((itm,idx) => {
                    return <BottomItem>{itm.name}</BottomItem>
                  })}
                </BottomColumn>)
              }
            )} */}

              {footer["bottom-top-searches"]["women"].map((half, index) => {
                
                return (
                  <Half>
                  {half.map((everyFourItems) => {
                    return (                     
                    <BottomColumn>
                      {everyFourItems.map((itm, idx) => {
                        return <BottomItem>{itm.name}</BottomItem>;
                      })}
                    </BottomColumn>)
                  })}

                  </Half>


                );
              })}


            

          </BottomColumnWrap>
        </BottomWrap>
      </Wrap>
      <FooterTradeMarkconGroupWrap>
        <FooterTradeMarkconGroup>
          <GFGIconWrap>
            <img
              src={require("../../assets/footer/gfg-logo.png")}
              height="34px"
            ></img>
          </GFGIconWrap>
          <IconicWrap>
            <IcIconic></IcIconic>
          </IconicWrap>
          <AppStoreGooglePlayWrap>
            <IcAppStore></IcAppStore>
            <IcGooglePlay></IcGooglePlay>
          </AppStoreGooglePlayWrap>
        </FooterTradeMarkconGroup>
      </FooterTradeMarkconGroupWrap>
    </OuterWrap>
  );
}

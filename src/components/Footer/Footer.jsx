import { useState } from "react";
import {
  FooterOuter,
  FooterWrap,
  FooterSection,
  FooterHeader,
  TFLeft,
  TFRight,
  ContactGadget,
  ContactHeader,
  Message,
  SearchGroup,
  EmailGroup,
  Select,
  Input,
  Button,
  TFColumn,
  TFMenuItem,
  BottomFooter,
  BFColumn,
  BFSection,
  WhiteFooter,
  WFLeftImage,
  WFCenter,
  WFRight,
} from "./Footer.styles";
import footer from "../../database/menu/footer.json";
import { useLocation } from "react-router-dom";
import { ReactComponent as MainLogo } from "./../../assets/logo.svg";
import GFGLogo from "./../../assets/footer/gfg-logo.png";
import { ReactComponent as AppleBadge } from "./../../assets/footer/app-store-badge.svg";
import { ReactComponent as GoogleBadge } from "./../../assets/footer/google-play-badge.svg";
import { WhiteFooterWrap } from "./Footer.styles";

export default function Footer() {
  const { top: topFooter, bottom: bottomFooter } = footer;

  // load navbar dynamically based on current 'pathname'
  const { pathname } = useLocation();
  const pathArr = pathname.split("/");
  const pageBottomFooter =
    bottomFooter.section.find((section) => section.page === pathArr[1]) ||
    bottomFooter.section.find((section) => section.page === "women");

  return (
    <FooterOuter>
      <FooterWrap>
        <FooterSection>
          <TFLeft>
            {topFooter.map((column, idx) => {
              return (
                <TFColumn key={idx}>
                  <FooterHeader>{column.header}</FooterHeader>
                  {column.menu.map((item, itemIndex) => {
                    return <TFMenuItem key={itemIndex}>{item.name}</TFMenuItem>;
                  })}
                </TFColumn>
              );
            })}
          </TFLeft>
          <TFRight>
            <ContactGadget>
              <ContactHeader>STAY IN TOUCH</ContactHeader>
              <Message>
                Sign up to THE ICONIC News for your $20 voucher.*
              </Message>
              <SearchGroup>
                <EmailGroup>
                  <Select name="gender" id="gender-select">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                  </Select>
                  <Input type="text" placeholder="Enter your email address" />
                </EmailGroup>
                <Button>Submit</Button>
              </SearchGroup>
              <Message>* $20 voucher for new sign ups only.</Message>
            </ContactGadget>
          </TFRight>
        </FooterSection>
        <hr style={{ borderColor: "#4d4d4d" }} />
        <FooterSection style={{ flexDirection: "column" }}>
          <FooterHeader style={{ marginLeft: "8px" }}>
            {bottomFooter.header + pageBottomFooter.page}
          </FooterHeader>
          <BottomFooter>
            {pageBottomFooter.menu.map((section, idx) => {
              return (
                <BFSection key={idx}>
                  {section.map((column, columnIndex) => {
                    return (
                      <BFColumn key={columnIndex}>
                        {column.map((item, itemIndex) => {
                          return (
                            <TFMenuItem key={itemIndex}>{item}</TFMenuItem>
                          );
                        })}
                      </BFColumn>
                    );
                  })}
                </BFSection>
              );
            })}
          </BottomFooter>
        </FooterSection>
      </FooterWrap>
      <WhiteFooterWrap>
        <WhiteFooter>
          <WFLeftImage src={GFGLogo} alt="gfg_logo" />
          <WFCenter>
            <MainLogo />
          </WFCenter>
          <WFRight>
            <AppleBadge />
            <GoogleBadge />
          </WFRight>
        </WhiteFooter>
      </WhiteFooterWrap>
    </FooterOuter>
  );
}

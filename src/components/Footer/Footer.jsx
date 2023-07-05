import React from "react";
import {
  OuterWrap,
  FooterWrap,
  FooterWrapItem,
  Column,
  TitleFooter,
  MenuItem,
  Text,
  LeftContainer,
  RightContainer,
  Select,
  Input,
  Button,
  SearchGroup,
  Section,
  InnerSection,
  BottomSection,
  Iconic,
  Apple,
  Google,
  FooterBottom,
  Wraps,
  IconicWrap,
  AppleGoogleWrap,
  GfgLogoWrap,
  GfgLogoimg,
} from "./Footer.styles";
import footer from "../../database/menu/footer.json";
import GfgLogo from "../../assets/Footer/gfg-logo.png";

function Footer() {
  const { top, bottom } = footer;

  return (
    <OuterWrap>
      <FooterWrap>
        <LeftContainer>
          {top.map((item, idx) => (
            <FooterWrapItem key={idx}>
              <TitleFooter>{item.title}</TitleFooter>

              {item.options.map((option, index) => (
                <MenuItem key={index}>{option.name}</MenuItem>
              ))}
            </FooterWrapItem>
          ))}
        </LeftContainer>

        <RightContainer>
          <TitleFooter>STAY IN TOUCH</TitleFooter>
          <Text>Sign up to THE ICONIC News for your $20 Voucher.*</Text>
          <SearchGroup>
            <Select name="gender" id="select_gender">
              <option value="women" selected="selected">
                Women
              </option>
              <option value="men">Men</option>{" "}
            </Select>

            <Input
              type="email"
              defaultValue={"Enter your email address.."}
            ></Input>
            <Button>Submit</Button>
          </SearchGroup>
          <Text>* $20 voucher for new sign ups only.</Text>
        </RightContainer>
      </FooterWrap>
      <hr width="1248px" />

      {bottom.map((group, idx) => (
        <FooterWrap>
          <FooterWrapItem style={{ padding: 0 }}>
            <TitleFooter style={{ paddingLeft: 8, paddingRight: 8 }}>
              {group.title}
            </TitleFooter>
            <Section>
              {group.options.map((section, index) => {
                console.log(section);
                return (
                  <InnerSection key={index}>
                    {section.map((innerOption, index) => (
                      <Column>
                        {innerOption.map((item) => (
                          <MenuItem key={index}>{item.name}</MenuItem>
                        ))}
                      </Column>
                    ))}
                  </InnerSection>
                );
              })}
            </Section>
          </FooterWrapItem>
        </FooterWrap>
      ))}
      <BottomSection>
        <FooterBottom>
          <Wraps>
            <GfgLogoWrap>
              <GfgLogoimg src={GfgLogo} alt="gfg-logo" />
            </GfgLogoWrap>
            <IconicWrap>
              <Iconic></Iconic>
            </IconicWrap>
            <AppleGoogleWrap>
              <Apple></Apple>
              <Google></Google>
            </AppleGoogleWrap>
          </Wraps>
        </FooterBottom>
      </BottomSection>
    </OuterWrap>
  );
}

export default Footer;

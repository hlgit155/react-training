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
  BottomWrap,
} from "./Footer.styles";
import footer from "../../database/menu/footer.json";

function Footer() {
  const { top, bottom } = footer;

  return (
    <OuterWrap>
      <FooterWrap>
        <LeftContainer>
          {top.map((item, idx) => (
            <Column>
              <FooterWrapItem key={idx}>
                <TitleFooter>
                  <h4>{item.title}</h4>
                </TitleFooter>

                {item.options.map((option, index) => (
                  <MenuItem key={index}>{option.name}</MenuItem>
                ))}
              </FooterWrapItem>
            </Column>
          ))}
        </LeftContainer>

        <RightContainer>
          <TitleFooter>
            <h4>STAY IN TOUCH</h4>
          </TitleFooter>
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
      <hr />

      {bottom.map((group, idx) => (
        <BottomWrap>
        <FooterWrapItem>
          <TitleFooter>{group.title}</TitleFooter>
          <Section>
            {group.options.map((section, index) => {
              console.log(section);
              return (
                <InnerSection key={index}>
                  {section.map((innerOption, index) => (
                    <Column>
                      {innerOption.map((item) => {
                        return(
                          <MenuItem key={index}>{item.name}</MenuItem>
                        );
                        ;
                      })}
                    </Column>
                  ))}
                </InnerSection>
              );
            })}
          </Section>
        </FooterWrapItem>
        </BottomWrap>
      ))}
    </OuterWrap>
  );
}

export default Footer;

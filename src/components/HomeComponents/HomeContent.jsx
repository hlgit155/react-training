import React from "react";
import homePage from "../../database/home-page.json";
import {
  RowWrap,
  Images,
  Description,
  Wraps,
  TextStyle,
  FooterStyle,
  BottomWrap,
  MiniRowWrap,
  ImageWrap,
  Title,
  TextWrap,
  ParagraphWrap,
  TextTitle,
  TextContent,
  HR,
} from "./HomeContent.styles";

function HomeContent() {
  console.log(homePage);

  return (
    <>
      {homePage.content.map((imageNum, imageIndex) => (
        <RowWrap key={imageIndex}>
          {imageNum.map((item, index) => {
            if ("image" in item) {
              return (
                <Wraps key={index} rowLength={imageNum.length}>
                  <Images src={item.image} alt="" />

                  {item.description && (
                    <Description>{item.description}</Description>
                  )}
                </Wraps>
              );
            } else if ("video" in item) {
              return (
                <Wraps key={index} rowLength={imageNum.length}>
                  <video
                    width="100%"
                    height="100%"
                    autoPlay="true"
                    loop="true"
                  >
                    <source src={item?.video} type="video/mp4"/>
                  </video>
                </Wraps>
              );
            } else if ("header" in item) {
              return (
                <Wraps key={index}>
                  <TextStyle>{item.name}</TextStyle>
                </Wraps>
              );
            } else if ("submenu" in item) {
              return (
                <BottomWrap key={index}>
                  <Title>{item.title}</Title>
                  {item.submenu.map((submenuItem, idx) => {
                    return (
                      <MiniRowWrap key={idx} rowLength={submenuItem.length}>
                        {submenuItem.map((item, index) => (
                          <ImageWrap key={index}>
                            <Images src={item.image} alt="" />
                            {item.footer && (
                              <FooterStyle>{item.footer}</FooterStyle>
                            )}
                          </ImageWrap>
                        ))}
                      </MiniRowWrap>
                    );
                  })}
                  <HR />
                </BottomWrap>
              );
            } else if ("options" in item) {
              return (
                <ParagraphWrap key={index}>
                  <TextTitle>{item.title}</TextTitle>
                  {item.options.map((textItem, textIndex) => {
                    return (
                      <TextWrap key={textIndex}>
                        {textItem.map((text, index) => (
                          <TextContent key={index}>{text.text}</TextContent>
                        ))}
                      </TextWrap>
                    );
                  })}
                </ParagraphWrap>
              );
            }

            return null;
          })}
        </RowWrap>
      ))}
    </>
  );
}

export default HomeContent;

// return (
//   <FirstRow key={idx}>
//     {submenuItem?.image && (
//       <Images src={submenuItem?.image} alt="" />
//     )}
//     {submenuItem?.footer && (
//       <FooterStyle>{submenuItem?.footer}</FooterStyle>
//     )}
//   </FirstRow>
// );

// <Images src={submenuItem[0].image} alt="" />
// <FooterStyle>{submenuItem[1].footer}</FooterStyle>

//   var html = "asdsa";
//   var html = `<div>${ImageData.url}</div>`

//   if ('condtion') {
//     return 'A'
//   }
//   else {
//     'B'
//   }

//   'condition' ? 'Component A' : 'B'

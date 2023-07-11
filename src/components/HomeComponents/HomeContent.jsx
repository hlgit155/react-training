import React from "react";
import {
  RowWrap,
  Images,
  Description,
  TextStyle,
  FooterStyle,
  MiniRowWrap,
  ImageWrap,
  Title,
  TextContent,
} from "./HomeContent.styles";

const HomeContent = (props) => {
  const homeData = props.homeData;

  return (
    <>
      {homeData.content.map((imageNum, imageIndex) => (
        <>
          {imageNum.map((item, index) => {
            return (
              <RowWrap key={index}>
                {item?.title && <Title>{item.title}</Title>}
                {item.submenu.map((submenuItem, idx) => {
                  return (
                    <MiniRowWrap key={idx}>
                      {submenuItem.map((item, index) => (
                        <ImageWrap key={index} rowLength={submenuItem.length}>
                          {item?.image && (
                            <>
                              <Images src={item.image} alt="" />
                              {item.description && (
                                <Description>{item.description}</Description>
                              )}
                            </>
                          )}
                          {item?.video && (
                            <video
                              width="100%"
                              height="100%"
                              controls="false"
                              autoPlay="true"
                              loop="true"
                            >
                              <source src={item.video} type="video/mp4" />
                            </video>
                          )}
                          {item?.name && <TextStyle>{item.name}</TextStyle>}

                          {item?.footer && (
                            <FooterStyle>{item.footer}</FooterStyle>
                          )}
                          {item?.texts && (
                            <TextContent>{item.texts}</TextContent>
                          )}
                        </ImageWrap>
                      ))}
                    </MiniRowWrap>
                  );
                })}
              </RowWrap>
            );
          })}
        </>
      ))}
    </>
  );
};

export default HomeContent;

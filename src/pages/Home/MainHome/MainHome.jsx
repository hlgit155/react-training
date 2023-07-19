import React from "react";
import HomeContent from "../../../components/HomeComponents/HomeContent";
import homePage from "../../../database/home-page.json";
import {
  ParagraphWrap,
  TextTitle,
  TextContent,
  HR,
} from "../../../components/HomeComponents/HomeContent.styles";

const MainHome = () => {
  return (
    <>
      <HomeContent homeData={homePage} />
      <HR />
      {homePage.textcontent.map((textInfo, textIdx) => (
        <ParagraphWrap key={textIdx}>
          {textInfo.map((item, index) => (
            <>
              <TextTitle key={index}>{item.title}</TextTitle>
              <TextContent
                key={index}
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </>
          ))}
        </ParagraphWrap>
      ))}
    </>
  );
};

export default MainHome;


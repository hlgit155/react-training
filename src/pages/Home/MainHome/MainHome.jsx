import React from "react";
import HomeContent from "../../../components/HomeComponents/HomeContent";
import homePage from "../../../database/home-page.json";
import {
  TextWrap,
  ParagraphWrap,
  TextTitle,
  TextContent,
} from "../../../components/HomeComponents/HomeContent.styles";

const MainHome = () => {
  return (
    <>
      <HomeContent homeData={homePage} />
      {homePage.textcontent.map((textInfo, textIdx) => (
        <div key={textIdx}>
          {textInfo.map((item, index) => {
            return (
              <ParagraphWrap key={index}>
                <TextTitle key={index}>{item.title}</TextTitle>
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
          })}
        </div>
      ))}
    </>
  );
};

export default MainHome;

// else if ("options" in item) {
//   return (
//     <ParagraphWrap key={index}>
//       <TextTitle>{item.title}</TextTitle>
//       {item.options.map((textItem, textIndex) => {
//         return (
//           <TextWrap key={textIndex}>
//             {textItem.map((text, index) => (
//               <TextContent key={index}>{text.text}</TextContent>
//             ))}
//           </TextWrap>
//         );
//       })}
//     </ParagraphWrap>
//   );
// }


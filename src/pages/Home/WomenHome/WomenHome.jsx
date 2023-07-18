import React from "react";

import HomeContent from "../../../components/HomeComponents/HomeContent";
import womenPage from "../../../database/women-page.json";
import CarouselContent from "../MainHome/CarouselContent";

const WomenHome = () => {
  return (
    <>
      <HomeContent homeData={womenPage} />
      <CarouselContent carouselData={womenPage} />
    </>
  );
};


export default WomenHome;

// const BottomCarousel = ({ bottomContent }) => {
//   const [carouselIndex, setCarouselIndex] = useState(0);

//   const itemsPerSlide = 3;
//   const totalItems = bottomContent && bottomContent[0]?.subcontent[0]?.length || 0;

//   const totalSlides = Math.ceil(totalItems / itemsPerSlide);

//   const startIndex = carouselIndex * itemsPerSlide;
//   const endIndex = startIndex + itemsPerSlide;

//   const handleNext = () => {
//     setCarouselIndex((prevIndex) =>
//       prevIndex >= totalSlides - 1 ? prevIndex + 1 : prevIndex
//     );
//   };

//   const handlePrev = () => {
//     setCarouselIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
//   };

//   return (
//     <div>
//         {totalItems > itemsPerSlide && (
//         <div>
//           <button onClick={handlePrev}>Previous</button>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//         <Carousel>
//         {bottomContent &&
//           bottomContent[0]?.subcontent[0]?.slice(startIndex, endIndex).map((content, index) => (
//             <Carousel.Item key={index}>
//               {content?.image && <img src={content.image} alt={content.titles} />}
//               {content?.heading && <h3>{content.heading}</h3>}
//             </Carousel.Item>
//           ))}
//       </Carousel>
//       <button onClick={handlePrev}>Previous</button>
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

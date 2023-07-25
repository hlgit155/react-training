import React from "react";
import dataCoatsAndJackets from "../../database/products/data_coatsAndJackets.json";
import {
  ProductWrap,
  RowProduct,
  ProductView,
  GalleryRow,
  Thumbnails,
  InnerThumbnails,
  LargePicture,
  DescriptionContainer,
  DescHeader,
  Sku,
  DescParagraph,
  ProductInfo,
} from "./Product.style";

export default function Product() {
  const data = dataCoatsAndJackets[0];

  return (
    <ProductWrap>
      <RowProduct>
        {/* Left hand side part */}
        <ProductView>
          <GalleryRow>
            <Thumbnails>
              <InnerThumbnails>
                {data["product_images"].map((item) => {
                  return <img src={item.thumbnails} width="100%"></img>;
                })}
              </InnerThumbnails>
            </Thumbnails>
            <LargePicture>
              <img
                src={data["product_images"][0].fullscreen}
                width="100%"
              ></img>
            </LargePicture>
          </GalleryRow>

          <DescriptionContainer>
            <DescHeader>Product details</DescHeader>
            <Sku>{data.sku}</Sku>
            <DescParagraph
              dangerouslySetInnerHTML={{ __html: data["short_description"] }}
            ></DescParagraph>
          </DescriptionContainer>
        </ProductView>
        {/* Right hand side part */}
        <ProductInfo>
          <ProductBrand></ProductBrand>
          <ProductName></ProductName>
          <ProductPrice></ProductPrice>
          <ProductColor></ProductColor>
          <SizeRow>
            <select></select>
            <SizeGuide></SizeGuide>
            
          </SizeRow>
          <FindYourBestFit></FindYourBestFit>
          <ButtonRow>
            <AddToBag></AddToBag>
            <WishList></WishList>
          </ButtonRow>
          <Material></Material>
        </ProductInfo>
      </RowProduct>
    </ProductWrap>
  );
}

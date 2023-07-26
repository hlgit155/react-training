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
  BrandWrap,
  BrandArrow,
  ProductBrand,
  ProductName,
  ProductPrice,
  ProductColor,
  SizeRow,
  Select,
  SizeGuide,
  SizeGuideButton,
  FindYourBestFit,
  ButtonRow,
  AddToBag,
  WishList,
  IconWishlist,
  Material,
  Care,
  Delivery,
  Returns,
  InfoHeader,
  InfoP,
  Input,
  DeliveryButtonRow,
  GoButton,
  ReturnsP,
  ThumbnailImg
} from "./Product.style";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Product() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const data = dataCoatsAndJackets.filter((product) => {
    return product.id === id;
  })[0];
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <ProductWrap>
      <RowProduct>
        {/* Left hand side part */}
        <ProductView>
          <GalleryRow>
            <Thumbnails>
              <InnerThumbnails>
                {"product_images" in data &&
                  data["product_images"].map((item, index) => {
                    return (
                      <ThumbnailImg
                        src={item.thumbnails}
                        width="100%"
                        onClick={() => setImgIndex(index)}
                        key={index}
                      ></ThumbnailImg>
                    );
                  })}
              </InnerThumbnails>
            </Thumbnails>
            <LargePicture>
              <img
                src={data["product_images"][imgIndex].fullscreen}
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
          <BrandWrap>
            {"brand" in data && <ProductBrand>{data.brand.name}</ProductBrand>}
            <BrandArrow>&gt;</BrandArrow>
          </BrandWrap>
          <ProductName>{data.name}</ProductName>
          <ProductPrice>$100</ProductPrice>
          <ProductColor>
            Color: <b>Black</b>
          </ProductColor>
          <SizeRow>
            {"size_n_stock" in data && (
              <Select>
                {data["size_n_stock"].map((item) => {
                  return <option value={item.size}>{item.size}</option>;
                })}
              </Select>
            )}
            <SizeGuide>
              <SizeGuideButton>SIZE GUIDE</SizeGuideButton>
            </SizeGuide>
          </SizeRow>
          <FindYourBestFit>FIND YOUR BEST FIT</FindYourBestFit>
          <ButtonRow>
            <AddToBag>ADD TO BAG</AddToBag>
            <WishList>
              <IconWishlist></IconWishlist>
            </WishList>
          </ButtonRow>
          <Material>
            <InfoHeader>Material</InfoHeader>
            <InfoP>{data.attributes["fabric_material"]}</InfoP>
          </Material>
          <Care>
            <InfoHeader>Care</InfoHeader>
            <InfoP>{data.attributes["care_label"]}</InfoP>
          </Care>
          <Delivery>
            <InfoHeader>Delivery</InfoHeader>
            <InfoP>Check your delivery time</InfoP>
            <DeliveryButtonRow>
              <Input type="text" defaultValue="Enter suburb / postcode"></Input>
              <GoButton>Go!</GoButton>
            </DeliveryButtonRow>
          </Delivery>
          <Returns>
            <InfoHeader>Returns</InfoHeader>
            <ReturnsP>
              *THE ICONIC returns are free for 30 days unless marked.
            </ReturnsP>
          </Returns>
        </ProductInfo>
      </RowProduct>
    </ProductWrap>
  );
}

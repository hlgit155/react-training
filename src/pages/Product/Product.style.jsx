import styled from "styled-components";
import { CoreBoxWidth, CoreH1, CoreH2, CoreP } from "../../core/core.styles";
import { ReactComponent as IcWishlist } from "../../assets/Header/icon-wishlist.svg";

export const ProductWrap = styled(CoreBoxWidth)`
  margin: 0 auto;
  padding: 0 24px;
`;

export const RowProduct = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 32px 0;
`;

export const ProductView = styled.div``;

export const GalleryRow = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 17 / 16;
`;

export const Thumbnails = styled.div`
  width: 25%;
  height: 100%;
  padding-right: 16px;
`;

export const InnerThumbnails = styled.div`
  height: 100%;
  overflow-y: scroll;
  direction: rtl;
  padding-left: 8px;
  width: 100%;
`;

export const LargePicture = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const DescriptionContainer = styled.div``;

export const DescHeader = styled(CoreH2)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  margin-top: 30px;
`;

export const Sku = styled(CoreP)`
  font-size: 12px;
  line-height: 16px;
  color: #b0b0b0;
  margin-bottom: 8px;
`;

export const DescParagraph = styled(CoreP)`
  font-size: 14px;
  line-height: 16px;
  color: #222;
  font-weight: 300;
`;
export const ProductInfo = styled.div`
  padding: 0 16px;
`;

export const BrandWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const BrandArrow = styled.div`
  color: #42abc8;
  font-size: 20px;
  line-height: 14px;
  margin-left: 8px;
`;

export const ProductBrand = styled(CoreH2)`
  color: #4d4d4d;
  font-size: 16px;
  font-weight: bold;
  :hover {
    color: #42abc8;
    cursor: pointer;
  }
`;

export const ProductName = styled(CoreH1)`
      font-size: 20px;
    line-height: 32px;
    font-weight: bold;
    margin-bottom: 10px;

`;

export const ProductPrice = styled(CoreP)`
font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
`;

export const ProductColor = styled(CoreP)`
  font-size: 13px;
  margin-bottom: 10px;
`;

export const SizeRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  width: 50%;
  border: 1px solid #cdcdcd;

  :hover {
    border-color: #42abc8;
    cursor: pointer;
  }
`;

export const SizeGuide = styled.div`
  width: 45%;
`;

export const SizeGuideButton = styled.button`
  height: 40px;
  width: 100%;
  padding: 12px 4px 10px;
  /* margin-left: 8px; */
  border: 1px solid #cdcdcd;
  background-color: white;
  font-weight: 600;
  :hover {
    background-color: #42abc8;
    border-color: #42abc8;
    color: white;
    cursor: pointer;
  }
`;

export const FindYourBestFit = styled.div`
  color: #42abc8;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const AddToBag = styled.button`
  height: 48px;
  width: 80%;
  padding: 12px 4px 10px;
  color: white;
  border: none;
  background-color: #42abc8;
  font-weight: 600;
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const WishList = styled.div`
  border: 1px solid #42abc8;
  padding: 8px 10px 0;
  :hover {
    cursor: pointer;
  }
`;

export const IconWishlist = styled(IcWishlist)`
  fill: #42abc8;
  height: 30px;
  width: 30px;
  margin: auto;
`;

export const Material = styled.div`
margin-bottom: 30px;
`;

export const Care = styled.div`
margin-bottom: 30px;`;

export const Delivery = styled.div`
margin-bottom: 30px;`;

export const Returns = styled.div``;

export const InfoHeader = styled(CoreH2)`
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 8px 0;
  font-weight: bold;
`;

export const InfoP = styled(CoreP)`
  font-size: 14px;
  line-height: 20px;
  color: #222;
  font-weight: lighter;
`;

export const Input = styled.input`
  height: 40px;
  padding: 8px;
  border: 1px solid #cdcdcd;
  width: 80%;
`;

export const DeliveryButtonRow = styled.div`
  display: flex;
`;

export const GoButton = styled.button`
  height: 40px;
  width: 20%;
  padding: 12px 4px 10px;
  /* margin-left: 8px; */
  border: 1px solid #cdcdcd;
  background-color: white;
  /* font-weight: 600; */
  :hover {
    background-color: #42abc8;
    border-color: #42abc8;
    color: white;
    cursor: pointer;
  }
`;

export const ReturnsP = styled(CoreP)`
  font-size: 12px;
  font-weight: 700;
`;

export const ThumbnailImg = styled.img`
  :hover{
    cursor: pointer;
  }
`;
import styled from "styled-components";
import { CoreBoxWidth, CoreH1, CoreH2, CoreP } from "../../core/core.styles";

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
  font-size: 12px;
  line-height: 16px;
  color: #222;
  font-weight: 300;
`;
export const ProductInfo = styled.div``;

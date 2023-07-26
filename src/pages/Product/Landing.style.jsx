import styled from "styled-components";
import { CoreBoxWidth, CoreH1, CoreH2, CoreP } from "../../core/core.styles";
import { NavLink } from "react-router-dom";

export const LandingWrap = styled.div``;
export const TopPromotionRow = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
`;

export const StyledNavlinkTopPromotionRow = styled(NavLink)`
  display: block;
  font-weight: 700;
  text-decoration: none;
  width: 35%;
  text-align: center;
  color: #4d4d4d;
  font-size: 13px;
  line-height: 19.5px;
  padding: 12px 0;
`;

export const CenteredContainer = styled(CoreBoxWidth)`
  margin: 0 auto;
  padding: 0 24px;
`;
export const SortAndBreadCrumbRow = styled.div`
  display: grid;
  grid-template-columns: 6fr 14fr 4fr;
`;
export const BreadCrumb = styled.div`
  padding: 16px;
  font-size: 12px;
  color: #acacac;
`;
export const ItemsFound = styled.div`
  font-size: 12px;
  color: #acacac;
  padding: 16px;
  text-align: center;
`;
export const SortingDropDownMenu = styled.div`
  padding: 9px 16px;
`;

export const PaginationRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
export const PageHeader = styled.div``;
export const Pagination = styled.div``;
export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;
export const ProductFilter = styled.div``;
export const Filter = styled.div``;
export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.div``;

export const Arrow = styled.div`
  transform: rotate(90deg);
`;
export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ProductCard = styled.div`
  width: 25%;
  padding: 0 16px;
  margin-bottom: 32px;
`;
export const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
export const Brand = styled(CoreH2)`
  font-weight: 600;
  font-size: 14px;
  /* margin-top: 10px; */
  line-height: 25px;
`;
export const Name = styled(CoreP)`
  font-size: 14px;
  line-height: 25px;
`;
export const Price = styled(CoreP)`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;

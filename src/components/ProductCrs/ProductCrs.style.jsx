import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CoreBoxWidth, CoreH1, CoreH2, CoreP } from "../../core/core.styles";

export const ProductCrsWrap = styled.div`
  /* width: 100%; */
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const ProductName = styled(CoreH2)`
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px
`;

export const PriceRow = styled.div`
  display: flex;
`;

export const OriPrice = styled(CoreP)`
  font-size: 14px;
  color: #8c8c8c;
  text-decoration: line-through;
  margin-right: 16px;
  line-height: 16px;
`;

export const Price = styled(CoreP)`
  font-size: 14px;
  margin-right: 16px;
  line-height: 16px;
`;

export const Label = styled(CoreP)`
  font-size: 12.6px;
  font-weight: 600;
  line-height: 16px;
  color: ${(props) => {
    let textColor = "";
    switch (props.color) {
      case "red":
        return "red";
        break;
      case "green":
        return "#349c5f";
        break;
      case "blue":
        return "#42abc8";
        break;
      case "orange":
        return "orange";
        break;
      default:
        return "black";
    }
  }};
`;

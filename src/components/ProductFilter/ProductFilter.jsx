import React from "react";
import {
  ProductFilterWrap,
  FirstRow,
  Header,
  Clear,
} from "./ProductFilter.style";

export default function ProductFilter() {
  // const { data } = props
  return (
    <ProductFilterWrap>
      <FirstRow>
        <hr></hr>
        <Header>Filter</Header>
        <Clear>Clear all</Clear>
        <hr></hr>
      </FirstRow>
      {/* {data.map(item => {

      })} */}
    </ProductFilterWrap>
  );
}

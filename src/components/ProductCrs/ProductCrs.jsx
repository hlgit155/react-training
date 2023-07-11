import React from 'react'
import { NavLink } from 'react-router-dom'
import {ProductCrsWrap,
  StyledNavLink,
ProductName,
PriceRow,
OriPrice,
Price,
Label} from './ProductCrs.style'

export default function ProductCrs(props) {
  const {data} = props
  return (
    <ProductCrsWrap>
      <StyledNavLink to={data.url}>
        <img src={data.image} width="100%"></img>
        <ProductName>{data.name}</ProductName>
        <PriceRow>
          {"originalPrice" in data && <OriPrice>${data.originalPrice}</OriPrice>}
          <Price>${data.price}</Price>
          <Label color={data.labelColor}>{data.labelText}</Label>
        </PriceRow>
      </StyledNavLink>
    </ProductCrsWrap>
  )
}

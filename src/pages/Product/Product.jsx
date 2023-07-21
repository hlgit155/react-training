import React from 'react'
import dataCoatsAndJackets from '../../database/products/data_coatsAndJackets.json'


export default function Product() {
  const data = dataCoatsAndJackets[0];
  return (
    <ProductWrap>
      <ProductView></ProductView>
      <ProductInfo></ProductInfo>
    </ProductWrap>
  )
}

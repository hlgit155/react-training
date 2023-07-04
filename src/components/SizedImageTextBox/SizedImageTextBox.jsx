import React from 'react'
import {
  ImageHeader,
  ImageTextWrap,
  ImageDescription
} from "./SizedImageTextBox.style"

export default function SizedImageTextBox(props) {
  return (
    <ImageTextWrap style={{width:props.width}}>
    {props.img.image &&
    <img
      src={props.src}
      width={props.width}
    ></img>}
    {props.img.imageHeader && props.img.textPosition === "below" && (
      <ImageHeader>{props.img.imageHeader}</ImageHeader>
    )}
    {props.img.description && <ImageDescription>{props.img.description}</ImageDescription>}
  </ImageTextWrap>
  )
}

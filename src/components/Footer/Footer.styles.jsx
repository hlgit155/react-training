import styled from "styled-components";
import { CoreBoxWidth } from "../../core/core.styles";

export const OuterWrap = styled.footer`
  background-color: black;
  width: 100%;
  font-size: .75rem;
`;

export const Wrap = styled(CoreBoxWidth)`
  /* width: 100%;
  max-width: 1280px; */
  margin: 0 auto;
  padding: 2.5rem 0;
`;

export const FooterWrap = styled.div`
  /* width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2.5rem 0; */
  /* background-color: black; */
  display: flex;
  justify-content: space-between;
`;

export const FooterColumn = styled.div`
  width:33%;
`;

export const ColumnHeader = styled.div`
  color: white;
  font-family: Proxima Nova Bold, Sans-Serif;
  font-weight: 600;
  
  margin: 16px 0 12px;
`;

export const FooterItem = styled.div`
  color: white;
  font-family: Proxima Nova, Sans-Serif;
  margin-bottom: 0.75rem;
`;

export const BottomWrap = styled.div`
  color: white;
  font-family: Proxima Nova, Sans-Serif;
  margin-bottom: 0.75rem;
`;

export const BottomHeader = styled.div`
  color: white;
  font-family: Proxima Nova, Sans-Serif;
  margin-bottom: 0.75rem;
`;

export const BottomColumn = styled.div`
  width: 12.5%;
`;

export const BottomColumnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
`;

export const BottomItem = styled.div`
  color: white;
  font-family: Proxima Nova, Sans-Serif;
  margin-bottom: 0.75rem;
`;

export const LeftBox = styled.div`
  display:flex;
  width: 50%;
`;
export const RightBox = styled.div`
  width: 40%
`;

export const Message = styled.p`
  color: white;
  margin: 0 0 20px;
`;
export const SearchGroup = styled.div`
  display: flex;
  margin: 0 0 16px;
`;

export const Select = styled.select`
  width: 20%;
  height: 40px;
  padding: 0 16px;
  border: none;
  border-right: 1px solid #F5F5F5;
  /* background-color: #ffffff; */
`;

export const Input = styled.input`
height: 40px;
padding: 8px;
border: none;
`;

export const Button = styled.button`
height: 40px;
width: 20%;
padding: 12px 4px 10px;
margin-left: 8px;
border: none;
`;

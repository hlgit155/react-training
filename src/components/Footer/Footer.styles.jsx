import styled from "styled-components";
import { CoreBoxWidth } from "../../core/core.styles";

export const FooterOuter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 18.75rem;
  background-color: #232323;
`;

export const FooterWrap = styled(CoreBoxWidth)`
  padding: 0 16px;
`;

export const FooterSection = styled.section`
  display: flex;
  width: 100%;
  background-color: #232323;
  padding: 2.5rem 0;
`;

export const FooterHeader = styled.h4`
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const FooterColumn = styled.div`
  padding: 0 8px;
`;

export const TFLeft = styled.div`
  display: flex;
  width: 50%;
  background-color: #232323;
`;

export const TFRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  background-color: #232323;
  /* padding: 0 8px; */
`;

export const TFColumn = styled(FooterColumn)`
  width: 33.33%;
`;

export const TFMenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
  line-height: 20px;
  margin-bottom: 0.25rem;
`;

export const ContactGadget = styled.div`
  width: max-content;
  min-width: 80%;
  min-height: 40px;
  padding: 0 8px;
`;

export const ContactHeader = styled.h4`
  color: white;
  font-size: 0.75rem;
`;

export const Message = styled.p`
  color: white;
  font-size: 0.75rem;
  margin: 0 0 20px;
`;

export const SearchGroup = styled.div`
  display: flex;
  height: 40px;
  margin-bottom: 16px;
`;

export const EmailGroup = styled.div`
  display: flex;
  width: 75%;
  padding-right: 8px;
`;

export const Select = styled.select`
  width: max-content;
  padding: 0 16px;
  border: none;
  border-right: 1px solid #f5f5f5;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;

export const Button = styled.button`
  width: 25%;
  padding: 12px 4px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

export const BottomFooter = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const BFSection = styled.div`
  display: flex;
  width: 100%;
`;

export const BFColumn = styled(FooterColumn)`
  width: 25%;
`;

/** White-Footer Below **/
export const WhiteFooterWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
`;

export const WhiteFooter = styled(CoreBoxWidth)`
  display: grid;
  align-items: center;
  grid-template-columns: 40% 20% 40%;
  padding: 16px 24px;
`;

export const WFLeftImage = styled.img`
  width: 6.25rem;
  max-width: 100%;
`;

export const WFCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > * {
    max-width: 120px;
  }
`;

export const WFRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

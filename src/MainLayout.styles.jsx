import styled from "styled-components";
import { CoreBoxWidth } from "./core/core.styles";

export const BodyOuter = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

export const BodyWrap = styled(CoreBoxWidth)`
  height: 100%;
  padding: 0 24px;
`;

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const TopbarWrap = styled.nav`
  display: flex;
`;

const TopbarItem = styled(NavLink)`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  // font-family: "Proxima Nova Bold";
  padding: 14px 24px;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &:active {
    border-color: white;
  }
`;

export { TopbarWrap, TopbarItem };
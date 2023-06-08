import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: black;
`;

const NavbarItem = styled.div`
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    // font-family: "Proxima Nova Bold";
    padding: 14px 24px;
    transition: all .25s;
    cursor: pointer;

    &:hover {
        background-color: rgba(255,255,255,.2);
    }
    &:active {
        border-bottom: 1px solid #eee;
    }
`;

const SubMenuWrap = styled.div`
    display: flex;
    background-color: white;
    position: absolute;
    width: 100%;

`

const SubList = styled.div`
    width: 100px;
`

const SubListTitle = styled.div`
    font-weight: bold;
`

const WomenContent = styled.div`
    background-color: #EDEDEE;
    height: 2000px;
`

export { StyledNavbar, NavbarItem, SubMenuWrap, SubList, SubListTitle, WomenContent };

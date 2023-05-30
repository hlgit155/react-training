import styled from "styled-components";

const TopbarWrap = styled.nav`
    display: flex;
`;

const TopbarItem = styled.div`
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

export { TopbarWrap, TopbarItem };
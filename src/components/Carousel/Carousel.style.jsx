import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";
import styled from "styled-components";
import { ReactComponent as IcLeft } from "../../assets/Carousel/IconArrowLeft.svg";
import { ReactComponent as IcRight } from "../../assets/Carousel/IconArrowRight.svg";
import { CoreBoxWidth, CoreH1, CoreH2, CoreP} from "../../core/core.styles";


export const CarouselContainer = styled.div`
  background-color: grey;
  width: 100%;
  /* display: flex;
  flex-direction: column; */
`;

export const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const CarouselContent = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  scrollbar-width: none; /* hide scrollbar in Firefox */
  ::-webkit-scrollbar {
    /* hide scrollbar in webkit browser */
    display: none;
  }
  > * {
    margin-right: 20px;
    width: calc(25% - 20px);
    /* width: 25%; */
    flex-shrink: 0;
    flex-grow: 1;
  }
`;


export const StyledControlButton = styled.button`
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;
`;

export const IconLeft = styled(IcLeft)`
  fill: ${(props) => {
    return props.currentIndex===0 ? "white" : "black";
    }
  };
  width: 14px;
`;
export const IconRight = styled(IcRight)`
    fill: ${(props) => {
    return props.currentIndex=== props.length-4 ? "white" : "black";
    }
  };
  width: 14px;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Header = styled(CoreH1)`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 600;
`;
export const Buttons = styled.div`
  display:flex;
`;

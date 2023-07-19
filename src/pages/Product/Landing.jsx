import data from "../../database/catagory/coats-jackets.json";
import {
  LandingWrap,
  TopPromotionRow,
  StyledNavlinkTopPromotionRow,
  CenteredContainer,
  SortAndBreadCrumbRow,
  BreadCrumb,
  ItemsFound,
  SortingDropDownMenu,
  PaginationRow,
  PageHeader,
  Pagination,
  MainContent,
  ProductFilter,
  ProductList,
  ProductCard,
  StyledNavlink,
  Brand,
  Name,
  Price,
} from "./Landing.style";

function Landing() {
  return (
    <LandingWrap>
      <TopPromotionRow>
        <StyledNavlinkTopPromotionRow>
          WEAR NOW | RE-SELL LATER | AVAILABLE NOW WITH AIRROBE
        </StyledNavlinkTopPromotionRow>
      </TopPromotionRow>
      {/* Elements under this are centred with a max width of 1280px */}
      <CenteredContainer>
        <SortAndBreadCrumbRow>
          <BreadCrumb>WOMEN CLOTHING COATS & JACKETS</BreadCrumb>
          <ItemsFound>1763 items found</ItemsFound>
          <SortingDropDownMenu>
            <select>
              <option value="popularity">Popularity</option>
              <option value="newArr">New Arrivals</option>
              <option value="h2l">Price High to Low</option>
              <option value="l2h">Price Low to High</option>
              <option value="a2z">Brand A to Z</option>
              <option value="z2a">Brand Z to A</option>
            </select>
          </SortingDropDownMenu>
        </SortAndBreadCrumbRow>
        <hr></hr>
        <PaginationRow>
          <PageHeader>Women's Coats & Jackets</PageHeader>
          <Pagination>Page 1 2 3 4 5</Pagination>
        </PaginationRow>
        <MainContent>
          <ProductFilter></ProductFilter>
          <ProductList>
            {data.products.map((item) => {
              return (
                <ProductCard>
                  <StyledNavlink>
                    <img src={item.image} width="100%"></img>
                    <Brand>{item.brand}</Brand>
                    <Name>{item.name}</Name>
                    <Price>${item.price}</Price>
                  </StyledNavlink>
                </ProductCard>
              );
            })}
          </ProductList>
        </MainContent>
      </CenteredContainer>
    </LandingWrap>
  );
}

export default Landing;

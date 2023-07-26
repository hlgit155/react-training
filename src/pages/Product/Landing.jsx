import data from "../../database/products/data_coatsAndJackets.json";
import filters from "../../database/filter/filter.json";
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
  Filter,
  TitleRow,
  Title,
  Arrow,

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
          <BreadCrumb>WOMEN / CLOTHING / COATS & JACKETS</BreadCrumb>
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
          <ProductFilter>
            {filters.map(item => {
              return (
                <Filter>
                  <TitleRow>
                    <Title>{item}</Title>
                    <Arrow>&gt;</Arrow>
                  </TitleRow>
                  <hr style={{color:"grey"}}></hr>
                </Filter>
              )
            })}


          </ProductFilter>
          <ProductList>
            {data.map((item) => {
              return (
                <ProductCard>
                  <StyledNavlink to={{
        pathname: "/product",
        search: `?id=${item.id}`
                  }}>
                    <img src={item["product_images"][0].thumbnails} width="100%"></img>
                    <Brand>{item.brand.name}</Brand>
                    <Name>{item.name}</Name>
                    <Price>$100</Price>
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

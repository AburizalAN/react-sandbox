import styled from "@emotion/styled";

const ViewContainer = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: auto;
`;

const Navbar = styled.nav`
  padding: 12px;
  border-bottom: 1px solid #eaeaea;
`;

const Content = styled.div`
  padding-top: 16px;
`

const PageTitle = styled.div`
  font-weight: 700;
  color: #484848;
`;

const ProductItem = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 8px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  .product {
    display: flex;
    .image {
      width: 80px;
      height: 80px;
      border-radius: 12px;
      background-color: #a4a4a4;
      object-fit: cover;
      object-position: center;
      margin-right: 16px;
    }
    .text {
      .title {
        
      }
      .price {
        font-weight: 700;
      }
    }
  }
`;

const Cart = () => {
  return (
    <ViewContainer>
      <Navbar>
        <PageTitle>Contoh Cart</PageTitle>
      </Navbar>
      <Content>
        <ProductsContainer>
          <ProductItem>
            <div className="product">
              <div className="image">

              </div>
              <div className="text">
                <div className="title">
                  Mobil Keren Punya Abu
                </div>
                <div className="price">
                  {new Intl.NumberFormat("id-ID").format(1000)}
                </div>
              </div>
            </div>
          </ProductItem>
          <ProductItem>
            Ini Product Item;
          </ProductItem>
        </ProductsContainer>
      </Content>
    </ViewContainer>
  )
};

export default Cart;
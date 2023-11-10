import * as React from "react";
import { BsCartPlus } from "react-icons/bs";
import ProductGroup from "./ProductGroup";
import {
  ViewContainer,
  Navbar,
  PageTitle,
  CartIcon,
  Content,
  ProductsContainer,
  CartAlert,
} from "./styles";
import carts from "../dataDummy";

const Cart = () => {
  const [data, setData] = React.useState<any>(carts);

  const checkEmptyStock = data.some((cart: any) => {
    const checkCart = cart.products.some((product: any) => {
      return product.stock === 0;
    })
    return checkCart;
  })

  return (
    <ViewContainer>
      <Navbar>
        <PageTitle>Contoh Cart</PageTitle>
        <CartIcon title="Tambah product">
          <BsCartPlus />
        </CartIcon>
      </Navbar>
      <Content>
        <ProductsContainer>
          {checkEmptyStock ? (
            <CartAlert>Ada Stock Product yang kosong</CartAlert>
          ) : null}
          {data && data.length > 0 ? (
            data.map((item: any, i: number) => (
              <ProductGroup key={i} cart={item} setData={setData} cartIndex={i}  />
            ))
          ) : (
            <div>Data Not Found</div>
          )}
        </ProductsContainer>
      </Content>
    </ViewContainer>
  );
};

export default Cart;

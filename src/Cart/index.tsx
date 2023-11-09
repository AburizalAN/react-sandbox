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
} from "./styles";
import carts from "../dataDummy";

const Cart = () => {
  const [data, setData] = React.useState<any>(carts);

  console.log("data", data);

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

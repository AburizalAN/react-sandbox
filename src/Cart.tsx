import * as React from "react";
import styled from "@emotion/styled";
import Modal from "./components/Modal";
import { FaChevronDown } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";

const ViewContainer = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: auto;
`;

const Navbar = styled.nav`
  padding: 16px 12px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;

`;

const Content = styled.div`
  padding: 16px 12px;
`

const PageTitle = styled.div`
  font-weight: 700;
  color: #484848;
  flex-grow: 1;
`;

const CartIcon = styled.div`
  color: #484848;
  padding: 4px;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #ececec;
  }
`

const ProductItemWrapper = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  padding: 8px;
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
      flex-grow: 1;
      .title {}
      .price {
        font-weight: 700;
      }
      .counter {
        margin-top: 4px;
        display: flex;
        justify-content: right;
        column-gap: 4px;
        .btn-counter {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #7A9D54;
          border: none;
          border-radius: 4px;
          color: white;
          cursor: pointer;
        }
        .amount {
          width: 40px;
          text-align: center;
          border-radius: 4px;
          border: 1px solid #e7e7e7;
        }
      }
    }
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const ProductGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 12px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

const SelectShippingWrapper = styled.div`
  padding: 8px;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .title {
    flex-grow: 1;
  }
  .icon {
    padding: 4px;
    color: #484848;
  }
`;

const ShippingList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShippingItem = styled.div`
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;

const Cart = () => {
  return (
    <ViewContainer>
      <Navbar>
        <PageTitle>Contoh Cart</PageTitle>
        <CartIcon title="Tambah product"><BsCartPlus /></CartIcon>
      </Navbar>
      <Content>
        <ProductsContainer>
          <ProductGroup>
            {[...Array(4)].map((_, i) => (
              <ProductItem key={i} />
            ))}
            <SelectShipping />
          </ProductGroup>
          <ProductGroup>
            {[...Array(4)].map((_, i) => (
              <ProductItem key={i} />
            ))}
            <SelectShipping />
          </ProductGroup>
        </ProductsContainer>
      </Content>
    </ViewContainer>
  )
};

const ProductItem = () => {
  const [count, setCount] = React.useState(1);

  return (
    <ProductItemWrapper>
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
          <div className="counter">
            <button className="btn-counter" onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
            <input disabled className="amount" value={count} />
            <button className="btn-counter" onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>
      </div>
    </ProductItemWrapper>
  )
}

const SelectShipping = () => {
  const [ isOpen, setIsOpen ] = React.useState(false);
  const [ selectedShipping, setSelectedShipping ] = React.useState(null);
  return (
    <>
      <SelectShippingWrapper onClick={() => setIsOpen(true)}>
        <div className="title">Select Shipping</div>
        <div className="icon"><FaChevronDown /></div>
      </SelectShippingWrapper>
      <Modal
        visible={isOpen}
        onCancel={() => setIsOpen(false)}
        centerPosition={true}
        title="Select Shipping"
      >
        <ShippingList>
          <ShippingItem>
            test 1
          </ShippingItem>
          <ShippingItem>
            test 1
          </ShippingItem>
          <ShippingItem>
            test 1
          </ShippingItem>
        </ShippingList>
      </Modal>
    </>
  )
}

export default Cart;
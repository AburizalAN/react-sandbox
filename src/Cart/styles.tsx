import styled from "@emotion/styled";

export const ViewContainer = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: auto;
`;

export const Navbar = styled.nav`
  padding: 16px 12px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;

`;

export const Content = styled.div`
  padding: 16px 12px;
`;

export const PageTitle = styled.div`
  font-weight: 700;
  color: #484848;
  flex-grow: 1;
`;

export const CartIcon = styled.div`
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
`;

export const ProductItemWrapper = styled.div`
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
      margin-right: 16px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    .text {
      flex: 1;
      .title {
        line-height: 1.2;
      }
      .price {
        font-weight: 700;
      }
      .actions {
        display: flex;
        margin-top: 4px;
        .counter {
          display: flex;
          justify-content: right;
          column-gap: 4px;
          margin-left: auto;
          .btn-counter {
            width: 30px;
            height: 30px;
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
        .button-delete {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 4px;
          background-color: #FA7070;
          color: white;
          margin-left: 8px;
          cursor: pointer;
          transition: all .3s ease;
          &:hover {
            background-color: #e35858;
          }
        }
      }
    }
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const ProductGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 12px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  .summary {
    font-size: 13px;
    color: #919191;
  }
`;

export const SelectShippingWrapper = styled.div`
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

export const ShippingList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShippingItem = styled.div`
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;
import * as React from "react";
import ProductItem from "./ProductItem";
import SelectShipping from "./SelectShipping";
import { ProductGroupWrapper } from "./styles";

interface Props {
  cart: any;
  setData: (cb: any) => void;
  cartIndex: number;
}

const ProductGroup = ({ cart, setData, cartIndex }: Props) => {

  const deleteItem = (productId?: number) => {
    const filteredData = [];
    for (const product of cart.products) {
      if (product.id !== productId) {
        filteredData.push(product)
      }
    }
    cart.products = filteredData;
    setData((carts: any) => {
      let cartIndex: number = -1;
      for (let i = 0; i < carts.length; i++) {
        if (carts[i].id === cart.id) {
          cartIndex = i;
          break;
        }
      }
      carts[cartIndex] = cart;
      return [...carts];
    })
  }

  // const deleteItem = (productId?: number) => {
  //   const filteredData = cart.products.filter(
  //     (product: any) => product.id !== productId
  //   );
  //   cart.products = filteredData;
  //   setData((carts: any) => {
  //     const cartIndex = carts.findIndex((item: any) => item.id === cart.id);
  //     carts[cartIndex] = cart;
  //     return [...carts];
  //   });
  // };

  // const improvedDeleteItem = (index: number) => {
  //   cart.products.splice(index, 1);
  //   setData((carts: any) => {
  //     carts[cartIndex] = cart;
  //     return [...carts];
  //   })
  // };

  const setSelectedShipping = (shipping: any) => {
    setData((carts: any) => {
      const cartIndex = carts.findIndex((item: any) => item.id === cart.id);
      carts[cartIndex].shipping = shipping;
      return [...carts];
    })
  };

  const changeCount = (idProduct: number, count: number) => {
    setData((carts: any) => {
      const cartIndex = carts.findIndex((item: any) => item.id === cart.id);
      const productIndex = carts[cartIndex].products.findIndex((item: any) => item.id === idProduct);
      carts[cartIndex].products[productIndex].qty = count;
      return [...carts];
    })
  }

  const subTotal =
    cart?.products?.length > 0
      ? cart?.products?.reduce(
          (total: any, value: any) => total + value.price * value.qty ?? 0,
          0
        )
      : 0;

  return (
    <ProductGroupWrapper>
      {cart.products &&
        cart.products.map((product: any, i: number) => (
          <ProductItem
            key={i}
            data={product}
            deleteItem={deleteItem}
            changeCount={changeCount}
            // deleteItem={() => improvedDeleteItem(i)}
          />
        ))}
      <SelectShipping setSelectedShipping={setSelectedShipping} selectedShipping={cart.shipping} />
      <table className="summary">
        <tr>
          <td>Subtotal</td>
          <td>:</td>
          <td>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(subTotal as number)}</td>
        </tr>
        <tr>
          <td>Insurance</td>
          <td>:</td>
          <td>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cart?.shipping?.insurance_fee ?? 0 as number)}</td>
        </tr>
      </table>
    </ProductGroupWrapper>
  );
};

export default ProductGroup;

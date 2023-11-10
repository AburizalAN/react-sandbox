import * as React from "react";
import Modal from "../components/Modal";
import { CheckkoutItem, CheckoutList, TotalCheckout } from "./styles";

interface Props {
  children: (props: any) => React.ReactElement;
  data: any;
}

const ModalCheckout = ({ children, data }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const modalProps = {
    openModal: () => setIsOpen(true),
  };

  const listCheckout = data.flatMap((cart: any) =>
    cart.products.map((product: any) => ({
      title: product.title,
      totalPrice: product.price * product.qty,
    }))
  );

  const totalPrice = listCheckout.reduce(
    (total: number, product: any) => total + product.totalPrice,
    0
  );

  console.log("list Checkout", listCheckout);

  return (
    <>
      {children(modalProps)}
      <Modal
        visible={isOpen}
        onCancel={() => setIsOpen(false)}
        title="Checkout"
        centerPosition
      >
        <CheckoutList>
          {listCheckout.map((product: any, i: number) => (
            <CheckkoutItem key={i}>
              <div className="title">{product.title}</div>
              <div className="price">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(product.totalPrice)}
              </div>
            </CheckkoutItem>
          ))}
        </CheckoutList>
        <TotalCheckout>
          <div className="title">Total Price</div>
          <div className="price">{new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(totalPrice)}</div>
        </TotalCheckout>
      </Modal>
    </>
  );
};

export default ModalCheckout;

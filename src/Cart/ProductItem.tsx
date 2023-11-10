import * as React from "react";
import { MdDeleteForever } from "react-icons/md";
import { ProductItemWrapper } from "./styles";

interface Props {
  data: any;
  deleteItem: (idProduct?: number) => void;
  changeCount: (idProduct: number, count: number) => void;
}

const ProductItem = ({
  data,
  deleteItem,
  changeCount,
}: Props) => {

  const quantity = data?.qty ?? 1;
  const totalPrice = data?.price * data?.qty;

  return (
    <ProductItemWrapper emptyStock={data?.stock <= 0}>
      <div className="product">
        <div className="image">
          <img src={data?.image} alt={data?.title} />
        </div>
        <div className="text">
          <div className="title">{data?.title}</div>
          <div className="price">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totalPrice)}
          </div>
          <div className="actions">
            <div className="counter">
              <button
                className="btn-counter"
                onClick={() => changeCount(data.id, quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <input disabled className="amount" value={quantity ?? 1} />
              <button
                className="btn-counter"
                onClick={() => changeCount(data.id, quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={() =>
                deleteItem(data.id)
              }
              className="button-delete"
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </ProductItemWrapper>
  );
};

export default ProductItem;

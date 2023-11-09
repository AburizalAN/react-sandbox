import * as React from "react";
import { MdDeleteForever } from "react-icons/md";
import { ProductItemWrapper } from "./styles";

const ProductItem = ({
  data,
  deleteItem,
}: {
  data: any;
  deleteItem: (idProduct?: number) => void;
}) => {
  const [count, setCount] = React.useState(1);

  return (
    <ProductItemWrapper>
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
            }).format(data?.price)}
          </div>
          <div className="actions">
            <div className="counter">
              <button
                className="btn-counter"
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
              >
                -
              </button>
              <input disabled className="amount" value={count} />
              <button
                className="btn-counter"
                onClick={() => setCount(count + 1)}
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

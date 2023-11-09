import * as React from "react";
import Modal from "../components/Modal";
import { FaChevronDown } from "react-icons/fa";
import { SelectShippingWrapper, ShippingList, ShippingItem } from "./styles";

const shippingData = [
  {
    id: 19,
    name: "SiCepat",
    pricing: 1000,
    insurance_fee: 100,
    must_use_insurance: true,
  },
  {
    id: 20,
    name: "JNT",
    pricing: 1200,
    insurance_fee: 120,
    must_use_insurance: true,
  },
  {
    id: 21,
    name: "Anter Aja",
    pricing: 1500,
    insurance_fee: 110,
    must_use_insurance: true,
  },
  {
    id: 22,
    name: "JNE",
    pricing: 2000,
    insurance_fee: 150,
    must_use_insurance: true,
  },
];

interface Props {
  setSelectedShipping: (shipping: any) => void;
  selectedShipping: any;
}

const SelectShipping = ({ setSelectedShipping, selectedShipping }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <SelectShippingWrapper onClick={() => setIsOpen(true)}>
        <div className="title">
          {selectedShipping ? `${selectedShipping.name}` : "Select Shipping"}
        </div>
        <div className="icon">
          <FaChevronDown />
        </div>
      </SelectShippingWrapper>
      <Modal
        visible={isOpen}
        onCancel={() => setIsOpen(false)}
        centerPosition={true}
        title="Select Shipping"
      >
        <ShippingList>
          {shippingData.map((item, i: number) => (
            <ShippingItem
              key={i}
              onClick={() => {
                setSelectedShipping(item);
                setIsOpen(false);
              }}
            >
              {item.name}
            </ShippingItem>
          ))}
        </ShippingList>
      </Modal>
    </>
  );
};

export default SelectShipping;

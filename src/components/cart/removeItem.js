import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";

const RemoveItem = ({ lineItemId }) => {
  const { removeLineItem } = useContext(CartContext);

  const handleClick = () => {
    removeLineItem(lineItemId);
  };

  return (
    <a href="#" className="uk-icon uk-text-primary" onClick={handleClick} data-uk-icon="trash"></a>
  );
};

export default RemoveItem;

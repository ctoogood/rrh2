import React from "react";

const QuantityAdjuster = ({ item, onAdjust }) => {
  const { quantity } = item;

  const handleDecrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: -1 });
  };

  const handleIncrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: 1 });
  };

  return (
    <div className="uk-flex">
      <button className="uk-button uk-text-bold" onClick={handleDecrementQuantity}>-</button>
      <div className="uk-padding-small uk-padding-remove-vertical"><strong>{quantity}</strong></div>
      <button className="uk-button uk-text-bold" onClick={handleIncrementQuantity}>+</button>
    </div>
  );
};

export default QuantityAdjuster;

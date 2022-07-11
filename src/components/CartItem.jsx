import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => dispatch(removeItem(id));
  const increaseAmountHandler = () => dispatch(increase(id));
  const decreaseAmountHandler = () => {
    if (amount === 1) return removeItemHandler();

    dispatch(decrease(id));
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={removeItemHandler}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={increaseAmountHandler}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={decreaseAmountHandler}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;

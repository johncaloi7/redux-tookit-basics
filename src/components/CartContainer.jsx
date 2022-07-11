import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <header className="cart">
        <h2>your bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>
    );
  }

  return (
    <section className="cart">
      <h2>your bag</h2>
      <section>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </section>
      <footer>
        <hr />
        <section className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </section>
        <button onClick={() => dispatch(openModal())} className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

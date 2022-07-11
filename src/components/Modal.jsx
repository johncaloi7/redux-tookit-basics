import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const closeAndDeleteModalHandler = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };
  return (
    <aside className="modal-container">
      <section className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <section className="btn-container">
          <button
            onClick={closeAndDeleteModalHandler}
            className="btn confirm-btn"
          >
            confirm
          </button>
          <button onClick={closeModalHandler} className="btn clear-btn">
            cancel
          </button>
        </section>
      </section>
    </aside>
  );
};

export default Modal;

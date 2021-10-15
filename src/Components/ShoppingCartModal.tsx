import React from "react";
import { createPortal } from "react-dom";
import { ShoppingCart } from "./ShoppingCart";
import { CSSTransition } from "react-transition-group";
import { useAppSelector } from "../hook";
export const ShoppingCartModal = () => {
  const isOpenShoppingCart = useAppSelector(
    (state) => state.isOpenShoppingcart.isOpenShoppingcart
  );
  return (
    <>
      {createPortal(
        <CSSTransition
          in={isOpenShoppingCart}
          classNames="shoppingCart-"
          timeout={200}
          unmountOnExit
        >
          <ShoppingCart />
        </CSSTransition>,
        document.getElementById("shoppingCartModal-root") as HTMLDivElement
      )}
    </>
  );
};

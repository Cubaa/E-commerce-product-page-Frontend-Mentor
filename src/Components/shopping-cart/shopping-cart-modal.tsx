import React, { FC } from "react";
import { createPortal } from "react-dom";
import { ShoppingCart } from "./shopping-cart";

export const ShoppingCartModal: FC = () => {

  return (
    <>
      {createPortal(
          <ShoppingCart />,
        document.getElementById("shoppingCartModal-root") as HTMLDivElement
      )}
    </>
  );
};

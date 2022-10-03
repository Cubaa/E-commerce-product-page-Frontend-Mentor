import React, { FC } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hook";
import { CartItem } from "../cart-item/cart-item";
import { PageButton } from "../page-button/page-button";

export const ShoppingCart: FC = () => {
  const isOpenShoppingCart = useAppSelector(state => state.shoppingCart.isOpenShoppingcart);
  
  return (
    <>
      {isOpenShoppingCart && <ShopCartContainer>
        <ShopCartName>
          <p>Cart</p>
        </ShopCartName>
        <CartItem />
        <PageButton
          buttonName="Checkout"
          buttonSize="big"
          buttonBgColor="#fc7f1a"
          buttonType="button"
          ButtonTxtColor="#fff"
        />
      </ShopCartContainer>}
    </>
  );
};

const ShopCartContainer = styled.div`
  position: absolute;
  top: calc(0% + 100px);
  left: calc(100% - 310px);
  min-width: 300px;
  min-height: 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  padding: 1rem;
  z-index: 999;

  @media (max-width: 850px) {
    top: calc(0% + 150px);
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
  }

  @media (max-width: 319px) {
    min-width: 11%;
  }
`;

const ShopCartName = styled.div`
  border-bottom: 1px solid #e0e2e6;
  padding-bottom: 0.9rem;
  margin-bottom: 10px;
  
  p {
    font-weight: bold;
    font-size: 14px;
  }
  
  @media (max-width: 319px) {
    p {
      text-align: center;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;

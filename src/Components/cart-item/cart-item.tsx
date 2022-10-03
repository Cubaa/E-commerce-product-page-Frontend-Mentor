import React, { FC } from "react";
import styled from "styled-components";
import { IProductCart, removeProductFromCart } from "../../features/shoppingCart/shoppingCartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";

export const CartItem: FC = () => {
  const shoppingCart = useAppSelector((state) => state.shoppingCart.shoppingCart);
  const dispatch = useAppDispatch();

  return (
    <CartItemWrapper>
        {shoppingCart.map((product: IProductCart, index: number) => {
          return (
            <ItemDataWrapper key={index}>
              <ItemImage>
                <img
                  src={product.img}
                  alt="product"
                />
              </ItemImage>
              <ItemDataInfoWrapper>
                <ItemNameWrapper>
                  <p>{product.name}</p>
                </ItemNameWrapper>
                <ItemDataSummaryWrapper>
                  <span>${product.price} x {product.quantity}</span>
                  <span>${product.total}</span>
                </ItemDataSummaryWrapper>
              </ItemDataInfoWrapper>
              <DeleteItemIcon onClick = {() => dispatch(removeProductFromCart(product.id))}>
                <img src="/images/icon-delete.svg" alt="icon-delete" />
              </DeleteItemIcon>
            </ItemDataWrapper>
          )
        })}
    {shoppingCart.length === 0 ? <CartItemInfo>Your cart is empty</CartItemInfo> : null}
    </CartItemWrapper>
  );
};

const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

const ItemImage = styled.div`
  display: flex;

  img {
    border-radius: 5px;
    height: 40px;
    width: 40px;
    object-fit: cover;
  }

  @media (max-width: 319px) {
    img {
      height: 80px;
      width: 80px;
    }
  }
`;

const ItemDataWrapper = styled.div`
  display: flex;
  margin: 8px 0px;

  @media (max-width: 319px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ItemNameWrapper = styled.div`
  display: flex;
  flex: 1;

  p {
    font-size: 14px;
    color: hsl(219, 9%, 45%);
  }

  @media (max-width: 319px) {
    justify-content: center;

    p {
      text-align: center;
      font-size: 18px;
    }
  }
`;

const ItemDataInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 10px;

  @media (max-width: 319px) {
    margin: 15px 0;
  }
`;

const ItemDataSummaryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  span {
    color: hsl(219, 9%, 45%);
    font-size: 14px;
  }

  span:nth-of-type(1) {
    margin-right: 10px;
  }

  span:nth-of-type(2) {
    color: #000;
    font-weight: bold;
  }

  @media (max-width: 319px) {
    justify-content: center;
    margin-top: 8px;
  }
`;

const DeleteItemIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 15px;
  cursor: pointer;
  
  img {
    width: 15px;
    height: 15px;
    object-fit: cover;
  }

  @media (max-width: 319px) {
    margin: 0;
    
    img {
      width: 25px;
      height: 25px;
      object-fit: cover;
    }
  }
`;

const CartItemInfo = styled.p`
  text-align:center;
  font-size: 14px;
  color: #777777ec;
  width: 100%;
  font-weight: bold;
`
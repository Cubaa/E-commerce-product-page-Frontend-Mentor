import React from "react";
import styled from "styled-components";

export const CartItem = () => {
  return (
    <CartItemWrapper>
      <ItemDataWrapper>
        <ItemImage>
          <img
            src="/images/image-product-1-thumbnail.jpg"
            alt="image-product"
          />
        </ItemImage>
        <ItemDataInfoWrapper>
          <ItemNameWrapper>
            <p>Fall limited Edition Sneakers</p>
          </ItemNameWrapper>
          <ItemDataSummaryWrapper>
            <span>{"$" + 125.0 + " x" + " " + 3}</span>
            <span>{"$" + 375.0}</span>
          </ItemDataSummaryWrapper>
        </ItemDataInfoWrapper>
        <DeleteItemIcon>
          <img src="/images/icon-delete.svg" alt="icon-delete" />
        </DeleteItemIcon>
      </ItemDataWrapper>
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

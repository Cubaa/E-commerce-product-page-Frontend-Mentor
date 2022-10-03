import React, { FC, useState } from "react";
import styled from "styled-components";
import { products } from "../../data/products";
import { addProductToCart } from "../../features/shoppingCart/shoppingCartSlice";
import { useAppDispatch } from "../../store/hook";
import { IProduct } from "../../interfaces/product.interface";
import { PageButton } from "../page-button/page-button";

export const ProductSectionInfo: FC = () => {
const dispatch = useAppDispatch();
const [quantity, setQuantity] = useState<number>(0);

const addItemToCart = (id: number): void => {
  dispatch(addProductToCart({id, quantity}))
  setQuantity(0);
};

const incrementCounter = (): void => {
  setQuantity(quantity => quantity + 1)
};

const decrementCounter = (): void => {
  if (quantity <= 0) return;
  setQuantity(quantity => quantity - 1)
};

  return (
    <ProductSectionInfoContainer>
      <div>
        {products.map((product: IProduct, index: number) => {
          return (
            <React.Fragment key={index}>
              <CompanyName>
                <p>{product.company}</p>
              </CompanyName>
              <ProductName>
                <p>{product.name}</p>
              </ProductName>
              <ProductDescription>
                <p>
                  {product.description}
                </p>
              </ProductDescription>
              <ProductPrice>
                <PriceAndDiscountWrapper>
                  <Price>
                    <p>${product.price.toFixed(2)}</p>
                  </Price>
                  <DiscountWrapper>
                    <span>{product.discount}%</span>
                  </DiscountWrapper>
                </PriceAndDiscountWrapper>
                <PriceBeforeDiscount>
                  <s>${product.priceBeforeDiscount.toFixed(2)}</s>
                </PriceBeforeDiscount>
              </ProductPrice>
              <AmountAndButtonWrapper>
                <AmountWrapper>
                  <div onClick = {decrementCounter}>
                    <img src="/images/icon-minus.svg" alt="icon-minus" />
                  </div>
                  <div>
                    <span>{quantity}</span>
                  </div>
                  <div onClick={incrementCounter}>
                    <img src="/images/icon-plus.svg" alt="icon-plus" />
                  </div>
                </AmountWrapper>
                <ProductButton>
                  <PageButton
                    buttonName="Add to cart"
                    buttonSize="big"
                    buttonBgColor="#fc7f1a"
                    buttonType="button"
                    ButtonTxtColor="#fff"
                    buttonPadding="1.2rem 2rem"
                    buttonFontSize="16px"
                    action = {() => addItemToCart(product.id)}
                    quantity={quantity}
                  />
                </ProductButton>
              </AmountAndButtonWrapper>
            </React.Fragment>
          )
        })}
      </div>
    </ProductSectionInfoContainer>
  );
};

const ProductSectionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 1rem 3rem 1rem 1rem;

  @media (max-width: 850px) {
    padding: 1rem;
    margin-top: 20px;
}
`;

const CompanyName = styled.div`
  color: hsl(26, 100%, 55%);
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 0;
  letter-spacing: 2px;
  font-size: min(max(16px, 3vw), 0.7rem);
  text-transform: uppercase;
  
  @media (max-width: 850px) {
    p {
      font-weight: 700;
      font-size: 12px;
    }
  }
`;

const ProductName = styled.div`
  margin: 10px 0px 20px 0;

  p {
    font-weight: 700;
    font-size: 2.7vw;
  }

  @media (min-width: 1439px) {
    p {
      font-weight: 700;
      font-size: 40px;
    }
  }

  @media (max-width: 850px) {
    p {
      font-weight: 700;
      font-size: 30px;
    }
  }
`;

const ProductDescription = styled.div`
  margin-bottom: 30px;

  p {
    color: hsl(219, 9%, 45%);
    font-size: 1.2vw;
  }

  @media (min-width: 1439px) {
    p {
      font-size: 17px;
    }
  }

  @media (max-width: 850px) {
    p {
      font-size: 15px;
    }
  }
`;
const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 80%;

  @media (max-width: 850px) {
    flex-direction: row;
    justify-content: left;
  }

  @media (max-width: 350px) {
   width: 100%;
   justify-content: space-between;
  }
`;

const PriceAndDiscountWrapper = styled.div`
  display: flex;
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  p {
    font-size: 2.3vw;
    font-weight: bold;
  }

  @media (min-width: 1439px) {
    p {
      font-size: 30px;
    }
  }

  @media (max-width: 850px) {
    p {
      font-size: 30px;
    }
  }
`;

const DiscountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  span {
    background-color: hsl(25, 100%, 94%);
    padding: 5px 10px;
    color: hsl(26, 100%, 55%);
    border-radius: 5px;
    font-weight: bold;
    font-size: 1.4vw;
  }

  @media (min-width: 1439px) {
    span {
      font-size: 18px;
    }
  }

  @media (max-width: 850px) {
    span {
      font-size: 20px;
    }
  }
`;

const PriceBeforeDiscount = styled.div`
  margin-top: 10px;

  s {
    color: hsl(220, 14%, 75%);
    font-weight: bold;
    font-size: 1.1vw;
  }

  @media (min-width: 1439px) {
    s {
      font-size: 16px;
    }
  }

  @media (max-width: 850px) {
    s {
      font-size: 17px;
      margin-left: 10px;
    }
  }
`;

const AmountAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 990px) {
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }

  @media (max-width: 850px) {
    flex-direction: row;
    width: 100%;
    align-items: center;
  }

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

const ProductButton = styled.div`
  width: 40%;
  margin-left: 40px;

  @media (max-width: 990px) {
    width: 80%;
    margin-top: 20px;
    margin-left: 0px;
  }

  @media (max-width: 850px) {
    margin-top: 0px;
    margin-left: 40px;
  }

  @media (max-width: 380px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 10px;
  }
`;

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #eeeff5;
  border-radius: 4px;
  width: 10vw;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      cursor: pointer;
    }

    span {
      font-weight: bold;
      font-size: 1.3vw;
    }
  }

  @media (max-width: 1220px) {
    width: 12vw;
  }

  @media (min-width: 1439px) {
    div {
      span {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 850px) {
    width: 60%;
    div {
      span {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`;

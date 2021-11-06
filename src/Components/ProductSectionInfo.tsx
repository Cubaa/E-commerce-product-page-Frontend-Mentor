import React from "react";
import styled from "styled-components";
import { PageButton } from "./PageButton";

export const ProductSectionInfo = () => {
  return (
    <ProductSectionInfoContainer>
      <ProductInfo>
        <CompanyName>
          <p>sneaker company</p>
        </CompanyName>
        <ProductName>
          <p>Fall Limited Edition Sneakers</p>
        </ProductName>
        <ProductDescription>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withsand everything
            the weather can offer.
          </p>
        </ProductDescription>
        <ProductPrice>
          <PriceAndDiscountWrapper>
            <Price>
              <p>$125.00</p>
            </Price>
            <DiscountWrapper>
              <span>50%</span>
            </DiscountWrapper>
          </PriceAndDiscountWrapper>
          <PriceBeforeDiscount>
            <s>$250.00</s>
          </PriceBeforeDiscount>
        </ProductPrice>
        <AmountAndButtonWrapper>
          <AmountWrapper>
            <div>
              <img src="/images/icon-minus.svg" alt="icon-minus" />
            </div>
            <div>
              <span>0</span>
            </div>
            <div>
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
            />
          </ProductButton>
        </AmountAndButtonWrapper>
      </ProductInfo>
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

const ProductInfo = styled.div``;
const CompanyName = styled.div`
  color: hsl(26, 100%, 55%);
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 0;
  letter-spacing: 2px;
  /* font-size: 14px; */
  /* font-size: min(0.8vw, 100px); */
  font-size: min(max(16px, 3vw), 0.7rem);
  @media (max-width: 850px) {
    p {
      /* font-size: 3rem; */
      /* font-size: min(3vw, 100px); */
      /* font-size: min(max(16px, 3vw), 2.5rem); /////DZIALA */

      font-weight: 700;
      font-size: 12px;
    }
  }
`;
const ProductName = styled.div`
  margin: 10px 0px 20px 0;
  p {
    /* font-size: 3rem; */
    /* font-size: min(3vw, 100px); */
    /* font-size: min(max(16px, 3vw), 2.5rem); /////DZIALA */

    font-weight: 700;
    font-size: 2.7vw;
  }
  @media (min-width: 1439px) {
    p {
      /* font-size: 3rem; */
      /* font-size: min(3vw, 100px); */
      /* font-size: min(max(16px, 3vw), 2.5rem); /////DZIALA */

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
    /* font-size: min(1vw, 200px); */
    /* font-size: min(max(8px, 2vw), 1rem); */
    font-size: 1.2vw;
  }
  @media (min-width: 1439px) {
    p {
      /* font-size: 3rem; */
      /* font-size: min(3vw, 100px); */
      /* font-size: min(max(16px, 3vw), 2.5rem); /////DZIALA */
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
    /* font-size: 2rem; */
    /* font-size: min(1.8vw + 10%, 100px); */
    /* font-size: min(max(16px, 2.3vw), 1.8rem); */
    font-size: 2.3vw;
    font-weight: bold;
  }
  @media (min-width: 1439px) {
    p {
      /* font-size: 3rem; */
      /* font-size: min(3vw, 100px); */
      /* font-size: min(max(16px, 3vw), 2.5rem); /////DZIALA */
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
    /* font-size: min(1.5vw, 100px); */
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
    /* width: 50px; */

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

{
  /* <AmountAndButtonWrapper>
          <AmountAndButton>
            <AmountWrapper>
              <div>
                <div>
                  <img src="/images/icon-minus.svg" alt="icon-minus" />
                </div>
                <div>
                  <span>0</span>
                </div>
                <div>
                  <img src="/images/icon-plus.svg" alt="icon-plus" />
                </div>
              </div>
            </AmountWrapper>
            <AddButtonWrapper>
              <PageButton
                buttonName="Add to cart"
                buttonSize="big"
                buttonBgColor="#fc7f1a"
                buttonType="button"
                ButtonTxtColor="#fff"
              />
            </AddButtonWrapper>
          </AmountAndButton>
        </AmountAndButtonWrapper> */
}

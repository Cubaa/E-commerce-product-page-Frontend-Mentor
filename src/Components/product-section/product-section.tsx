import React, { FC } from "react";
import styled from "styled-components";
import { ProductSectionGallery } from "./product-section-gallery";
import { ProductSectionInfo } from "./product-section-info";

export const ProductSection: FC = () => {
  return (
    <ProductSectionContainer>
      <ProductSectionGallery />
      <ProductSectionInfo />
    </ProductSectionContainer>
  );
};

const ProductSectionContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: hsl(223, 64%, 98%);

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

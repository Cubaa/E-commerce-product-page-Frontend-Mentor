import React, { FC } from "react";
import styled from "styled-components";
import { useResize } from "../../hooks/use-resize";
import { ProductGallery } from "../product-gallery/product-gallery";
import { ProductGallerySlider } from "../product-gallery/product-gallery-slider";

export const ProductSectionGallery: FC = () => {
  const windowWidth = useResize();

  return (
    <ProductSectionGalleryContainer>
      {windowWidth > 850 ? <ProductGallery /> : <ProductGallerySlider />}
    </ProductSectionGalleryContainer>
  );
};

const ProductSectionGalleryContainer = styled.div`
  width: 100%;
  height: auto;
  
  @media (min-width: 850px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
  }
`;

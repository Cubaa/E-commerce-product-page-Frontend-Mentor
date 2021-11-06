import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductPageGalleryImages } from "../photos";
import { ProductGallery } from "./ProductGallery";
import { ProductGallerySlider } from "./ProductGallerySlider";

export const ProductSectionGallery = () => {
  const [pageWidth, setPageWidth] = useState<number>(window.innerWidth);
  console.log(pageWidth);
  useEffect(() => {
    function handleResize() {
      setPageWidth(window.innerWidth);
      console.log(pageWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  return (
    <ProductSectionGalleryContainer>
      {pageWidth > 850 ? <ProductGallery /> : <ProductGallerySlider />}
    </ProductSectionGalleryContainer>
  );
};

const ProductSectionGalleryContainer = styled.div`
  /* display: flex;
  height: 250px;
  width: 100%; */
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

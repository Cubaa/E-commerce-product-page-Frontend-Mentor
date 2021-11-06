import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductPageGalleryImages } from "../photos";
import { IProductPageGalleryImagesTypes } from "../Types/ProductPageGalleryImages";
import "./slider.css";
export const ProductGallerySlider = () => {
  console.log("SLider");

  const settings = {
    dots: true,
    className: "slider",
    adaptiveHeight: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 849,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  console.log(ProductPageGalleryImages.length);
  return (
    <ProductGallerySliderContainer className="test-slider">
      <SliderWrapper>
        {ProductPageGalleryImages.length && (
          <Slider {...settings}>
            {ProductPageGalleryImages.map(
              (photo: IProductPageGalleryImagesTypes, index: number) => {
                return (
                  <>
                    <span style={{ opacity: 0 }}>.</span>
                    <div key={photo.id}>
                      <img
                        src={photo.src}
                        alt={"photo " + photo.id}
                        data-id={photo.id}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "contain",
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                  </>
                );
              }
            )}
          </Slider>
        )}
      </SliderWrapper>
    </ProductGallerySliderContainer>
  );
};

const ProductGallerySliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  border-radius: 4px;
`;
const SliderWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
`;

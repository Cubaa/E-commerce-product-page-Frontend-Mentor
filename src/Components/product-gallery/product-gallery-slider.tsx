import React, { FC } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { productPageGalleryImages } from "../../photos";
import { IGalleryImage } from "../../interfaces/gallery-image.interface";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export const ProductGallerySlider: FC = () => {
  const settings = {
    dots: true,
    className: "slider",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 850,
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

  return (
    <ProductGallerySliderContainer className="test-slider">
      <SliderWrapper>
        {productPageGalleryImages.length && (
          <Slider {...settings}>
            {productPageGalleryImages.map(
              (photo: IGalleryImage, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <span style={{ opacity: 0 }}>.</span>
                    <div key={photo.id}>
                      <SliderImage
                        src={photo.src}
                        alt={"photo " + photo.id}
                        data-id={photo.id}
                      />
                    </div>
                  </React.Fragment>
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

const SliderImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: 4px;
`;

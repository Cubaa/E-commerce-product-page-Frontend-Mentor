import React, { FC, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { productPageGalleryImages } from "../../photos";
import { IGalleryImage } from "../../interfaces/gallery-image.interface";

export const ProductGallery: FC = () => {
  const [imageId, setImageId] = useState<number>(0);
  const imageElement = useRef<HTMLImageElement | null>(null);
  const productPhotoPreview = useRef<HTMLDivElement | null>(null);
  const productPhotosThumbnails = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();

    tl2.from(productPhotoPreview.current, {
      autoAlpha: 0,
      duration: 1.5,
    });

    tl3.from(productPhotosThumbnails.current, { autoAlpha: 0, stagger: 0.2 });

    return () => {
      tl2.kill();
    };
  }, []);

  const imageClickHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    const element = e.target as HTMLImageElement
    setImageId(Number(element.dataset.id) - 1);

    const tl = gsap.timeline();
    tl.fromTo(
      imageElement.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  };

  return (
    <ProductGalleryContainer>
      <ProductPhotoPreview ref={productPhotoPreview}>
        <img
          ref={imageElement}
          src={productPageGalleryImages[imageId].src}
          alt="preview"
        />
      </ProductPhotoPreview>
      <ProductPhotosPreview>
        {productPageGalleryImages.map(
          (photo: IGalleryImage, index: number) => {
            return (
              <div
                key={photo.id}
                ref={(e) => (productPhotosThumbnails.current[index] = e)}
              >
                <img
                  onClick={imageClickHandler}
                  src={photo.src}
                  alt={"photo " + photo.id}
                  data-id={photo.id}
                />
              </div>
            );
          }
        )}
      </ProductPhotosPreview>
    </ProductGalleryContainer>
  );
};

const ProductGalleryContainer = styled.div`
  padding: 5rem 1rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  width: 500px;
  min-width: 70%;
  max-width: 90%;

  &.gallery--appear {
    opacity: 0;
  }

  &.gallery--appear-active {
    opacity: 1;
    transition: opacity 0.5s linear;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

const ProductPhotoPreview = styled.div`
  display: flex;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const ProductPhotosPreview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  div {
    max-width: 20%;
    display: flex;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

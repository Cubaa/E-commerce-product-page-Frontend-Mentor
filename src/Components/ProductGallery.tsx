import React, { FC, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ProductPageGalleryImages } from "../photos";
import { IProductPageGalleryImagesTypes } from "../Types/ProductPageGalleryImages";
import gsap from "gsap";
import { CSSTransition } from "react-transition-group";

export const ProductGallery: FC = () => {
  console.log("galeria");

  const [imageId, setImageId] = useState<number>(0);

  const [isChoosenImage, setIsChoosenImage] = useState<boolean>(true);

  const imageElement = useRef(null);
  const productPhotoPreview = useRef(null);
  const productPhotosThumbnails = useRef<any[]>([]);

  useEffect(() => {
    // gsap.set([productPhotoPreview.current, productPhotosThumbnails.current], {
    //   autoAlpha: 1,
    // });
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();
    tl2.from(productPhotoPreview.current, {
      autoAlpha: 0,
      duration: 1.5,
    });
    tl3.from(productPhotosThumbnails.current, { autoAlpha: 0, stagger: 0.2 });

    console.log(productPhotosThumbnails);
    return () => {
      tl2.kill();
    };
  }, []);

  const galleryPhotoHandler = (e: any) => {
    console.log(e.target.dataset.id);
    setImageId(+e.target.dataset.id - 1);

    const tl = gsap.timeline();
    tl.fromTo(
      imageElement.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  };

  return (
    // <CSSTransition in={true} classNames="gallery-" timeout={500} appear={true}>
    <ProductGalleryContainer>
      <ProductPhotoPreview ref={productPhotoPreview}>
        <img
          ref={imageElement}
          src={ProductPageGalleryImages[imageId].src}
          alt="preview-photo"
        />
      </ProductPhotoPreview>
      <ProductPhotosPreview>
        {ProductPageGalleryImages.map(
          (photo: IProductPageGalleryImagesTypes, index: number) => {
            return (
              <div
                key={photo.id}
                ref={(e) => (productPhotosThumbnails.current[index] = e)}
              >
                <img
                  onClick={galleryPhotoHandler}
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
    // </CSSTransition>
  );
};

const ProductGalleryContainer = styled.div`
  padding: 5rem 1rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  /* max-width: 80%;
  min-width: 70%; */
  /* width: 70%; */
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

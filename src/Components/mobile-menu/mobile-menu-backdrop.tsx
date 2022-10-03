import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setIsOpenMobileMenu } from '../../features/MobileMenu/mobileMenuSlice';

export const MobileMenuBackdrop: FC = () => {
  const mobileMenuBackdropRef = useRef<HTMLDivElement | null>(null);
  const isMobileMenuOpen = useAppSelector<boolean>(state => state.mobileMenuSlice.isOpenMobileMenu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuBackdropRef.current, { left: "0%" });
    }
    else {
      gsap.to(mobileMenuBackdropRef.current, { left: "-100%", delay: "1.22" });
    }
  }, [isMobileMenuOpen]);

   const mobileMenuHandler = (): void => {
    dispatch(setIsOpenMobileMenu());
   };

  return (
    <MobileMenuBackdropContainer ref={mobileMenuBackdropRef} onClick={mobileMenuHandler}>
    </MobileMenuBackdropContainer>
  );
};

const MobileMenuBackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;
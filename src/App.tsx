import React, { FC, useEffect } from "react";
import { MobileMenu } from "./Components/mobile-menu/mobile-menu";
import { Navbar } from "./Components/navbar/navbar";
import { ProductSection } from "./Components/product-section/product-section";
import { resetMobileMenu } from "./features/MobileMenu/mobileMenuSlice";
import { useAppDispatch } from "./store/hook";
import { useResize } from "./hooks/use-resize";

export const App: FC = () => {
  const windowWidth = useResize();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (windowWidth > 850) {
      dispatch(resetMobileMenu(false));
    }
  }, [windowWidth, dispatch]);

  return (
    <>
      <Navbar />
      <MobileMenu />
      <ProductSection />
    </>
  );
};

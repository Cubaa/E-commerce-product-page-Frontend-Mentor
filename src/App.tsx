import React, { useEffect, useState } from "react";
import { MobileMenu } from "./Components/MobileMenu";
import { Navbar } from "./Components/Navbar";
import { ProductSection } from "./Components/ProductSection";
import { resetMobileMenu } from "./features/MobileMenu/mobileMenuSlice";
import { useAppDispatch } from "./hook";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
   const dispatch = useAppDispatch()

 useEffect(() => {
   function reseizeHandler(){
     setWindowWidth(window.innerWidth)
    console.log(windowWidth)
    if(windowWidth>850){
      dispatch(resetMobileMenu(false))
    }
   }

   window.addEventListener('resize', reseizeHandler)
   return () => {
     window.removeEventListener('resize', reseizeHandler)
   }
 }, [window.innerWidth])

  return (
    <>
      <Navbar />
      <ProductSection />
      <MobileMenu />
    </>
  );
}

export default App;

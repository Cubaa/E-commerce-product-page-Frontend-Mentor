import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../hook'
import gsap from 'gsap'
import { setIsOpenMobileMenu } from '../features/MobileMenu/mobileMenuSlice'

export const MobileMenuBackdrop = () => {
    const mobileMenuBackdropRef = useRef(null)
   const isMobileMenuOpen = useAppSelector<boolean>(state => state.isOpenMobileMenu.isOpenMobileMenu)
const dispatch = useAppDispatch()

   useEffect(() => {
       if(isMobileMenuOpen){
           gsap.to(mobileMenuBackdropRef.current, {left: "0%"})
       }
       else{
        gsap.to(mobileMenuBackdropRef.current, {left: "-100%", delay: "1.22"})
       }
   }, [isMobileMenuOpen])

   const mobileMenuHandler = () =>{
       dispatch(setIsOpenMobileMenu())
   }
    return (
        <MobileMenuBackdropContainer ref={mobileMenuBackdropRef} onClick={mobileMenuHandler}> 
        </MobileMenuBackdropContainer>
    )
}

const MobileMenuBackdropContainer = styled.div`
position: fixed;
top:0;
left:-100%;
width: 100%;
height: 100vh;
background-color: rgba(0, 0, 0, 0.7);
z-index: 9999;
`
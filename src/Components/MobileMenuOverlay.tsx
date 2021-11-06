import React, { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../hook'
import gsap from 'gsap'
import { setIsOpenMobileMenu } from '../features/MobileMenu/mobileMenuSlice'
import { navbarMenuData } from '../pageData/navbarMenuData'
import { INavbarMenuDataTypes } from '../Types/navbarMenuDataTypes'

export const MobileMenuOverlay:FC = () => {
    const mobileMenuRef = useRef(null)
    const menuOptionsRef = useRef<any[]>([])
   const isMobileMenuOpen = useAppSelector<boolean>(state => state.isOpenMobileMenu.isOpenMobileMenu)
   
   useEffect(() => {
       if(isMobileMenuOpen){
           gsap.to(mobileMenuRef.current, {left: "0%", delay: "0.3"})
           gsap.fromTo(menuOptionsRef.current, {autoAlpha: 0, x: -40}, {autoAlpha: 1, stagger: .2, x: 0, delay: "0.6"})
       }
       else{
        gsap.to(mobileMenuRef.current, {left: "-80%", delay: "1"})
        gsap.fromTo(menuOptionsRef.current, {autoAlpha: 1, x: 0}, {autoAlpha: 0, stagger: .2, x: -40})
       }
   }, [isMobileMenuOpen])

   const dispatch = useAppDispatch()
  const mobileMenuHandler = () =>{
    dispatch(setIsOpenMobileMenu())
   }
    return (
        <MobileMenuContainer ref={mobileMenuRef}>
            <MobileMenuIconClose onClick={mobileMenuHandler}>
                <img src="/images/icon-close.svg" alt="icon-close" />
            </MobileMenuIconClose>
            <MobileMenuContent>
            <MobileMenuList>
            {navbarMenuData.map((link: INavbarMenuDataTypes, index: number) => {
              return (
                <MobileMenuItem key={link.id} ref={(e) => (menuOptionsRef.current[index] = e)}>
                  <MobileMenuLink href="#">{link.linkName}</MobileMenuLink>
                </MobileMenuItem>
              );
            })}
          </MobileMenuList>
            </MobileMenuContent>
        </MobileMenuContainer>
    )
}


const MobileMenuContainer = styled.div`
position: fixed;
top:0;
left:-80%;
width: 80%;
height: 100vh;
background-color: #fff;
z-index: 9999;
display: flex;
justify-content: center;
align-items: center;
`

const MobileMenuContent = styled.div`

height: 60%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const MobileMenuList = styled.ul`

`
const MobileMenuItem = styled.li`
list-style: none;
padding: 20px;
`
const MobileMenuLink = styled.a`
text-decoration: none;
color: #000;
`

const MobileMenuIconClose = styled.div`
    position: absolute;
    top:2%;
    right:5%;
    height: 30px;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
    }
`
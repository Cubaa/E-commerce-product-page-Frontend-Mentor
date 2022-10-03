import React, { FC } from "react";
import styled from "styled-components";
import { setIsOpenMobileMenu } from "../../features/MobileMenu/mobileMenuSlice";
import { setIsOpenShoppingCart } from "../../features/shoppingCart/shoppingCartSlice";
import { useAppDispatch } from "../../store/hook";
import { navbarMenuLinks } from "../../data/navbarMenuData";
import { INavbarLink } from "../../interfaces/navbar-link.interface";
import { ShoppingCartModal } from "../shopping-cart/shopping-cart-modal";

export const Navbar: FC = () => {
  const dispatch = useAppDispatch();

  const shoppingCartHandler = (): void => {
    dispatch(setIsOpenShoppingCart());
  };

  const mobileMenuHandler = (): void => {
    dispatch(setIsOpenMobileMenu());
  };

  return (
    <NavbarContainer>
      <MenuLogoWrapper>
        <NavbarLogo>
          <img src="/images/logo.svg" alt="logo" />
        </NavbarLogo>
        <HamburgerMenu>
          <img src="/images/icon-menu.svg" alt="hamburger-menu" onClick={mobileMenuHandler} />
        </HamburgerMenu>
        <NavbarMenu>
          <ul>
            {navbarMenuLinks.map((link: INavbarLink) => {
              return (
                <li key={link.id}>
                  <a href="/#">{link.linkName}</a>
                </li>
              );
            })}
          </ul>
        </NavbarMenu>
      </MenuLogoWrapper>
      <NavbarProfile>
        <div>
          <NavbarProfileShoppingCart>
            <img
              onClick={shoppingCartHandler}
              src="/images/icon-cart.svg"
              alt="icon-cart"
            />
          </NavbarProfileShoppingCart>
          <NavbarProfileImage>
            <img src="/images/image-avatar.png" alt="avatar" />
          </NavbarProfileImage>
        </div>
      </NavbarProfile>
      <ShoppingCartModal />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  padding: 0 80px;
  display: flex;
  position: relative;
  align-items: center;
  height: 130px;
  background-color: #fff;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);

  @media (max-width: 850px) {
    padding: 0 20px;
  }

  @media (max-width: 320px) {
    padding: 0 10px;
  }
`;

const MenuLogoWrapper = styled.div`
  display: flex;
  flex: 3;
  height: 100%;

  @media (max-width: 850px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`;

const NavbarMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100%;
  
  ul {
    display: flex;
    flex: 0.6;
    height: 100%;
    justify-content: flex-start;

    li {
      position: relative;
      display: flex;
      width: 70px;
      justify-content: center;
      align-items: center;
      list-style: none;
      margin: 0 5px;

      &::before {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        content: "";
        width: 100%;
        height: 4px;
        background-color: #fc7f1a;
        opacity: 0;
        transition: all 0.2s linear;
      }

      &:hover::before {
        opacity: 1;
      }

      a {
        text-decoration: none;
        color: hsl(219, 9%, 45%);
        font-size: 14px;
      }
    }
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  justify-content: center;
  align-items: center;
  display: none;
  flex: 0.1;
  margin-right: 20px;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 850px) {
    display: flex;
  }
`;

const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  img {
    object-fit: cover;
  }
`;

const NavbarProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

const NavbarProfileShoppingCart = styled.div`
  cursor: pointer;
  
  img {
    width: 18px;
    height: 18px;
    object-fit: cover;
  }

  @media (max-width: 850px) {
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

const NavbarProfileImage = styled.div`
  cursor: pointer;
  margin-left: 20px;
  border-radius: 50%;
  transition: all 0.1s linear;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid red;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  @media (max-width: 320px) {
    margin-left: 8px;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }
`;

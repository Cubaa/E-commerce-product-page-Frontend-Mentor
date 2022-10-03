import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { MobileMenuBackdrop } from './mobile-menu-backdrop';
import { MobileMenuOverlay } from './mobile-menu-overlay';

export const MobileMenu: FC = () => {
  return (
    <>
      {ReactDOM.createPortal(<MobileMenuBackdrop />, document.getElementById('mobile-menu-backdrop-root') as HTMLDivElement)}
      {ReactDOM.createPortal(<MobileMenuOverlay />, document.getElementById('mobile-menu-overlay-root') as HTMLDivElement)}
    </>
  );
};

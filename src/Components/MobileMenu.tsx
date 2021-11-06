import React from 'react'
import ReactDOM from 'react-dom'
import { MobileMenuBackdrop } from './MobileMenuBackdrop'
import { MobileMenuOverlay } from './MobileMenuOverlay'

export const MobileMenu = () => {
    return (
        <>
            {ReactDOM.createPortal(<MobileMenuBackdrop />, document.getElementById('mobile-menu-backdrop-root') as HTMLDivElement)}
            {ReactDOM.createPortal(<MobileMenuOverlay />, document.getElementById('mobile-menu-overlay-root') as HTMLDivElement)}
        </>
    )
}

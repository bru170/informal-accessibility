import React, {useState} from "react"
import {SkipNavLink, SkipNavContent} from "@reach/skip-nav"
import FooterContainer from "../Footer/FooterContainer"
import Hamburger from "../Navigation/Hamburger/Hamburger"
import Header from "../Header/Header"
import MobileMenu from "../Navigation/MobileMenu/MobileMenu"
import {Primary, GlobalStyles} from "./Layout.styles"
import "@reach/skip-nav/styles.css"

const Layout = ({children}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => setMenuOpen((prev) => !prev)

  return (
    <>
      <GlobalStyles />
      <SkipNavLink />
      <Hamburger handleOverlayMenu={handleOverlayMenu} menuOpen={menuOpen} />
      <MobileMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <SkipNavContent />
      <Primary>{children}</Primary>
      <FooterContainer />
    </>
  )
}

export default Layout

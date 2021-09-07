import React, {useState} from "react"
import FooterContainer from "../Footer/FooterContainer"
import Hamburger from "../Hamburger/Hamburger"
import Header from "../Header/Header"
import MobileMenu from "../OverlayMenu/MobileMenu"
import {Primary, GlobalStyles} from "./Layout.styles"

const Layout = ({children}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => setMenuOpen((prev) => !prev)

  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <MobileMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <Primary>{children}</Primary>
      <FooterContainer />
    </>
  )
}

export default Layout

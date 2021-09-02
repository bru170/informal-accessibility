import React, {useState} from "react"
import Hamburger from "../Hamburger/Hamburger"
import Header from "../Header/Header"
import {Primary, GlobalStyles} from "./Layout.styles"

const Layout = ({children}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => setMenuOpen((prev) => !prev)

  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <Header />
      <Primary>{children}</Primary>
    </>
  )
}

export default Layout

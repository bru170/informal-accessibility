import React from "react"
import {HamburgerButton} from "./Hamburger.styles"
const Hamburger = ({handleOverlayMenu}) => {
  return (
    <HamburgerButton>
      <button onClick={handleOverlayMenu}>Menu</button>
    </HamburgerButton>
  )
}

export default Hamburger

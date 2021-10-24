import React from "react"
import {MenuOpenIcon, MenuCloseIcon} from "./Hamburger.styles"

const Hamburger = ({handleOverlayMenu, menuOpen}) => {
  return <>{MenuOpenIcon && <MenuOpenIcon aria-label="open" onClick={handleOverlayMenu} />}</>
}

export default Hamburger

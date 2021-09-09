import React from "react"
import {MenuOpenIcon, MenuCloseIcon} from "./Hamburger.styles"

const Hamburger = ({handleOverlayMenu, menuOpen}) => {
  return <>{MenuOpenIcon && <MenuOpenIcon onClick={handleOverlayMenu} />}</>
}

export default Hamburger

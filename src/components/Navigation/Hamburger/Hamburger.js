import React from "react"
import {MenuOpenIcon} from "./Hamburger.styles"

const Hamburger = ({handleOverlayMenu}) => {
  return (
    <>
      {MenuOpenIcon && (
        <MenuOpenIcon aria-label="opens navbar menu for mobile" onClick={handleOverlayMenu} />
      )}
    </>
  )
}

export default Hamburger

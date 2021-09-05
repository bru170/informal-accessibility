import React from "react"
import {Link} from "gatsby"
import CloseButton from "../../images/close_btn.svg"
import {useMenuQuery} from "../../hooks/useMenuQuery"
import {Overlay} from "./MobileMenu.styles"

const MobileMenu = ({menuOpen, callback}) => {
  const {menu} = useMenuQuery()

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <ul className="overlayMenu">
          {menu.menuItems.nodes.map((item) =>
            !item.parentId ? (
              <li key={item.id}>
                <Link to={item.url} activeClassName="overlayActive">
                  {item.label}
                </Link>
              </li>
            ) : null
          )}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          s
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </Overlay>
  )
}

export default MobileMenu

import React from "react"
import {Link} from "gatsby"
import {useMenuQuery} from "../../../hooks/useMenuQuery"
import {MobileMenuOverlay, TextPadding} from "./MobileMenu.styles"

const MobileMenu = ({menuOpen}) => {
  const {menu} = useMenuQuery()

  return (
    <>
      {menuOpen && (
        <MobileMenuOverlay>
          <TextPadding>
            {menu.menuItems.nodes.map((item) =>
              !item.parentId ? (
                <li key={item.id}>
                  <Link to={item.url} activeClassName="mobile-menu-active">
                    {item.label}
                  </Link>
                </li>
              ) : null
            )}
          </TextPadding>
        </MobileMenuOverlay>
      )}
    </>
  )
}

export default MobileMenu

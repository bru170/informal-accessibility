import React from "react"
import {Link} from "gatsby"
import Navigation from "../Navigation/Navigation"
import {useMenuQuery} from "../../hooks/useMenuQuery"
import {Wrapper, Content} from "./Header.styles"

const Header = () => {
  const {menu, site} = useMenuQuery()

  return (
    <Wrapper>
      <Content>
        <Link to="/">{site.siteMetadata.title}</Link>
        <Navigation menu={menu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}

export default Header

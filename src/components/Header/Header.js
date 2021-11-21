import React from "react"
import {Link} from "gatsby"
import Navigation from "../Navigation/Navigation"
import Logo from "../../images/sos-logo.svg"
import {useMenuQuery} from "../../hooks/useMenuQuery"
import {Wrapper, Content, Image, LogoContainer} from "./Header.styles"

const Header = () => {
  const {menu, site} = useMenuQuery()

  return (
    <Wrapper>
      <Content>
        <LogoContainer>
          <Link to="/" aria-label="Goes to Homepage">
            {/* {site.siteMetadata.title}.. */}
            <Image src={Logo} alt="SOS Logo" />
          </Link>
        </LogoContainer>
        <Navigation menu={menu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}

export default Header

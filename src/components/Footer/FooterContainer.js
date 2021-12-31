import React from "react"
import Sponsors from "../Sponsors/Sponsors"
import {Container, Para, StyledH3, Wrapper, SiteMap} from "./Footer.styles"

const FooterContainer = () => {
  return (
    <Wrapper>
      <Container>
        <StyledH3>Site Map</StyledH3>
        <SiteMap>
          <li>
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="/category/all-posts/">Engagements</a>
          </li>
          <li>
            <a href="/people/">People</a>
          </li>
          <li>
            <a href="/contact/">Contact</a>
          </li>
          <li>
            <a href="/privacy-policy/">Cookie Policy</a>
          </li>
        </SiteMap>
        <StyledH3>Design and Development</StyledH3>
        <span>
          <Para>Barbara Nino and Antonia Bruno</Para>
          <Para>&#169; 2021</Para>
        </span>

        <Sponsors />
      </Container>
    </Wrapper>
  )
}

export default FooterContainer

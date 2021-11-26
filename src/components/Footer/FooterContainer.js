import React from "react"
import Sponsors from "../Sponsors/Sponsors"
import {Container, Para, Wrapper, SponsorContainer, SiteMap} from "./Footer.styles"

const FooterContainer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <h4>Site Map</h4>
          <SiteMap>
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/engagements/all-posts/">Engagements</a>
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
        </Wrapper>
        <Wrapper>
          <h4>Design and Development</h4>
          <span>
            <Para>Barbara Nino and Antonia Bruno</Para>
            <Para>&#169; 2021</Para>
          </span>
        </Wrapper>
        <SponsorContainer>
          <Wrapper>
            <h4>Sponsors</h4>
            <Sponsors />
          </Wrapper>
        </SponsorContainer>
      </Container>
    </>
  )
}

export default FooterContainer

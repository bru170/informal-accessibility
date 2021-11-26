import React from "react"
import Sponsors from "../Sponsors/Sponsors"
import {Container, Para, Wrapper, SponsorContainer} from "./Footer.styles"

const FooterContainer = () => {
  return (
    <>
      <Container>
        <SponsorContainer>
          <Wrapper>
            <h4>Sponsors</h4>
            <Sponsors />
          </Wrapper>
        </SponsorContainer>
        <Wrapper>
          <h4>Design and Development</h4>
          <span>
            <Para>Barbara Nino and Antonia Bruno</Para>
            <Para>&#169; 2021</Para>
          </span>
        </Wrapper>
      </Container>
    </>
  )
}

export default FooterContainer

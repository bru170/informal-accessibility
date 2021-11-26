import React from "react"
import {Image, Container, ImageITU, Wrapper} from "./Sponsors.styles"
import CDW from "../../images/footerLogos/cfdw.png"
import ITU from "../../images/footerLogos/itu.png"
import AGDER from "../../images/footerLogos/agder.png"
import GOTHENBURG from "../../images/footerLogos/gothenburg.png"

const Sponsors = () => {
  return (
    <Container>
      <Wrapper>
        <a
          aria-label="opens webpage for our partner center for digital welfare"
          href="https://cdw.itu.dk/ "
        >
          <Image src={CDW} alt="Logo for one of our sponsors CDW" />
        </a>
        <a
          aria-label="opens webpage for our partner center for gothenburg university"
          href="https://www.gu.se/en"
        >
          <Image src={GOTHENBURG} alt="Logo for one of our sponsors University of Gothenburg" />
        </a>
        <a
          aria-label="opens webpage for our partner for university of agder"
          href="https://www.uia.no/en"
        >
          <Image src={AGDER} alt="Logo for one of our sponsors University of Agder" />
        </a>
        <a aria-label="opens webpage for our partner for ITU" href="https://itu.dk/">
          <ImageITU src={ITU} alt="Logo for one of our sponsors ITU" />
        </a>
      </Wrapper>
    </Container>
  )
}

export default Sponsors

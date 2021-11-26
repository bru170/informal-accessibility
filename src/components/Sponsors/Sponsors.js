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
        <Image src={CDW} alt="Logo for one of our sponsors CDW" />
        <ImageITU src={ITU} alt="Logo for one of our sponsors ITU" />
        <Image src={AGDER} alt="Logo for one of our sponsors University of Agder" />
        <Image src={GOTHENBURG} alt="Logo for one of our sponsors University of Gothenburg" />
      </Wrapper>
    </Container>
  )
}

export default Sponsors

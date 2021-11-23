import React from "react"
import {Image} from "./Sponsors.styles"
import CDW from "../../images/footerImg/CDW_Logo.png"
import ITU from "../../images/footerImg/ITU_logo_UK.png"
import AGDER from "../../images/footerImg/university_of_agder.png"
import GOTHENBURG from "../../images/footerImg/university_of_gothenburg.png"

const Sponsors = () => {
  return (
    <>
      <Image src={CDW} alt="Logo for one of our sponsors CDW" />
      <Image src={ITU} alt="Logo for one of our sponsors ITU" />
      <Image src={AGDER} alt="Logo for one of our sponsors University of Agder" />
      <Image src={GOTHENBURG} alt="Logo for one of our sponsors University of Gothenburg" />
    </>
  )
}

export default Sponsors

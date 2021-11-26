import React from "react"
import {Image} from "./partners.styles"
import Familie from "../../images/partnerLogos/famalie.png"
import Implement from "../../images/partnerLogos/implement.png"
import Lararforbundet from "../../images/partnerLogos/lararforbundet.png"

const Partners = () => {
  return (
    <>
      <Image src={Familie} alt="Logo for one of our partners Famalie" />
      <Image src={Implement} alt="Logo for one of our partners Implement" />
      <Image src={Lararforbundet} alt="Logo for one of our partners Lararforbundet" />
    </>
  )
}

export default Partners

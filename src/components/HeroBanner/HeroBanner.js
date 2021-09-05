import React from "react"
import {Wrapper} from "./HeroBanner.styles"

const HeroBanner = ({title}) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  )
}

export default HeroBanner

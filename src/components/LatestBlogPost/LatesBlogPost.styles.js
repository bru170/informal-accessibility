import styled from "styled-components"
import {GatsbyImage} from "gatsby-plugin-image"

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0;
  margin-bottom: 40px;
  text-align: left;
`
export const StyledImg = styled(GatsbyImage)`
  max-height: 300px;
  margin-bottom: 40px;
  width: 100%;
`
export const StyledH2 = styled.h2`
  font-size: 1.7rem;
  font-weight: normal;
  color: #bb3355;
  cursor: pointer;
`

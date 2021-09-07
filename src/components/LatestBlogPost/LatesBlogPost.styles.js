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

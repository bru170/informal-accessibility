import styled from "styled-components"
import {GatsbyImage} from "gatsby-plugin-image"
import {Link} from "gatsby"

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: left;
`

export const StyledImg = styled(GatsbyImage)`
  max-height: 300px;
  margin-bottom: 40px;
  width: 100%;
`

export const StyledDate = styled.p`
  font-size: 1rem;
`

export const StyledReadMore = styled(Link)`
  font-size: 1rem;
  margin-bottom: 40px;
  padding-botom: 40px

  :hover {
    color: #ee2562;
  }

  :hover:after {
    border-left-color: #ee2562;
  }
`

export const Hr = styled.div`
  border-top: 1px solid #bbb;
  margin-top: 40px;
  margin-bottom: 40px;
`

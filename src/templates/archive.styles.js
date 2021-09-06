import styled from "styled-components"
import {Link} from "gatsby"

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: left;
`

export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  :hover {
    color: #ee2562;
  }
`

export const StyledDate = styled.div`
  font-family: "Teko";
  font-size: 1.1rem;
  font-weight: 600;
`

export const StyledReadMore = styled(Link)`
  font-size: 1rem;
  margin-bottom: 40px;
  padding-botom: 40px

  :hover {
    background: #ee2562;
  }

  :hover:after {
    border-left-color: #ee2562;
  }
`

import styled from "styled-components"
import {BsFillPersonFill} from "react-icons/bs"

export const PostWrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: left;
`

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

export const PostContent = styled.article`
  margin-top: 20px;
`

export const PostDetails = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`

export const StyledH1 = styled.h1`
  padding-top: 40px;

  @media (max-width: 800px) {
    padding-top: 0px;
  }
`

export const PersonIcon = styled(BsFillPersonFill)`
  transform: scale(1.5);
  color: grey;
`

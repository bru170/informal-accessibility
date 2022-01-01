import * as React from "react"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"

export const Wrapper = styled.div`
  max-width: 1000px;
  max-height: auto;
  margin: auto;
  padding-top: 50px;

  h1 {
    color: black !important;
  }
`

const NotFoundPage = () => (
  <>
    <Wrapper>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist..mmmm. the sadness.</p>
    </Wrapper>
  </>
)

export default NotFoundPage

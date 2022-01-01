import * as React from "react"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"
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

export const Image404 = styled.StaticImage`
  width: 1000px !important;
  height: 800px !important;
`

const NotFoundPage = () => (
  <>
    <Layout>
      <Wrapper>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist..mmmm. the sadness.</p>
        <Image404
          src="../images/error404.jpg"
          alt="A women looking at her phone confused because it says 404"
          placeholder="blurred"
          layout="fixed"
        />
      </Wrapper>
    </Layout>
  </>
)

export default NotFoundPage

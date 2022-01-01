import * as React from "react"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"

export const Wrapper = styled.div`
  max-width: 1000px;
  max-height: auto;
  margin: auto;
  padding-bottom: 100px !important;
  padding-top: 50px;

  h1 {
    color: black !important;
  }

  @media (max-width: 1367px) {
    margin-bottom: 50px;
  }
`

const NotFoundPage = () => (
  <>
    <Layout>
      <Wrapper>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist..mmmm. the sadness.</p>

        <StaticImage
          src="../images/error404.jpg"
          alt="A women looking at her phone confused because it says 404"
          placeholder="blurred"
          layout="fixed"
          width={1000}
          height={700}
        />
      </Wrapper>
    </Layout>
  </>
)

export default NotFoundPage

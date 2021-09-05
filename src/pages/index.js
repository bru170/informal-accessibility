import * as React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"
import Hero from "../components/Hero/Hero"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import Layout from "../components/Layout/Layout"
import About from "../components/About/About"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  text-align: left;
`

const IndexPage = () => (
  <>
    <head>
      <title>Informal Accessibility</title>
      <meta name="Informal Accessibility" content="accessibility help" />
      <html lang="en" />
    </head>
    <Layout>
      <Wrapper>
        <About />
        <LatestBlogPost />
      </Wrapper>
    </Layout>
  </>
)

export default IndexPage

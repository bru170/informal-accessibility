import * as React from "react"
import {Helmet} from "react-helmet"
import styled from "styled-components"
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
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SOS Project</title>
        <meta name="SOS Project" content="accessibility help" />
        <html lang="en" />
      </Helmet>
    </div>
    <Layout>
      <Wrapper>
        <About />
        <LatestBlogPost />
      </Wrapper>
    </Layout>
  </>
)

export default IndexPage

import * as React from "react"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import Hero from "../components/Hero/Hero"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import Layout from "../components/Layout/Layout"
import About from "../components/About/About"

const IndexPage = () => (
  <>
    <head>
      <title>Informal Accessibility</title>
      <meta name="Informal Accessibility" content="accessibility help" />
      <html lang="en" />
    </head>
    <Layout>
      <About />
      <LatestBlogPost />
    </Layout>
  </>
)

export default IndexPage

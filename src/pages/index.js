import * as React from "react"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import Hero from "../components/Hero/Hero"

import Layout from "../components/Layout/Layout"

const IndexPage = () => (
  <>
    <head>
      <title>Informal Accessibility</title>
      <meta name="Informal Accessibility" content="accessibility help" />
      <html lang="en" />
    </head>
    <Layout>
      <Hero />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  </>
)

export default IndexPage

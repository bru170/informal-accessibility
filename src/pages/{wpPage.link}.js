import {graphql} from "gatsby"
import {Helmet} from "react-helmet"
import React from "react"
import styled from "styled-components"
import HeroBanner from "../components/HeroBanner/HeroBanner"
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: left;
`

const PageTemplate = ({data}) => {
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Informal Accessibility</title>
          <meta name="Informal Accessibility" content="accessibility help" />
          <html lang="en" />
        </Helmet>
      </div>
      <Layout>
        <Wrapper>
          <HeroBanner title={data.wpPage.title} />
          {data.wpPage.wpParent !== null && (
            <BreadCrumb parent={data.wpPage.wpParent && data.wpPage.wpParent.node} />
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: data.wpPage.content
            }}
          />
        </Wrapper>
      </Layout>
    </>
  )
}

export default PageTemplate

// Page query, can have variables, use ID what we get sent in autmatically when gatsby creates page
// Use ! means this value cannot be null
export const pageQuery = graphql`
  query ($id: String!) {
    wpPage(id: {eq: $id}) {
      id
      title
      content
      status
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            uri
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  title
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`

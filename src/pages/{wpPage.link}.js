import {graphql} from "gatsby"
import {Helmet} from "react-helmet"
import React from "react"
import HeroBanner from "../components/HeroBanner/HeroBanner"
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: left;
`

const Content = styled.div`
  padding-bottom: 100px;

  .wp-block-columns {
    width: 100%;
    min-height: 500px;
    max-height: 500px;

    @media (max-width: 1000px) {
      max-width: 640px;
      display: inline;
    }
  }

  .wp-block-image {
    float: left;
    margin-left: 0;
    display: block;
    width: 30%;
    @media (max-width: 1000px) {
      width: 100%;
      display: inline;
    }
  }

  h3 {
    padding-top: 20px;
    margin-bottom: 0px;
  }
`

const PageTemplate = ({data}) => {
  console.log(data.wpPage.content)
  return (
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
          <HeroBanner title={data.wpPage.title} />
          {data.wpPage.wpParent !== null && (
            <BreadCrumb parent={data.wpPage.wpParent && data.wpPage.wpParent.node} />
          )}
          <Content
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

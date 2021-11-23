import {graphql} from "gatsby"
import {Helmet} from "react-helmet"
import React from "react"
import HeroBanner from "../components/HeroBanner/HeroBanner"
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import styled from "styled-components"
import Partners from "../components/Partners/Partners"

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: left;
`

const Content = styled.div`
  padding-bottom: 100px;

  .is-style-twentytwentyone-border {
    margin-bottom: 180px;
    @media (max-width: 1000px) {
      margin-bottom: 0px !important;
    }
  }

  .leader {
    margin-bottom: 100px !important;
    @media (max-width: 1000px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-mona {
    margin-bottom: 250px !important;
    @media (max-width: 1000px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-irina {
    margin-bottom: 300px !important;
    @media (max-width: 1000px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-soren {
    margin-bottom: 350px !important;
    @media (max-width: 1000px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-thorben {
    margin-bottom: 150px !important;
    @media (max-width: 1000px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-image-mikela {
    margin-bottom: 250px !important;
    @media (max-width: 1000px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-thomas {
    margin-bottom: 150px !important;
    @media (max-width: 1000px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-annika {
    margin-bottom: 250px !important;
    @media (max-width: 1000px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-image {
    float: left;
    margin-left: 0;
    display: block;
    width: 35%;
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
          <h2>Partners</h2>
          <Partners />
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

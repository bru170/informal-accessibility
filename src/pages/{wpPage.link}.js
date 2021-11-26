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
  margin-bottom: 100px;
  text-align: left;
`

const Content = styled.div`
  padding-bottom: 100px;

  .is-style-twentytwentyone-border {
    margin-bottom: 180px;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .leader {
    margin-bottom: 100px !important;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-carl {
    margin-bottom: 120px !important;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-mona {
    margin-bottom: 250px !important;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-barbara {
    margin-bottom: 100px !important;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-kath {
    margin-bottom: 150px !important;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-irina {
    margin-bottom: 200px !important;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-soren {
    margin-bottom: 250px !important;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-thorben {
    margin-bottom: 150px !important;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-mikela {
    margin-bottom: 200px !important;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-michala {
    margin-bottom: 200px !important;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-thomas {
    margin-bottom: 200px !important;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-group-annika {
    margin-bottom: 230px !important;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }
  }

  .wp-block-image {
    float: left;
    margin-left: 0;
    display: block;
    width: 35%;
    @media (max-width: 1367px) {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  h3 {
    padding-top: 20px;
    margin-bottom: 0px;
  }

  @media (max-width: 1367px) {
    padding-bottom: 10px !important;
  }

  p {
    word-break: break-all;
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

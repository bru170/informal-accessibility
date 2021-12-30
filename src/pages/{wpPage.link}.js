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

  @media (max-width: 1367px) {
    margin-bottom: 550px;
  }

  @media (max-width: 1025px) {
    margin-bottom: 350px;
  }

  @media (max-width: 900px) {
    margin-bottom: 550px;
  }
`

const Content = styled.div`
  padding-bottom: 100px;

  .wp-block-group {
    margin-bottom: 120px !important;
    background-color: pink;
    @media (max-width: 1367px) {
      margin-bottom: 0px !important;
    }

    .wp-block-image {
      float: left;
      margin-left: 0;
      display: block;
      width: 30%;
      @media (max-width: 1367px) {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
    }

    h3 {
      padding-top: 30px;
      margin-bottom: 0px;

      @media (max-width: 1367px) {
        padding-bottom: 10px !important;
      }
    }

    h2 {
      padding-top: 30px;
      margin-bottom: 0px;
    }

    p {
      overflow-wrap: break-word;
    }

    .wp-block-group-partners {
      align-items: center;
      justify-content: space-evenly;

      @media (max-width: 1367px) {
        display: inline;
        align-items: unset;
        justify-content: unset;
      }
    }

    .wp-block-image-partners-logo {
      width: 250px;
      height: auto;
      background-color: pink;

      @media (max-width: 1367px) {
        width: 400px;
        height: unset;
        padding: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      @media (max-width: 800px) {
        width: 300px;
        height: unset;
        padding: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      @media (max-width: 600px) {
        width: 200px;
        height: unset;
        display: inline;
      }
    }
    /* 
    .advisoryGroup {
      padding-top: 150px;
    } */
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

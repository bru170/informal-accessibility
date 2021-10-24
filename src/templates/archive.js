import React from "react"
import {Helmet} from "react-helmet"
import {Link, graphql} from "gatsby"
import Layout from "../components/Layout/Layout"
import ArchiveCategories from "../components/ArchiveCategories/ArchiveCategories"
import Pagination from "../components/Pagination/Pagination"

import {Wrapper, StyledDate, Hr, StyledReadMore} from "./archive.styles"

const archiveTemplate = ({
  data: {allWpPost},
  pageContext: {catId, catName, catUri, categories, numPages, currentPage}
}) => {
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
          <h1 style={{marginTop: "30px"}}>Engagements</h1>
          <p>
            The content on this page documents our proccess and update you on events and
            publications
          </p>
          <Hr />
          <ArchiveCategories catId={catId} categories={categories.edges} />
          <Hr />
          {/* <h2 dangerouslySetInnerHTML={{__html: catName}} id="catergory" /> */}
          {allWpPost.edges.map((post) => (
            <article key={post.node.id} className="entry-content">
              <h3 dangerouslySetInnerHTML={{__html: post.node.title}} />
              <StyledDate dangerouslySetInnerHTML={{__html: post.node.date}} />
              <div dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
              <StyledReadMore to={`/engagements${post.node.uri}`}>
                {post.node.title}...continue reading
              </StyledReadMore>
              <Hr />
            </article>
          ))}
          <strong style={{paddingRight: 10}}>Tags:</strong>
          <Hr />
          <Pagination catUri={catUri} page={currentPage} totalPages={numPages} />
        </Wrapper>
      </Layout>
    </>
  )
}

export default archiveTemplate

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: {categories: {nodes: {elemMatch: {id: {eq: $catId}}}}}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "LL")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`

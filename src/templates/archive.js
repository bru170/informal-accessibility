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
          <title>Informal Accessibility</title>
          <meta name="Informal Accessibility" content="accessibility help" />
          <html lang="en" />
        </Helmet>
      </div>
      <Layout>
        <Wrapper>
          <h1 style={{marginTop: "30px"}}>Engagements</h1>
          <p>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan porttitor tortor ut
            pellentesque. Maecenas elementum neque sed dui consequat egestas. Pellentesque viverra
            purus sit amet sapien facilisis laoreet. Nullam pharetra purus lobortis, efficitur
            lectus vitae, elementum justo. Vestibulum a justo fermentum, eleifend est ut, facilisis
            sapien. Fusce aliquam condimentum tortor, vel lobortis enim sagittis
          </p>
          <Hr />
          <ArchiveCategories catId={catId} categories={categories.edges} />
          <Hr />

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

import React from "react"
import {Link, graphql} from "gatsby"
import {getImage} from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import ArchiveCategories from "../components/ArchiveSidebar/ArchiveCategories"
import Pagination from "../components/Pagination/Pagination"

import {Wrapper, StyledDate, Hr, StyledReadMore} from "./archive.styles"

const archiveTemplate = ({
  data: {allWpPost},
  pageContext: {catId, catName, catUri, categories, numPages, currentPage}
}) => {
  return (
    <Layout>
      <Wrapper>
        <h1 style={{marginTop: "30px"}}>Engagements</h1>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan porttitor tortor ut
          pellentesque. Maecenas elementum neque sed dui consequat egestas. Pellentesque viverra
          purus sit amet sapien facilisis laoreet. Nullam pharetra purus lobortis, efficitur lectus
          vitae, elementum justo. Vestibulum a justo fermentum, eleifend est ut, facilisis sapien.
          Fusce aliquam condimentum tortor, vel lobortis enim sagittis
        </p>
        <Hr />
        <ArchiveCategories catId={catId} categories={categories.edges} />
        <Hr />

        {allWpPost.edges.map((post) => (
          <article key={post.node.id} className="entry-content">
            <Link to={`/engagements${post.node.uri}`}>
              <h3 dangerouslySetInnerHTML={{__html: post.node.title}} />
            </Link>
            <StyledDate dangerouslySetInnerHTML={{__html: post.node.date}} />
            <div dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
            <StyledReadMore to={`/engagements${post.node.uri}`}>
              {post.node.title} continue reading
            </StyledReadMore>
            <Hr />
          </article>
        ))}
        <Pagination catUri={catUri} page={currentPage} totalPages={numPages} />
      </Wrapper>
    </Layout>
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

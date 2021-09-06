import React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import ArchiveCategories from "../components/ArchiveSidebar/ArchiveCategories"
import Pagination from "../components/Pagination/Pagination"

import {Wrapper, StyledH2, StyledDate, StyledReadMore} from "./archive.styles"

const archiveTemplate = ({
  data: {allWpPost},
  pageContext: {catId, catName, catUri, categories, numPages, currentPage}
}) => {
  console.log({allWpPost})
  return (
    <Layout>
      <Wrapper>
        <BreadCrumb
          parent={{
            uri: "/engagements/all-posts/",
            title: "engagements"
          }}
        />
        <ArchiveCategories catId={catId} categories={categories.edges} />
        <h1 dangerouslySetInnerHTML={{__html: catName}} />
        {allWpPost.edges.map((post) => (
          <article key={post.node.id} className="entry-content">
            <Link to={`/engagements${post.node.uri}`}>
              <StyledH2 dangerouslySetInnerHTML={{__html: post.node.title}} />
            </Link>
            <StyledDate dangerouslySetInnerHTML={{__html: post.node.date}} />
            <p dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
            <StyledReadMore to={`/engagements${post.node.uri}`}>
              {post.node.title} continue reading
            </StyledReadMore>
            <div className="dot-divider" />
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
          date(formatString: "DD MM YYYY")
        }
      }
    }
  }
`

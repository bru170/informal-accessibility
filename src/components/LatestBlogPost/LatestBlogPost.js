import React from "react"
import {Link} from "gatsby"
import {useLatestBlogPost} from "../../hooks/useLatestBlogPost"
import {Wrapper, StyledImg} from "./LatesBlogPost.styles"
import {getImage} from "gatsby-plugin-image"

const LatestBlogPost = () => {
  const data = useLatestBlogPost()
  const title = data.allWpPost.edges[0].node.title
  const date = data.allWpPost.edges[0].node.date
  const uri = data.allWpPost.edges[0].node.uri
  const featuredImage = data.allWpPost.edges[0].node.featuredImage

  return (
    <>
      <Wrapper>
        <h2>Featured Posts</h2>
        {featuredImage !== null && (
          <StyledImg
            image={getImage(featuredImage.node.localFile)}
            alt={featuredImage.node.altText}
          ></StyledImg>
        )}
        <Link to={`/engagements${uri}`} aria-label={`${title} blog post`}>
          {title}
        </Link>
        <p style={{textTransform: "capitalize"}}>{date}</p>
      </Wrapper>
    </>
  )
}

export default LatestBlogPost

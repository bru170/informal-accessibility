import React from "react"
import {Link} from "gatsby"
import {useLatestBlogPost} from "../../hooks/useLatestBlogPost"
import {Wrapper, StyledImg} from "./LatesBlogPost.styles"
import {getImage} from "gatsby-plugin-image"

const LatestBlogPost2 = () => {
  const index = 1
  const data = useLatestBlogPost()
  const title = data.allWpPost.edges[index].node.title
  const author = data.allWpPost.edges[index].node.author.node.name
  const date = data.allWpPost.edges[index].node.date
  const uri = data.allWpPost.edges[index].node.uri
  const featuredImage = data.allWpPost.edges[index].node.featuredImage

  return (
    <Wrapper>
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
  )
}

export default LatestBlogPost2

import React from "react"
import {Link} from "gatsby"
import {useLatestBlogPost} from "../../hooks/useLatestBlogPost"
import {Wrapper, StyledImg} from "./LatesBlogPost.styles"
import {getImage} from "gatsby-plugin-image"

const LatestBlogPost = () => {
  const data = useLatestBlogPost()
  const title = data.allWpPost.edges[0].node.title
  const author = data.allWpPost.edges[0].node.author.node.name
  const date = data.allWpPost.edges[0].node.date
  const except = data.allWpPost.edges[0].node.excerpt
  const uri = data.allWpPost.edges[0].node.uri
  const featuredImage = data.allWpPost.edges[0].node.featuredImage

  return (
    <>
      <Wrapper>
        <h2>Featured Posts</h2>
        <h3>{title}</h3>
        <p style={{textTransform: "capitalize"}}>{`By ${author} on ${date}`}</p>
        {featuredImage !== null && (
          <StyledImg
            image={getImage(featuredImage.node.localFile)}
            alt={featuredImage.node.altText}
          ></StyledImg>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: except
          }}
        />
        <Link to={`/engagements${uri}`}>{title}... continue reading</Link>
      </Wrapper>
    </>
  )
}

export default LatestBlogPost

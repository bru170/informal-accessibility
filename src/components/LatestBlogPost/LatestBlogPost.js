import React from "react"
import {Link} from "gatsby"
import {useLatestBlogPost} from "../../hooks/useLatestBlogPost"
import {Wrapper, StyledImg} from "./LatesBlogPost.styles"
import {getImage} from "gatsby-plugin-image"
import LatestBlogPost2 from "./LatestBlogPost2"
import LatestBlogPost3 from "./LatestBlogPost3"

const LatestBlogPost = () => {
  const index = 0
  const data = useLatestBlogPost()
  const title = data.allWpPost.edges[index].node.title
  const author = data.allWpPost.edges[index].node.author.node.name
  const date = data.allWpPost.edges[index].node.date
  const except = data.allWpPost.edges[index].node.excerpt
  const uri = data.allWpPost.edges[index].node.uri
  const featuredImage = data.allWpPost.edges[index].node.featuredImage

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
      <LatestBlogPost2 />
      <LatestBlogPost3 />
    </>
  )
}

export default LatestBlogPost

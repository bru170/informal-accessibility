import React from "react"
import {Link} from "gatsby"
import {useLatestBlogPost} from "../../hooks/useLatestBlogPost"
import {Wrapper, StyledImg, StyledH2} from "./LatesBlogPost.styles"
import {getImage} from "gatsby-plugin-image"

const LatestBlogPost2 = () => {
  const index = 1
  const data = useLatestBlogPost()
  const title = data.allWpPost.edges[index].node.title
  const author = data.allWpPost.edges[index].node.author.node.name
  const date = data.allWpPost.edges[index].node.date
  const except = data.allWpPost.edges[index].node.excerpt
  const uri = data.allWpPost.edges[index].node.uri
  const featuredImage = data.allWpPost.edges[index].node.featuredImage

  return (
    <Wrapper>
      <Link to={`/blog${uri}`}>
        <h3>{title}</h3>
      </Link>
      <p>{`By ${author} on ${date}`}</p>
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
      <Link to={`/blog${uri}`}>{title}... continue reading</Link>
    </Wrapper>
  )
}

export default LatestBlogPost2

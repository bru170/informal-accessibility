import React from "react"
import {Helmet} from "react-helmet"
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout/Layout"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import CategoriesPostbar from "../../components/CategoriesPostBar/CategoriesPostbar"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

const PostContent = styled.article`
  margin-top: 20px;
`

const PostDetails = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`

const PostTemplate = ({data}) => {
  console.log({data})
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
          <BreadCrumb
            parent={{
              uri: "/engagements/all-posts",
              title: "Engagements"
            }}
          />
          <h1 dangerouslySetInnerHTML={{__html: data.post.title}} />
          <span>By </span>
          <PostDetails dangerouslySetInnerHTML={{__html: data.post.author.node.name}} />
          <span> on </span>
          <PostDetails
            dangerouslySetInnerHTML={{__html: data.post.date}}
            style={{marginBottom: 20}}
          />
          <PostContent>
            <div dangerouslySetInnerHTML={{__html: data.post.content}} />
          </PostContent>
          <CategoriesPostbar
            date={data.post.date}
            author={data.post.author.node.name}
            categories={data.post.categories.nodes}
          />
        </Wrapper>
      </Layout>
    </>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    post: wpPost(id: {eq: $id}) {
      title
      content
      author {
        node {
          name
        }
      }
      date(formatString: "LL")
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
    }
  }
`

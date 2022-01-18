import React from "react"
import {Helmet} from "react-helmet"
import {graphql} from "gatsby"
import Layout from "../../components/Layout/Layout"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import CategoriesPostbar from "../../components/CategoriesPostBar/CategoriesPostbar"
import styled from "styled-components"
import {BsFillPersonFill} from "react-icons/bs"

const Wrapper = styled.div`
  max-width: 1000px;
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

const StyledH1 = styled.h1`
  padding-top: 40px;

  @media (max-width: 800px) {
    padding-top: 0px;
  }
`

const Content = styled.div`
  .wp-block-image {
    float: left;
    margin-left: 0;
    display: block;
    width: 100%;
    @media (max-width: 1367px) {
      width: 100%;
      padding-top: 0%;
      margin-top: 0;
      margin-left: auto;
      margin-right: auto;
    }
  }
`

const PersonIcon = styled(BsFillPersonFill)`
  transform: scale(1.5);
  color: grey;
`

const PostTemplate = ({data}) => {
  console.log({data})
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
          <BreadCrumb
            parent={{
              uri: "/engagements/all-posts/",
              title: "Engagements"
            }}
          />
          <PostContent>
            <Content dangerouslySetInnerHTML={{__html: data.post.content}} />
          </PostContent>
          <CategoriesPostbar
            date={data.post.date}
            author={data.post.author.node.name}
            categories={data.post.categories.nodes}
            tags={data.post.tags.nodes}
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
      tags {
        nodes {
          id
          name
          slug
          uri
        }
      }
      categories {
        nodes {
          description
          name
          uri
          slug
        }
      }
    }
  }
`

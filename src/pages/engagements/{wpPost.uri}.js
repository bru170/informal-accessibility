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
              uri: "/engagements/all-posts",
              title: "Engagements"
            }}
          />
          <StyledH1 dangerouslySetInnerHTML={{__html: data.post.title}} />
          <span>
            <PersonIcon />
          </span>
          <PostDetails
            dangerouslySetInnerHTML={{__html: data.post.author.node.name}}
            style={{paddingLeft: "5px"}}
          />
          <span> - </span>
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

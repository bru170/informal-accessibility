import {useStaticQuery, graphql} from "gatsby"

export const useLatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query MyLatestBlogPostQuery {
      allWpPost(sort: {fields: date, order: DESC}) {
        edges {
          node {
            title
            excerpt
            uri
            featuredImage {
              node {
                altText
                sizes
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: NONE)
                  }
                }
              }
            }
            author {
              node {
                name
                username
              }
            }
            date(formatString: "LL")
          }
        }
      }
    }
  `)

  return data
}

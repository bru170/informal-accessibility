import {useStaticQuery, graphql} from "gatsby"

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wpPage(databaseId: {eq: 47}) {
        content
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `)

  return data
}

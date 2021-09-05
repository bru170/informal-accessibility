import {useStaticQuery, graphql} from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      menu: wpMenu(name: {eq: "mainNav"}) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                label
                url
                id
              }
            }
          }
        }
      }
    }
  `)

  return data
}

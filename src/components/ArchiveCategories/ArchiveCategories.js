import React from "react"
import {Link} from "gatsby"
import {AnchorLink} from "gatsby-plugin-anchor-links"
import {CategoryWrapper, Menu, ListItems} from "./ArchiveCategories.styles"

const ArchiveCategories = ({categories}) => {
  const sortedCategories = [...categories].sort((x, y) => {
    if (x.node.slug === "all-posts") return -1
    if (y.node.slug === "all-posts") return 1
    return 0
  })

  return (
    <CategoryWrapper>
      <Menu>
        {sortedCategories.map((cat) => {
          if (cat.node.count !== 0) {
            return cat.node.slug !== "uncategorized" ? (
              <AnchorLink to={`${cat.node.uri}#catergory`} activeClassName="categories-active">
                <ListItems key={cat.node.id}>
                  <h3 dangerouslySetInnerHTML={{__html: cat.node.name}} />
                </ListItems>
              </AnchorLink>
            ) : null
          }
          return null
        })}
      </Menu>
    </CategoryWrapper>
  )
}

export default ArchiveCategories

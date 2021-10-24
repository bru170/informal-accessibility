import React from "react"
import {Link} from "gatsby"
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
              <Link to={`${cat.node.uri}`} activeClassName="categories-active">
                <ListItems key={cat.node.id}>
                  <h3 dangerouslySetInnerHTML={{__html: cat.node.name}} />
                </ListItems>
              </Link>
            ) : null
          }
          return null
        })}
      </Menu>
    </CategoryWrapper>
  )
}

export default ArchiveCategories

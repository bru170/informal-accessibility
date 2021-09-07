import React from "react"
import {Link} from "gatsby"
import {CategoryWrapper, Menu} from "./ArchiveCategories.styles"

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
              <li key={cat.node.id}>
                <Link to={`${cat.node.uri}`}>
                  <h3 dangerouslySetInnerHTML={{__html: cat.node.name}} />
                </Link>
              </li>
            ) : null
          }
          return null
        })}
      </Menu>
    </CategoryWrapper>
  )
}

export default ArchiveCategories

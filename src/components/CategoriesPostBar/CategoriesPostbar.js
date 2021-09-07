import React from "react"
import {Link} from "gatsby"
import {Wrapper, List} from "./CategoriesPostbar.styles"

const CategoriesPostbar = ({categories}) => (
  <Wrapper>
    <List>
      {categories.map((cat) =>
        cat.slug === "all-posts" ? "" : <div style={{paddingRight: 10}}>Category:</div>
      )}
      {categories.map((cat) =>
        cat.slug !== "all-posts" ? (
          <li key={cat.id}>
            <Link to={`${cat.uri}`}>
              <span dangerouslySetInnerHTML={{__html: cat.name}} />
            </Link>
          </li>
        ) : null
      )}
    </List>
  </Wrapper>
)

export default CategoriesPostbar

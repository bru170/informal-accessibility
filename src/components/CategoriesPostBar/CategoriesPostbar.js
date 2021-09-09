import React from "react"
import {Link} from "gatsby"
import {Wrapper, List} from "./CategoriesPostbar.styles"

const CategoriesPostbar = ({categories}) => (
  <Wrapper>
    <List>
      {/* {categories.map((cat) =>
        cat.slug === "all-posts" ? "" : <div style={{paddingRight: 10}}>Category:</div>
      )} */}
      <strong style={{paddingRight: 10}}>Categories:</strong>
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
    <strong style={{paddingRight: 10}}>Tags:</strong>
  </Wrapper>
)

export default CategoriesPostbar

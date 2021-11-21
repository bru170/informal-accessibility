import React from "react"
import {Link} from "gatsby"
import {Wrapper, List} from "./CategoriesPostbar.styles"

const CategoriesPostbar = ({categories, tags}) => (
  <Wrapper>
    <h3>Categories:</h3>
    {/* {categories.map((cat) =>
        cat.slug === "all-posts" ? "" : <div style={{paddingRight: 10}}>Category:</div>
      )} */}
    {categories.map((cat) =>
      cat.slug !== "all-posts" ? (
        <List key={cat.id}>
          <Link to={`${cat.uri}`}>
            <span dangerouslySetInnerHTML={{__html: cat.name}} />
          </Link>
        </List>
      ) : null
    )}
    <h3>Tags:</h3>
    {tags.map((tags) =>
      tags.slug !== "all-posts" ? (
        <List key={tags.id}>
          <Link to={`${tags.uri}`}>
            <span dangerouslySetInnerHTML={{__html: tags.name}} />
          </Link>
        </List>
      ) : (
        <span>
          <p>No tags available</p>
        </span>
      )
    )}
  </Wrapper>
)

export default CategoriesPostbar

import React from "react"
import {Link} from "gatsby"
import {Wrapper} from "./Pagination.styles"

const Pagination = ({catUri, page, totalPages}) => (
  <>
    <h4>
      Page {page} / {totalPages}
    </h4>
    <Wrapper isFirst={page === 1}>
      {page > 1 ? (
        <Link to={`${catUri}${page === 2 ? "" : page - 1}`} className="back">
          &larr; Newer Posts
        </Link>
      ) : null}
      {page < totalPages ? (
        <Link to={`${catUri}${page + 1}`} className="forward">
          Older Posts &rarr;
        </Link>
      ) : null}
    </Wrapper>
  </>
)

export default Pagination

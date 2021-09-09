import styled from "styled-components"

export const CategoryWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: left;
`

export const Menu = styled.ul`
  display: flex;
  list-style-type: none !important;
  margin: 0 auto;

  @media (max-width: 1220px) {
  }

  @media (max-width: 800px) {
    /* flex-direction: column;
    columns: 100px;
    align-items: start; */
  }

  .categories-active {
    /* text-decoration: underline;
    text-decoration-color: #bb3355;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px; */
  }

  h3 {
    font-size: 1rem;
  }
`

export const ListItems = styled.li`
  display: inline;

  @media (max-width: 800px) {
    width: 25%;
    white-space: pre;
  }

  h2 {
    font-size: 1rem;
    color: black;
  }
`

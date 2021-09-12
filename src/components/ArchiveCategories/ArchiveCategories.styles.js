import styled from "styled-components"

export const CategoryWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  text-align: left;
`

export const Menu = styled.ul`
  display: flex;
  list-style-type: none !important;
  margin: 0 auto;

  .categories-active {
    text-decoration: underline;
    background-color: #bb3355;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    text-decoration-color: white;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }

  h3 {
    font-size: 1rem;
  }
`

export const ListItems = styled.li`
  display: inline;
  padding: 10px;

  @media (max-width: 800px) {
    width: 25%;
    white-space: pre;
  }

  h2 {
    font-size: 1rem;
    color: black;
  }
`

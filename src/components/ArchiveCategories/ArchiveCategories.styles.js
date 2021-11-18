import styled from "styled-components"

export const CategoryWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  text-align: left;
`

export const Menu = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  list-style-type: none !important;
  margin-left: 0px !important;
  padding-left: 0px !important;

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
  margin: 10px;
`

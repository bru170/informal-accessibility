import styled from "styled-components"

export const CategoryWrapper = styled.nav`
  width: 100%;
  margin: 0;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none !important;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 1220px) {
    padding: 0 0px;
  }

  @media (max-width: 800px) {
    max-width: 700px;
    /* flex-direction: column;
    columns: 100px;
    align-items: start; */
  }

  .categories-active {
    color: white;
    border: 1px solid #bb3355;
    padding: 15px;
    background: #bb3355;
    border-radius: 10px;
  }
`

export const ListItems = styled.li`
  display: inline;

  @media (max-width: 800px) {
    width: 25%;
    white-space: pre;
    padding-right: 5px;
  }

  h2 {
    font-size: 1rem;
    color: black;
    @media (max-width: 800px) {
      color: white;
    }
  }
`

import styled from "styled-components"

export const StyledH2 = styled.h2`
  font-size: 1rem;
  color: white;
`

export const CategoryWrapper = styled.nav`
  width: 100%;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none !important;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 5px;

  @media (max-width: 1220px) {
    padding: 0 0px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: start;
  }
`

export const ListItems = styled.li`
  border: 1px solid #bb3355;
  padding: 15px;
  background: #bb3355;
  display: inline;
  white-space: pre;
  border-radius: 10px;

  @media (max-width: 680px) {
    width: 100%;
    white-space: pre;
  }
`

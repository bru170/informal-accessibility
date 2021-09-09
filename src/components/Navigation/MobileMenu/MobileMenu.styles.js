import styled from "styled-components"

export const MobileMenuOverlay = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  margin-left: 1rem;
  width: 100%;
  background-color: #f0f0f0;
  padding-bottom: 1rem;

  @media (min-width: 800px) {
    display: none;
  }
`
export const TextPadding = styled.nav`
  margin-left: 0.2rem;
`

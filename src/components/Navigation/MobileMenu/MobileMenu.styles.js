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

  .mobile-menu-active {
    text-decoration: underline;
    text-decoration-color: #bb3355;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }

  @media (min-width: 800px) {
    display: none;
  }
`
export const TextPadding = styled.nav`
  margin-left: 0.2rem;
`

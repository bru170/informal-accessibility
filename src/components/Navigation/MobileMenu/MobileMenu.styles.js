import styled from "styled-components"

export const MobileMenuOverlay = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  margin-left: auto;
  padding-left: 20px !important;
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

  li {
    padding-bottom: 10px;
  }
`
export const TextPadding = styled.nav`
  margin-left: 0.2rem;
`

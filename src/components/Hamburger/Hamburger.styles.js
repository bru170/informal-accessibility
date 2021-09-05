import styled from "styled-components"

export const HamburgerButton = styled.div`
  position: fixed;
  display: block;
  z-index: 100000;
  right: 30px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    transform: scale(1.2);
  }

  @media (min-width: 992px) {
    display: none;
  }
`

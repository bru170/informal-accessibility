import styled from "styled-components"

export const NavigationWrapper = styled.nav`
  font-family: "Fira Sans";
  font-size: 1rem;
  letter-spacing: 1px;
  display: none;

  .nav-active {
    text-decoration: underline;
    text-decoration-color: #bb3355;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
    color: #bb3355;
  }

  @media (min-width: 800px) {
    font-size: 0.85rem;
    display: block;
  }

  @media (min-width: 1200px) {
    font-size: 1rem;
  }

  ul li {
    display: block;
    margin: 0 10px 0 0;
    float: left;
    height: 40px;
    position: relative;

    a {
      display: flex;
      padding: 0 0 0 10px;
      transition: all 0.2s ease;
      text-decoration: none;
      color: #bb3355;

      div {
        margin: -4px 0 0 5px;
      }
    }
  }

  ul li:last-child {
    margin: 0;
  }

  ul li:hover > ul {
    display: block;
  }

  ul li a:hover {
    color: #bb3355;
    text-decoration: underline;
    text-decoration-color: #bb3355;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }

  .nav-active {
    text-decoration: underline !important;
    text-decoration-color: #bb3355 !important;
    text-underline-offset: 3px !important;
    text-decoration-thickness: 3px !important;
  }
`

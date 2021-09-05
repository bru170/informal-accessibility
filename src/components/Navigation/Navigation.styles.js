import styled from "styled-components"

export const NavigationWrapper = styled.nav`
  font-family: "Helvetica";
  color: pink;
  font-size: 1rem;
  letter-spacing: 1px;
  display: none;

  .nav-active {
    color: ##bb3355;
    text-decoration: underline;
  }

  @media (min-width: 992px) {
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
      color: #000;

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
    color: #ee2562;
  }

  ul ul {
    animation: fadeInMenu 0.3s both ease-in;
    display: none;
    position: absolute;
    left: 0;
    margin: 0;
    top: 0px;
    text-transform: none;
    background: #fff;
    padding: 0px 10px 10px 10px;
    box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
  }

  ul ul li {
    width: auto;
    min-width: 170px;
  }

  ul ul li a {
    padding: 5px 10px;
    text-decoration: none;
    white-space: nowrap;
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

import styled from "styled-components"

export const Wrapper = styled.aside`
  margin: 40px 0 0 0;
  min-width: 25%;

  @media (min-width: 992px) {
    margin: 125px 15px 0 0;
  }
`

export const Menu = styled.ul`
  list-style-type: none !important;
  display: flex;
  padding: 0 20px 0 0;
  margin: 0;

  li {
    margin: 0 40px 5px 0px;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;

    a:hover {
      color: #ee2562;
    }
  }

  .sidebar-highlighted {
    color: #ee2562;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.2rem;
    letter-spacing: 0.5px;

    a {
      font-weight: 800;
    }
  }

  img {
    float: left;
    padding: 0 10px 0 0;
    width: 38px;
    height: auto;
  }
`

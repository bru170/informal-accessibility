import styled from "styled-components"

export const Container = styled.footer`
  background: #bb3355;
  padding-bottom: 200px;
`

export const Wrapper = styled.div`
  padding: 110px 0 0 0;
  margin: 2rem;

  @media (max-width: 800px) {
    padding: 20px 0 0 0;
  }
`

export const Para = styled.p`
  color: white;
`

export const SiteMap = styled.ul`
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

  a {
    color: white !important;
    text-decoration: underline;
  }

  a:hover {
    text-decoration: underline;
  }

  li {
    padding-right: 20px;
  }
`
